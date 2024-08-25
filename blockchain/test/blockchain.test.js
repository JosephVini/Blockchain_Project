const Block = require('../../app/block')
const Blockchain = require('../../app/Blockchain')
const bc = require('../../app/Blockchain')

describe('bc', () => {
    let bc
    let bc2

    beforeEach(() => {
        bc = new Blockchain()
        bc2 = new Blockchain()
    })

    it('starts with the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis())
    })

    it('adds a new block', () => {
        const data = 'index.html'
        bc.addBlock(data)

        expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
    })

    it('validates a valid chain', () => {
        bc2.addBlock('foo')
        expect(bc.isValidChain(bc2.chain)).toBe(true)
    })
})