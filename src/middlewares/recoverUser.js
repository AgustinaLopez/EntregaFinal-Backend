import userManager from "../dao/classes/dbManager/UserManager.js";
import { isValidPassword } from "../utils.js";

const um = new userManager();

export const recoverUser = async(req, res, next) => {
    req.logger.debug("Middleware recover");
    const {email} = req.body;
    req.logger.debug(email)
    
    try {
        const user = await um.getOne({email});
 
        if (!user) {
            req.logger.info("El usuario no existe");
            return res.send({status: "error", message: "El usuario no existe"});
        }

        req.user = user;
        next();
    } catch(error) {
        next(error);
    }
}