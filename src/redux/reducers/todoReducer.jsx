import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

//! reducer oluştururken snippet ile rxreducer yazınca kalıp çıkıyor.
const initialState = {
  // todoList: [{ id: 1, text: "Work react redux", completed: false }], başlangıçta default olarak gelsin diye.
  todoList: [],
};
//! state return kısmında da todoList var ulaşırken state.todoList yazarak ulaşıyoruz.
//! action ı desc. { type, payload } edilmiş. switch (type) kısmında direk type yazılmış. action.type yazıyoduk.
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        // todoList: [...state.todoList,{ id: new Date().getTime(), text: payload, completed: false },], bu sona ekler
        todoList: [
          { id: new Date().getTime(), text: payload, completed: false }, //bu todo yu başa ekler.
          ...state.todoList,
        ],
      };

    case CLEAR_TODO:
      return initialState;

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    // yukarda todo nun id si eşitse ...todo yu aç içindeki completed tersle { ...todo, completed: !todo.completed } todonun içinde id,text,completed var.
    // payload ı TodoItem da bu şekilde dispatch(toggleTodo(id)); yolladık. yani payload içinde bizin id miz var.
    default:
      return { todoList: JSON.parse(localStorage.getItem("todoList")) || [] };
  }
};
export default todoReducer;
