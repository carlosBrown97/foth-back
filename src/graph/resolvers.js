books = [
    {author:'PKD',title:'Ubik'},
    {author:'PKD',title:'Los tres estigmas...'},
    {author:'PKD',title:'Fluyan mis lagrima...'},
]

export const resolvers = {
    Query: {
        books: () => books
    }
}