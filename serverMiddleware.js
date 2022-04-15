export default (req, res, next) => {
  if (req.url.includes('/about')) {
    res.writeHead(301, {'Location': '/'}); //redirect về trang chủ
    res.end(); //kết thúc request
  } else if (req.url.includes('/test')) {
    //trả về json
    res.writeHead(200, {'Content-Type': 'application/json'});
    const json = JSON.stringify({
      name: 'Nguyen Van A',
      age: 20
    });
    res.end(json);
  } else {
    next(); //điều hướng về trang ban đầu của request
  }
};
