new Vue({
  el: '#register',
  data: {
    timer: 0,
    name: '',
    phone: '',
    phone_message: {
      status: '',
      message: '',
    },
    captcha: '',
    captcha_message: {
      status: '',
      message: '',
    },
    password: '',
    password_message: {
      status: '',
      message: '',
    },
    retype_password: '',
    province: '',
    city: '',
    district: '',
  },
  watch: {
    phone() {
      this.regPhone();
    },
    password() {
      this.comparePassword();
    },
    retype_password() {
      this.comparePassword();
    },
  },
  methods: {
    comparePassword() {
      if (this.retype_password !== this.password) {
        this.password_message.status = false;
        this.password_message.message = '两次输入的密码不一致';
        $('#password,#retype_password').addClass('is-invalid');
      } else {
        this.password_message.status = true;
        this.password_message.message = '';
        $('#password,#retype_password').removeClass('is-invalid');
      }
    },
    regPhone() {
      const reg = /^1[3578]\d{9}$/;
      if (!reg.test(this.phone) && this.phone) {
        this.phone_message.status = false;
        this.phone_message.message = '请输入正确的手机号';
        $('#phone').addClass('is-invalid');
        $('#captcha_button').addClass('disabled');
      } else {
        this.phone_message.status = true;
        this.phone_message.message = '';
        $('#phone').removeClass('is-invalid');
        $('#captcha_button').removeClass('disabled');
      }
    },
    sendMessage() {
      const vm = this;
      let timer;
      if (!vm.timer && vm.phone_message.status) {
        vm.timer = 60;
        $('#captcha_button').attr('disabled', 'disabled');
        timer = setInterval(() => {
          if (!vm.timer) {
            clearInterval(timer);
            $('#captcha_button').removeAttr('disabled').text('再次发送');
          } else {
            vm.timer -= 1;
            $('#captcha_button').text(`${vm.timer}秒后再次发送`);
          }
        }, 1000);
        $.post('/verify/sendMessage', { phone: vm.phone }, (data) => {
          console.log(data);
        });
      }
    },
    submit() {
      if (this.phone_message.status && this.password_message.status) {
        $.post('/auth/register', {
          name: this.name,
          phone: this.phone,
          password: this.password,
          verifyCode: this.captcha,
        }, (data) => {
          console.log(data);
        });
      }
    },
  },
  mounted() {
    $('#distpicker').distpicker({
      province: '－－－所在省－－－',
      city: '－－－所在市－－－',
      district: '－－－所在区－－－',
    });
  },
});
