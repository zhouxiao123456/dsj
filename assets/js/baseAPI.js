//注意:每次调用ajax的请求是都会自动调用这个函数
//这个函数就可以拿到我们给ajax提供的配置项对象
//这个options就是拿到的配置对象，所以options.url 就是配置的路径
$.ajaxPrefilter(function (options) {
  //在发起真的请求之前，统一拼接请求的根路径
  options.url = 'http://ajax.frontend.itheima.net' + options.url;
});
