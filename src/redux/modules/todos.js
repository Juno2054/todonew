import uuid from "react-uuid";
// import shortid from "shortid";



const initialState = [
  {
    id: uuid(),
    title: "1번 제목",
    body: " 1번 내용",
    isDone: false,
  },
  {
    id: uuid(),
    title: "2번 제목",
    body: " 2번 내용",
    isDone: false,
  },
];
const ADD_TODO= "ADD_TODO";
const DELETE_TODO= "DELETE_TODO";
const SWITCH_TODO= "SWITCH_TODO";

export const addTodo = (title, body)=>({
  type:ADD_TODO,
  payload:{title,body},
});

export const deleteTodo =(id)=>({
    type:DELETE_TODO,
    payload:{id},
});

export const switchTodo=(id)=>({
  type:SWITCH_TODO,
  payload:{id},
});

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo={
        id:uuid(),
        title:action.payload.title,
        body:action.payload.body,
        isDone:false,
      };
      return [...state,newTodo];

    case DELETE_TODO:
      return state.filter((todo)=> todo.id !==action.payload.id);

    case SWITCH_TODO:
      return state.map((todo)=>
        todo.id ===action.payload.id ? {...todo,isDone: !todo.isDone}: todo
      );

    default:
      return state;
  }
};

export default todos;
