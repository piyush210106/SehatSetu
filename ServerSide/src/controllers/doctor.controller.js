import Doctor from "../Models/doctor.model.js";

const doctorLogin = async (req, res) => {
    try {
        const {id, password} = req.body.data;
        if(!id || !password){
            console.error("Id or Password field empty ");
            return res.status(400).json({message: "Id or Password field empty"});
        }

        const user = await Doctor.findOne({id});
        if(!user){
            return res.status(404).json({message: "Doctor Not Found"});
        }

        if(password != user.Password){
            return res.status(400).json({message: "Password Incorrect"});
        }

        return res.status(200).json({message: "Login Successful"});
    } catch (error) {
        console.error("Error in doctor login ", error);
        return res.status(400).json({message: "Error in doctor login"});
    }
}


export {doctorLogin};