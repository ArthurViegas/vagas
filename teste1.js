var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    try {
        const name =  req.query.name.toLowerCase().trim();
        if (!name || typeof name !== 'string' || name === '') {
            return res.status(400).json('Invalid name parameter');
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
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};