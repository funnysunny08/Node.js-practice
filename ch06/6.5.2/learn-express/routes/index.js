const express = require('express');

const router = express.Router();

// GET / 라우터
// router.get('/', (req, res) => {
//     res.send('Hello Express');
// });

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;