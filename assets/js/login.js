$(function () {
  //点击注册跳转到登录
  $('#link_reg').on('click', function () {
    $('.login-box').hide();
    $('.reg-box').show();
  });
  //点击登录跳转到注册
  $('#link_login').on('click', function () {
    $('.login-box').show();
    $('.reg-box').hide();
  });

  //自定义效验规则
  var form = layui.form;
  var layer = layui.layer;
  form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须是6-12位，且不能为空'],
    repwd: function (value) {
      var pwd = $('.reg-box [name=password]').val();
      if (pwd !== value) {
        return '两次密码不一致';
      }
    }
  });

  //注册账号
  $('#form_reg').on('submit', function (e) {
    e.preventDefault();
    var data = {
      username: $('#form_reg [name=username]').val(),
      password: $('#form_reg [name=password]').val()
    };
    //注册验证
    $.post('/api/reguser', data, function (res) {
      if (res.status !== 0) {
        return console.log('注册失败', res.message);
        return layer.msg(res.message);
      }
      layer.msg('注册成功，请登录！');
      //如果正确了，则自动点击跳转
      $('#link_login').click();
    });
  });

  //登录验证
  $('#form_login').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/api/login',
      //获取表单内的所有护具
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          //失败弹框
          return layer.msg('登录失败 ');
        }
        //layer中的msg弹框方法
        layer.msg('登录成功');
        //将值储存到本地内存地址内永久储存
        localStorage.setItem('token', res.token);
        //跳转页面
        location.href = '/index.html';
      }
    });
  });
});
