import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Fubção de autenticação para verificar se o usuário está enviando o token e se ele é válido
const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"]; 
  if (authToken != undefined) {
    // Divdindo a string do token para eliminar o Bearer
    const bearer = authToken.split(" ");
    const token = bearer[1];
    // Validando o token
    jwt.verify(token, userController.jwtSecret, (error, data) => {
      if (error) {
        res.status(401).json({ error: "Token inválido" });
        // TOKEN VALIDO
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Token inválido ou não enviado" });
  }
};

export default { Authorization };