"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[210],{5176:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var r=o(1413),s=o(5671),a=o(3144),i=o(136),n=o(7277),l=o(2791),u=o(9101),d=o(2661),f=o(6508),c={},p="Post_avatar__wYY9I",h="Post_postText__4Lm6J",P="Post_likesItem__m3xyx",m="Post_postWrapper__5ROJz",g=o(8166),x=o(184),v=function(e){var t=e.smallProfilePhoto,o=e.likesCount,r=e.text;return(0,x.jsxs)("div",{className:m,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("img",{src:t||g,alt:"profile avatar",className:p}),(0,x.jsxs)("span",{className:h,children:[r," "]})]}),(0,x.jsxs)("div",{className:P,children:[" likes: ",o]})]})},j={addPostFieldError:"AddPostForm_addPostFieldError__gHvw-",errorMessage:"AddPostForm_errorMessage__xzbi9"},b=o(5705),_=o(1091),S=function(e){var t=e.addPost,o=(0,b.TA)({initialValues:{addPostField:""},validationSchema:_.vo,onSubmit:function(e,o){t(e.addPostField),o.resetForm()}}),r=o.values,s=o.errors,a=o.touched,i=o.isSubmitting,n=o.handleChange,l=o.handleBlur,u=o.handleSubmit;return(0,x.jsxs)("form",{onSubmit:u,autoComplete:"off",children:[(0,x.jsxs)("div",{className:j.textareaField,children:[(0,x.jsx)("textarea",{name:"addPostField",id:"addPostField",type:"textarea",onChange:n,value:r.addPostField,placeholder:"Share your news:)",onBlur:l,className:s.addPostField&&a.addPostField?j.addPostFieldError:""}),s.addPostField&&a.addPostField&&(0,x.jsx)("p",{className:j.errorMessage,children:s.addPostField})]}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{disabled:i,type:"submit",children:"add post"})})]})},F=function(e){var t=e.addPost,o=e.posts,r=e.smallProfilePhoto;return(0,x.jsxs)("div",{className:c.posts,children:["My posts",(0,x.jsx)(S,{addPost:t}),o.map((function(e,t){return(0,x.jsx)(v,{smallProfilePhoto:r,text:e.text,likesCount:o[t].likesCount},e.id)}))]})},k=(0,u.$j)((function(e){return{posts:e.profileReducer.posts}}),{addPost:f.q2})(F),y={largeProfilePhoto:"ProfileInfo_largeProfilePhoto__YuZFa",profileInfo:"ProfileInfo_profileInfo__KHMX6"},Z=o.p+"static/media/defaultLargeUserPhoto.6fd2b4bcaf03a2cb4037.jpg",w=function(e){var t=e.profilePage,o=e.isOwner,r=e.saveProfilePhoto;return(0,x.jsxs)("div",{className:y.profileInfoAndPhoto,children:[(0,x.jsx)("img",{className:y.largeProfilePhoto,alt:"large profile avatar",src:t.photos.large?t.photos.large:Z}),o&&(0,x.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),(0,x.jsxs)("div",{className:y.profileInfo,children:["Hey! ",(0,x.jsx)("br",{}),"My name is ",t.fullName?t.fullName:"none:)"," ",(0,x.jsx)("br",{}),"Some info about me: ",t.aboutMe?t.aboutMe:"none:)"," ",(0,x.jsx)("br",{}),"Looking for a job description: ",t.lookingForAJob?t.lookingForAJobDescription:"none:)"," ",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"My contacts:  ",(0,x.jsx)("br",{}),"vk - ",t.contacts.vk?t.contacts.vk:"none:)"," ",(0,x.jsx)("br",{}),"facebook - ",t.contacts.facebook?t.contacts.facebook:"none:)"," ",(0,x.jsx)("br",{}),"instagram - ",t.contacts.instagram?t.contacts.instagram:"none:)"," ",(0,x.jsx)("br",{}),"github - ",t.contacts.github?t.contacts.github:"none:)"," ",(0,x.jsx)("br",{})]})]})},C={mainPic:"Profile_mainPic__9UGwW"},I=o(9439),N=l.memo((function(e){var t=e.profileStatus,o=e.updateProfileStatus,r=(0,l.useState)(!1),s=(0,I.Z)(r,2),a=s[0],i=s[1],n=(0,l.useState)(t),u=(0,I.Z)(n,2),d=u[0],f=u[1];(0,l.useEffect)((function(){return f(t)}),[t]);var c;return c=a?(0,x.jsx)("input",{value:d||"",onChange:function(e){f(e.target.value)},autoFocus:!0,onBlur:function(){i(!1),o(d)}}):(0,x.jsx)("span",{onClick:function(){i(!0)},children:t||"defaultStatus"}),(0,x.jsx)("div",{children:c})})),A=function(e){var t=e.profilePage,o=e.profileStatus,r=e.updateProfileStatus,s=e.saveProfilePhoto,a=e.isOwner;return t?(0,x.jsxs)("main",{className:C.content,children:[(0,x.jsx)(N,{profileStatus:o,updateProfileStatus:r}),(0,x.jsx)(w,{isOwner:a,saveProfilePhoto:s,profilePage:t}),(0,x.jsx)(k,{smallProfilePhoto:t.photos.small})]}):(0,x.jsx)(d.Z,{})},M=o(7689),R=o(1548),q=function(e){(0,i.Z)(o,e);var t=(0,n.Z)(o);function o(){var e;(0,s.Z)(this,o);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).refreshProfilePage=function(){var t=e.props.param.userId;t||(t=e.props.authorizedUserId),e.props.getProfilePage(t),e.props.getProfileStatus(t)},e}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){this.refreshProfilePage()}},{key:"componentDidUpdate",value:function(e){e.param.userId!==this.props.param.userId&&this.refreshProfilePage()}},{key:"render",value:function(){return(0,x.jsx)(A,{saveProfilePhoto:this.props.saveProfilePhoto,isOwner:!this.props.param.userId,profileStatus:this.props.profileStatus,updateProfileStatus:this.props.updateProfileStatus,profilePage:this.props.profilePage})}}]),o}(l.Component),O=(0,R.D)(q),U=(0,u.$j)((function(e){return{profilePage:e.profileReducer.profilePage,profileStatus:e.profileReducer.profileStatus,authorizedUserId:e.authReducer.id,isAuth:e.authReducer.isAuth}}),{getProfilePage:f.CJ,updateProfileStatus:f.vq,getProfileStatus:f.TL,saveProfilePhoto:f.ew})((function(e){return(0,x.jsx)(O,(0,r.Z)((0,r.Z)({},e),{},{param:(0,M.UO)()}))}))},1548:function(e,t,o){o.d(t,{D:function(){return p}});var r=o(1413),s=o(5671),a=o(3144),i=o(136),n=o(7277),l=o(2791),u=o(9101),d=o(7689),f=o(184),c=function(e){return{isAuth:e.authReducer.isAuth}},p=function(e){var t=function(t){(0,i.Z)(l,t);var o=(0,n.Z)(l);function l(){return(0,s.Z)(this,l),o.apply(this,arguments)}return(0,a.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,r.Z)({},this.props)):(0,f.jsx)(d.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(c)(t)}},1091:function(e,t,o){o.d(t,{W3:function(){return s},bD:function(){return i},vo:function(){return a}});var r=o(6727),s=r.Ry().shape({email:r.Z_().email("Please enter the valid email.").required("Email required."),password:r.Z_().min(5,"Password is too short - should be 5 chars minimum.").matches(/(?=.*[0-9])/,{message:"Please create a stronger password."}).required("Password required."),rememberMe:r.O7()}),a=r.Ry().shape({addPostField:r.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")}),i=r.Ry().shape({addMessageField:r.Z_().max(50,"Text is too long - should be 50 chars maximum.").required("Required.")})},8166:function(e,t,o){e.exports=o.p+"static/media/defaultSmallUserPhoto.b03d82111adb48e16775.jpeg"}}]);
//# sourceMappingURL=210.7e911e4c.chunk.js.map