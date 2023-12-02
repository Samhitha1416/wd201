const todoList = require("../todo");

const {all,markAsComplete ,add } = todoList();

describe("TodoList Test Suite",() => {
    beforeAll(() => {
        add(
            {
                title : "Test todo",
                completed : false,
                dueDate :new Date().toLocaleDateString("en-CA")
            }
        );
    })
    test("Should add new todo",() => {
        const todoItemsCount = all.length;
        add(
            {
                title : "Test todo",
                completed : false,
                dueDate :new Date().toLocaleDateString("en-CA")
            }
    );
expect(todoItemsCount + 1);
    });
    test("Should mark todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})