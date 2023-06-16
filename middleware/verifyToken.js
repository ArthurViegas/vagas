const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization; // Obtém o token do cabeçalho Authorization
  
  if (!token) return res.status(401).json({ message: "Token não fornecido." });

  try {
    // Verifica a autenticidade do token
    const decoded = jwt.verify(token, "secretKey");

    // O token é válido, você pode acessar as informações do usuário
    const { name, role } = decoded;

    req.user = {
      name,
      role
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido." });
  }
};
