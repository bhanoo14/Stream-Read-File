// const express = require('express');
// const multer = require('multer');

// const app = express();
// const port = process.env.PORT || 3000;

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './uploads') 
//     }
//     ,
//     filename: function(req, file, cb){
//         cb(null, file.fieldname + Date.now() +  "-" + ".jpg")
//     },
// })


// const upload = multer({storage})

// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// // Route to render the upload form
// app.get('/upload', (req, res) => {
//     res.render("index.ejs");
// });

// // Route to handle file upload
// app.post('/upload', upload.single("image"), (req, res) => {
//     res.send("File uploaded successfully.");
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running @ ${port}`);
// });


// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, '/.uploads')
//     },
//     filename: function(req, file cb){
//         cb(null, file.filename + "-" + Date.now() + "jpg")
//     }
// })


// const uploads = multer({storage: storage})

const fs = require('fs');
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    const xstream = fs.createReadStream("./example.txt",utf-8)

    xstream.on("data", (chunk)=>{
        res.write(chunk)
    })

    xstream.on("end", () => {
        res.end()
    })
})
