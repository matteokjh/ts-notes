function greet(person: string) {
    return `Hello ${person ? person : 'World!'}`
}

const user = 'John Smith'

console.log(greet(process.argv[2]))

