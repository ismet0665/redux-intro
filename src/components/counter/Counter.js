import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "../../redux/actions/counterAction";

//! useDispatch hook u useNavigate te oldugu gibi bu hook bize bir fonk. döndürüyor. fonk. dispatch adını veriyoruz.                  const dispatch = useDispatch(). useDispatch() hook dan gelen fonk. dispatch e aktarıyoruz.
//! dispatch func. içerisine bir obje alır.type ve payload. 02:01 dk dinle.

const Counter = () => {
  const dispatch = useDispatch();

  //! useSelector ile global state den okuma işlemi yapıyoruz. useSelector hook u parametre olarak içerisine state i alır. state.count ile globalden  eriyi alıp bir değişkene aktarıyoruz. state.count counterReducer dosyasındaki initialState içindeki değişken ismi.
  // state.count.counter => burdaki count index.js deki rootReducer ın counter ise counterReducer içindeki counter.

  // const counter = useSelector((state) => state.counter)
  // const counter = useSelector((state) => state.count.counter)
  const { counter } = useSelector((state) => state.count); // state.count desc. hali. { counter }

  //! Reducer'lara key olarak isim atamasi yapilmazsa bu sekilde cagrilabilriler.
  //? const counter = useSelector((state) => state.counterReducer.counter)
  //? const todoList = useSelector((state) => state.todoReducer.todoList)

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREASE" })}
          onClick={() => dispatch(inc())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: "DECREASE" })}
          onClick={() => dispatch(dec())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
