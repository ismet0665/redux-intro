import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodo } from "../../redux/actions/todoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // global state teki todolisti useSelector hook u ile çekeceğiz.
  //! useSelector hooku state i parametre olarak alıyor state in içerisindeki todonun içindeki todolist i al dedik.
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  //!Önemli useEffect Dependency Array ile todoList değiştiğinde çalışacak.Dependency(Bağımlılık)Array useEffect in neye göre çalışacağını belirtiyor.
  
  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
