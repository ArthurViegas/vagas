const data = require("./fakeData");
const fs = require("fs");

const userCounters = data.reduce((counters, user) => {
  counters[user.id] = 0;
  return counters;
}, {});

const incrementUserCounter = (userId) => {
    userCounters[userId]++;
  
    // Escreve a contagem em um arquivo .txt
    const file = `counters/userCount_${userId}.txt`;
    const count = userCounters[userId].toString();
    
    try {
      fs.writeFileSync(file, count);
    } catch (err) {
      console.error("Erro ao escrever no arquivo:", err);
    }
  };

const getUser = ( req, res ) => {
    try {
        const name =  req.query.name;

        // verifica se a query existe e não está vazia.
        if (!name || name === '') res.status(400).json("Parametros inválidos.");

        // utilia uma HOF para fazer um find na lista utilizando a propriedade "name" como 
        const foundUser = data.find((user) => user.name.toLowerCase().trim() === name.toLowerCase().trim());
    
        // Caso nao encontre o usuario, retorna undefined, portanto, utilizo uma ! para converter para booleano (true) e mais uma ! para tornar o undefined = false.
        if(!!foundUser) {
            incrementUserCounter(foundUser.id);
            return res.status(200).json(foundUser);
        } 

        return res.status(404).json({ message: "Usuario não encontrado."});
    } catch (error) {
      return res.status(500).json({ message: "Erro interno." });
    }
};

const getUsers = ( req, res, next ) => {    
    try {    
        if(data != null && data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Nenhum usuário encontrado."});
        }    
    } catch (error) {
      return res.status(500).json({ message: "Erro interno." });
    }
    
};

module.exports = {
  getUser,
  getUsers
};
