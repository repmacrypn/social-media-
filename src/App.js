import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeaderContainer from './components/header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common components/preloader/Preloader';
const DialogsContainer = lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/profile/ProfileContainer'));
const LoginPage = lazy(() => import('./components/loginPage/LoginPage'));
const SearchForFriendsContainer = lazy(() => import('./components/searchForFriends/SearchForFriendsContainer'));

/* исправить переходы на страницы(чтобы показывало что они еще делаются, а не 404),
  в том числе и страницу с сообщениями.Сделать возможным добавление постов только
если isOwner, так же как и для изменения статуса.Попытаться исправить ситуацию с
показыванием каптчи после повторного выхода. */


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='generalContent'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path='/' element={<Navigate to='/profile' />} />
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/messages/*' element={<DialogsContainer />} />
              <Route path='/searchForFriends/*' element={<SearchForFriendsContainer />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />  {/* работает только с BrowserRouter (у нас Hash) */}
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
