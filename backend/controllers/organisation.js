
const User = require("../models/user");

module.exports = {

     

    getuser: async (req, res) => {
        const id = req.params;
        console.log(id,"server il vannu");
        try {
            const data = await User.findById(id);
            res.status(200).json(data)
            // console.log(data);
        }
        catch(error){

        }
    }

    

}