import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
// import { createStore } from "redux" js kütüpanesinden geliyor.üstü çizili olmasının sebebi redux toolkit kullanmaya yönlendiriyor. üstü çizik olması çalışmasına engel deil. aşagıdaki gibi kullanarak as ile ismi değiştiriyoruz.
// import { legacy_createStore as createStore } from "redux"
// import reducer from "./redux"
import { Provider } from "react-redux";
import { store } from "./redux"; //redux klasörünün altında ki index i kast ettik.

function App() {
  //? Store olusturduk.
  // const store = createStore(reducer)

  return (
    <div className="app">
      {/* Store ile tum uygulamayi sarmalladik */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
