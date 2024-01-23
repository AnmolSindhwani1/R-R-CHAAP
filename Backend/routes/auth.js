const express = require('express');
const router = express.Router();
//create a user using :Post"/api/auth/" .Doesnt require author
router.get('/',(req,res)=>{
    console.log(req.body);
    res.send("hello");
})
module.exports = router