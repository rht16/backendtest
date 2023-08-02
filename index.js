const express = require('express');
const app = express();
const multer = require("multer");
const fs = require('fs');
const readline = require('readline');
app.use(express.json());
const upload = multer({ dest: "public/files" });

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/add', (req, res) => {
    const {arr}  = req.body
    let sum = 0
    arr.map((e)=>{
        sum+=e
    })
    return res.status(201)
      .send({
        sum,
        msg: "successfully added"
      })
  });

  app.post('/readtxt',upload.single("data"),async (req, res) => {
    console.log(req.file)
    const fileStream = fs.createReadStream(req.file.path);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let count = 0
    rl.on('line', (line) => {
        const arr = line.split(' ')
       count+=arr.length
    })
   

    rl.on('close', () => {
        return res.status(201)
        .send({
          count,
          msg: "successfully counted!"
        })
    });

  });

app.listen(8798, () => {
  console.log(`Server is running`);
});