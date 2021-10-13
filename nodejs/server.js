let http = require("http");
let dt = require("./myfirstmudule");
let url = require("url");
let fs = require("fs");
let uc = require("upper-case");
let rs = fs.createReadStream("./demo.txt");
let events = require("events");
let eventsEmitter = new events.EventEmitter();

//Create an event handler 
let myEventHandler = ()=>{
    console.log('i hear scream')
}
// assign events
eventsEmitter.on('scream', myEventHandler)

// เรียกใช้
eventsEmitter.emit('scream')
 

// let adr = "http://localhost:8000/default.html?year=2000&month=november";
// let q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata)
// console.log(qdata.year)

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("hello world"));
    res.end;
  })
  .listen(8000, () => {
    console.log("start server");
  });

// //// writeFile แทนที่เนื้อหา
// //// appendFile อัพเดท
// //// unlink     ลบ
// //// rename
// fs.rename("mynewfile2.txt",'myrenamefile.txt', (err) => {
//   if (err) throw err;
//   console.log("Saved!");
// });

//   fs.open('mynewfile2.txt', 'w', (err, file)=>{
//       if(err) throw err;
//       console.log('Saved!')
//   })

//   fs.appendFile('mynewfile.txt', 'hello world ', (err)=>{
//       if(err) throw err;
//       console.log('Saved!')
//   })
