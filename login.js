const data = require("./fakeData");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = async function(req, res) {    
    try {
        const { name, password } = req.body;
        // se qualquer propriedade estiver vazia retorna status 400.
        if (!name || !password) return res.status(400).json("Parametros inválidos.");

        const foundUser = data.find((user) => user.name.toLowerCase().trim() === name.toLowerCase().trim());

        // Verifique se a senha fornecida corresponde a senha armazenada no "banco de dados"
        const passwordMatch = await bcrypt.compare(password, foundUser.password);

        if (!passwordMatch) return res.status(401).json("Nome ou Senha invalidos.");

        // Gera um token JWT com o name e role do usuario.
        const token = jwt.sign({ name: foundUser.name, role: foundUser.role }, "secretKey", { expiresIn: "1h" }); 

        // Retorne o token JWT como resposta
        return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: "Erro interno." });
    }}