
const fs = require('fs');
var fakeData =  require("./fakeData");

module.exports = function(req, res){
    const userId =  req.query.id;

    const file = `counters/userCount_${userId}.txt`;

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) return res.status(200).json("Erro ao ler o arquivo");  

        const foundUser = fakeData.find((user) => user.id === Number(userId));
        const count = Number(data) || 0;
        res.status(200).json(`Usuário ${foundUser.name} foi lido ${count} vezes.`);    
    });

};