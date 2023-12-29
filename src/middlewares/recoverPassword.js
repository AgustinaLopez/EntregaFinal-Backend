import jwt from 'jsonwebtoken'
import config from '../config/config.js';
import userManager from "../dao/classes/dbManager/UserManager.js";
import { isValidPassword } from "../utils.js";

const um = new userManager();

export const recoverPassword = async(req, res, next) => {
    req.logger.debug("Recuperar contraseña");

    let token = req.body.token;
    let password = req.body.password;

    if (password.trim() == 0) return res.send({status: "error", message: "La contraseña no puede estar vacia"});

    let result;

    req.logger.info("Verificacion");
    jwt.verify(token, config.cookieSecret, function(error, decoded) {
        req.logger.debug("El token es");
        req.logger.debug(token)
        if (error) {
            if (error instanceof jwt.TokenExpiredError) {
                result = "EXPIRED";
                req.logger.debug("Expiro");
            }
        } else {
            req.logger.debug("No expiro");
            result = decoded;
        }
    });

    if (result == "EXPIRED") return res.send({status: "error", message: "El token expiró"});

    let email = result.email;

    let account = await um.getOne({email});

    if (!account) return res.send({status: "error", message: "La cuenta ya no existe"});
    
    if (isValidPassword(account, password)) return res.send({status: "error", message: "No puedes usar la misma contraseña"});

    req.account = account;
    req.password = password;

    next();
}