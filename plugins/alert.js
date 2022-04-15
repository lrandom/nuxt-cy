export default (context, inject) => {
  //tiêm plugin vào context của nuxt nếu chạy SSR
  //tiêm plugin vào vue root instance nễu chạy CSR
  inject('alert', function (message) {
    alert(message);//WEB API
  });
}
