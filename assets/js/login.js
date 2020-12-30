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
});
