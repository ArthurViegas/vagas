var data =  require("./fakeData");

// função que valida se os tipo das propriedades sao strings e nao vazias.
function parametroStringValido(value) {
    return typeof value === 'string' && value.trim() !== "";
  }

module.exports = function(req, res, next) {
    try {
      const { name, job } = req.body;

      // se qualquer propriedade estiver vazia e nao forem tipo string, retorna status 400.
      if (!parametroStringValido(name) && !parametroStringValido(job)) res.status(400).json('Parametros inválidos.');
      
      // armazena o tamanha da array em uma const para gerar o Id do usuário.
      const currLength = data.length;

      const newUser = {
          id: currLength + 1,
          name: name.trim(),
          job: job.trim(),
      }
  
      data.push(newUser);

      if (data.includes(newUser)) res.status(201).json(newUser);

       res.status(400).json("Erro ao inserir usuário.");
    } catch (error) {
      next(error);
    }
  };
  