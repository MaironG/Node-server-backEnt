const express = require('express');

const router =express.Router();

router.get('/users/singin', (res, req)=> {
    res.send('ingresar');
});

router.get('/users/singup', (res, req)=> {
    res.send('Registro');
});



module.exports= router;