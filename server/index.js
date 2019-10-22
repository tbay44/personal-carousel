const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')
const port = 3033;
const connection = require("./database/db");
const PERSONAL_DIST_DIR = path.join(__dirname, '../personal-dist');
const PERSONAL_HTML_FILE = path.join(PERSONAL_DIST_DIR, 'index.html')
const bodyParser = require('body-parser');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(PERSONAL_DIST_DIR));

app.get('/api/add', (req, res) => {
    let lowerId = parseInt(req.query.id) - 1;
    let upperId = parseInt(req.query.id) + 1;
    connection.getRangeProducts(lowerId, upperId, (error, allProducts) => {
        if(error) {
            res.send(error)
        }else{
            res.send(allProducts)
        }
    })
})

app.get('/', (req, res) =>{
    res.send(PERSONAL_HTML_FILE);
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});