webpackJsonp([1],{6:function(s,e,t){"use strict";t(7)},7:function(s,e,t){"use strict";new Vue({el:"#register",data:{timer:0,name:"",phone:"",phone_message:{status:"",message:""},captcha:"",captcha_message:{status:"",message:""},password:"",password_message:{status:"",message:""},retype_password:"",province:"",city:"",district:""},watch:{phone:function(){this.regPhone()},password:function(){this.comparePassword()},retype_password:function(){this.comparePassword()}},methods:{comparePassword:function(){this.retype_password!==this.password?(this.password_message.status=!1,this.password_message.message="两次输入的密码不一致",$("#password,#retype_password").addClass("is-invalid")):(this.password_message.status=!0,this.password_message.message="",$("#password,#retype_password").removeClass("is-invalid"))},regPhone:function(){!/^1[3578]\d{9}$/.test(this.phone)&&this.phone?(this.phone_message.status=!1,this.phone_message.message="请输入正确的手机号",$("#phone").addClass("is-invalid"),$("#captcha_button").addClass("disabled")):(this.phone_message.status=!0,this.phone_message.message="",$("#phone").removeClass("is-invalid"),$("#captcha_button").removeClass("disabled"))},sendMessage:function(){var s=this,e=void 0;!s.timer&&s.phone_message.status&&(s.timer=60,$("#captcha_button").attr("disabled","disabled"),e=setInterval(function(){s.timer?(s.timer-=1,$("#captcha_button").text(s.timer+"秒后再次发送")):(clearInterval(e),$("#captcha_button").removeAttr("disabled").text("再次发送"))},1e3),$.post("/verify/sendMessage",{phone:s.phone},function(s){}))},submit:function(){this.phone_message.status&&this.password_message.status&&$.post("/auth/register",{name:this.name,phone:this.phone,password:this.password,verifyCode:this.captcha},function(s){})}},mounted:function(){$("#distpicker").distpicker({province:"－－－所在省－－－",city:"－－－所在市－－－",district:"－－－所在区－－－"})}})}},[6]);