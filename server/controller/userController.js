const User = require("../Model/User")

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({
            name,
            email,
            age
        });
        res.status(200).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const getAllUsers = async (req,res) =>{
    try{
        const user = await User.find()
        res.status(200).json(user)
    }
    catch(error){
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {name,email,age} = req.body
        const user = await User.findByIdAndUpdate(id,{name,email,age})
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteUser = async (req,res) =>{
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ error: "Internal server error" });
    }

} 


module.exports = {createUser,getAllUsers,getSingleUser,updateUser,deleteUser}