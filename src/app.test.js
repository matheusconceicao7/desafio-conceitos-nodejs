const rewire = require("rewire")
const app = rewire("./app")
const getRepositoryIndexById = app.__get__("getRepositoryIndexById")
// @ponicode
describe("getRepositoryIndexById", () => {
    test("0", () => {
        let callFunction = () => {
            getRepositoryIndexById(200, "a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getRepositoryIndexById(429, "7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getRepositoryIndexById(404, "7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getRepositoryIndexById(429, "a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getRepositoryIndexById(400, "7289708e-b17a-477c-8a77-9ab575c4b4d8")
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
