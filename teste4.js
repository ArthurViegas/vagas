var data =  require("./fakeData");
function parametroStringValido(value) {
    return typeof value === 'string' && value.trim() !== "";
  }

module.exports =  function(req, res) {
    try {
        const  id =  req.query.id;
        const { name, job } = req.body;

        // se qualquer propriedade estiver vazia e nao forem tipo string, retorna status 400.
        if ((!parametroStringValido(name) && !parametroStringValido(job)) && (!id || id === "")) res.status(400).json({ message: "Parametros inválidos."});
        if (req.user.role !== "admin") return res.status(403).json({ message: "Acesso negado." });

        // busca o usuario na lista.
        const userIndex = data.findIndex(user => user.id === Number(id));

        if (userIndex === -1) {
          res.status(404).json({ message: "Usuário não encontrado." });
        } else {
            //utiliza o spread para manter todos os outros valores que não serão atualizados.
          let updatedUser = {
            ...data[userIndex],
            name: name,
            job: job
          };
          // reatribui o usuario com o updatedUser na posição do index.
          data[userIndex] = updatedUser;
            return res.status(200).json(updatedUser);
        }
    } catch (error) {
      return res.status(500).json({ message: "Erro interno." });
    }
};