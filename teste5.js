
const fs = require('fs');
var fakeData =  require("./fakeData");

module.exports = function(req, res) {
    try {
        const userId =  req.query.id;
        const file = `counters/userCount_${userId}.txt`;
    
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) return res.status(400).json("Erro ao ler o arquivo");  
    
            const foundUser = fakeData.find((user) => user.id === Number(userId));
            const count = Number(data) || 0;

            return res.status(200).json({ message: `Usuário ${foundUser.name} foi lido ${count} vezes.`});    
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno." });
    }

};