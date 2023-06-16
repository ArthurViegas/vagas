var data =  require("./fakeData");

module.exports = function(req, res) {
    try {
        const name =  req.query.name;

        // valida se a query existe e não está vazia.
        if (!name || name === '') res.status(400).json('Parametros inválidos.');

        // usado uma const para armazenar permanentemente o tamanho da lista atual.
        const prevLength = data.length;

        // A função filter() remove o usuário do array data com base no nome fornecido
        // reatribuindo todos itens que não tenham o nome informado (removendo ele da lista).
        data = data.filter((user) => user.name.toLowerCase().trim() !== name.toLowerCase().trim());

        // Armazenado o tamanho atual da lista.
        const currLengh = data.length;

        // Se o tamanho atual da lista for menor que o inicial, entende-se que um item foi removido.
        if(currLengh < prevLength) res.status(200).json();

        res.status(404).json("Usuario não encontrado.");
    } catch (error) {
        // next(error);
    }
};