var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    try {
        const name =  req.query.name.toLowerCase().trim();
        if (!name || typeof name !== 'string' || name === '') {
            return res.status(400).json('Parametros inválidos.');
          }

        const foundUser = data.find((user) => user.name.toLowerCase().trim() === name);
    
        if(foundUser != null && foundUser != undefined) {
            res.status(200).json(foundUser);
        } else {
            res.status(404).json("Usuario não encontrado.");
        }    
    } catch (error) {
        next(error);
    }
};

const getUsers = ( req, res, next ) => {    
    try {    
        if(data != null && data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json("Nenhum usuário encontrado.");
        }    
    } catch (error) {
        next(error);
    }
    
};

module.exports = {
    getUser,
    getUsers
};