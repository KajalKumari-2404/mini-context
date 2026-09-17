import { createContext, useContext } from "react";

export const TodoContext = createContext({//TodoContext ek Context hai jisme Todo se related data aur functions rakhe jayenge.
    todos: [ //Yahan Context ke andar todos naam ka array bana hai.
        { //Ye ek Todo ka object hai.
            id: 1,
            todo: "Todo msg",
            completed: false, //Ye batata hai Todo complete hua hai ya nahi.
        }
    ],
    //Ye abhi sirf function ka structure/default function hai. {} ke andar koi actual code nahi hai.
    //  Actual functionality baad me TodoProvider me likhenge.
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider