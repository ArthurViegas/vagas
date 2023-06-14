var data =  require("./fakeData");

function parametroStringValido(value) {
    return typeof value === 'string' && value.trim() !== '';
  }

module.exports = function(req, res, next) {
    try {
      const { name, job } = req.body;

      if (!parametroStringValido(name) || !parametroStringValido(job)) {
        return res.status(400).json('Parametros inválidos.');
      }
      
      const currLength = data.length;
      const newUser = {
          id: currLength + 1,
          name: name.trim(),
          job: job.trim(),
      }
  
      data.push(newUser);
  
      if (data.includes(newUser)) {
        res.status(201).json(newUser);
      } else {
        res.status(400).json("Erro ao inserir usuário.");
      }
    } catch (error) {
      next(error);
    }
  };