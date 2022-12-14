let payload = {
    search: 'testdata',
    limit: 20
}

let query = {
    limit: 4, ...payload
}

console.log('query -> ', query)