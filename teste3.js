var data =  require("./fakeData");

module.exports = function(req, res, next) {
    try {
        const name =  req.query.name;

        // valida se a query existe e não está vazia.
        if (!name || name === "") return res.status(400).json({ message: "Parametros inválidos."});

        if (req.user.role !== "admin") return res.status(403).json({ message: "Acesso negado." });

        // usado uma const para armazenar permanentemente o tamanho da lista atual.
        const prevLength = data.length;

        // A função filter() remove o usuário do array data com base no nome fornecido
        // reatribuindo todos itens que não tenham o nome informado (removendo ele da lista).
        data = data.filter((user) => user.name.toLowerCase().trim() !== name.toLowerCase().trim());

        // Armazenado o tamanho atual da lista.
        const currLengh = data.length;

        // Se o tamanho atual da lista for menor que o inicial, entende-se que um item foi removido.
        if(currLengh < prevLength) return res.status(200).json();

        return res.status(404).json({ message: "Usuario não encontrado."});
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno.' });
        }
};