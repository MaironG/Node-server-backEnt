const express = require('express');

const router =express.Router();

router.get('/notes', (res, req)=> {
    res.send('notas');
});


module.exports= router;