const express = require("express");
const router = express.Router();
const User = require("../models/user");




router.get('/:id', async (req, res) => {
    const user = req.params;
    console.log(user,"server il vannu");
    try {
        const data = await User.findById(user.id);
        res.status(200).json(data)
        
    }
    catch(error){
        console.log(error.message);
    }
})

module.exports = router;
