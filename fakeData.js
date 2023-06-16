
const fakeData  =  [
    {
        id: 1,
        role: "user",
        name: "João Oliveira",
        password: '$2a$12$CFm3PEhvAmYYjAa3Z2BYWuUV9DGXVATScX/XaUtzY1N0.WmD8HaEe', // senha123 - senha criptografada por bcrypt
        job: "Desenvolvedor"
    },
    {
        id: 2,
        role: "admin",
        name: "Arthur",
        password: '$2a$12$CFm3PEhvAmYYjAa3Z2BYWuUV9DGXVATScX/XaUtzY1N0.WmD8HaEe', // senha123 - senha criptografada por bcrypt
        job: "Desenvolvedor"
    },
    {
        id: 3,
        role: "user",
        name: "Paulo",
        password: '$2a$12$CFm3PEhvAmYYjAa3Z2BYWuUV9DGXVATScX/XaUtzY1N0.WmD8HaEe', // senha123 - senha criptografada por bcrypt
        job: "Suporte"
    }
]


module.exports = fakeData;