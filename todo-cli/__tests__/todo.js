const todoList = require("../todo")

const {all , markAsComplete , add } = todoList();

describe("fist test ra babu" , ()=>{
    beforeAll(()=>{
        add({ title: "Pay rent", dueDate: new Date().toISOString(), completed: false })
        
    })
    test("checking length" , () =>{
        expect(all.length).toBe(1)
    })
    test("adding index 0" , () =>{
        add({ title: "Submit assignment", dueDate: new Date().toLocaleDateString("en-CA"), completed: false })
        expect(all[0].completed).toBe(false)
        expect(all.length).toBe(2)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    })
}) 