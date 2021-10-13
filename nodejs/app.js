let formidable = require("formidable");
let http = require("http");
let fs = require("fs");
var mv = require('mv');

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      let form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        let oldpath = files.fileupload.path;
        let newpath =
          "D:/learn/crouse-Other/crouse-Pati/nodejs/img/" +
          files.fileupload.name;
        mv(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action = "fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="fileupload" > <br>');
      res.write('<input type="submit"> <br>');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8000);
