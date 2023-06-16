var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    try {
        const name =  req.query.name;

        // verifica se a query existe e não está vazia.
        if (!name || name === '') res.status(400).json('Parametros inválidos.');

        // utilia uma HOF para fazer um find na lista utilizando a propriedade "name" como 
        const foundUser = data.find((user) => user.name.toLowerCase().trim() === name.toLowerCase().trim());
    
        // Caso nao encontre o usuario, retorna undefined, portanto, utilizo uma ! para converter para booleano (true) e mais uma ! para tornar o undefined = false.
        if(!!foundUser) res.status(200).json(foundUser);

        res.status(404).json("Usuario não encontrado.");    
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