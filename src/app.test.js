const rewire = require("rewire")
const app = rewire("./app")
const getRepositoryIndexById = app.__get__("getRepositoryIndexById")
// @ponicode
describe("getRepositoryIndexById", () => {
    test("0", () => {
        let callFunction = () => {
            getRepositoryIndexById(400, 987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getRepositoryIndexById(400, "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getRepositoryIndexById(200, 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getRepositoryIndexById(500, 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getRepositoryIndexById(429, 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getRepositoryIndexById(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
