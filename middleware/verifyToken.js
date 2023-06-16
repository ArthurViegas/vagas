const jwt = require('jsonwebtoken');

// Função de verificação do token
module.exports = (req, res, next) => {
  const token = req.headers.authorization; // Obtém o token do cabeçalho Authorization
  
  if (!token) return res.status(401).json({ message: "Token não fornecido." });

  try {
    // Verifica a autenticidade e integridade do token
    const decoded = jwt.verify(token, 'secretKey');

    // O token é válido, você pode acessar as informações do usuário
    const { name, role } = decoded;

    // Faça a lógica de validação, como verificar se o usuário existe no banco de dados, se tem permissões adequadas, etc.
    // Aqui, por exemplo, estamos apenas passando as informações do usuário para o próximo middleware ou rota
    req.user = {
      name,
      role
    };

    // Chama o próximo middleware ou rota
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
