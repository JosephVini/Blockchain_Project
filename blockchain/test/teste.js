const Blockchain = require('../index')
const bc = new Blockchain()

for (let i = 1; i <= 10; i++) {
    console.log(bc.addBlock(`dado ${i}`).toString())
}