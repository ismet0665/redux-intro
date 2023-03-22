// const initialState = {
//   counter: 0, //? Global state
// }

// //? Pure js function
// //? Bir dis bagimlilik olmamali
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { counter: state.counter + 1 }
//     case "DECREASE":
//       return { counter: state.counter - 1 }
//     case "RESET":
//       return { counter: 0 }
//     default:
//       return state
//   }
// }
// export default reducer

import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
/*
index.js derleyici , birletirici componentimiz. reducers larımızı birleştiriyoruz.

1- createStore import ettik
2- bütün reducer ları import ettik counterReducer,todoReducer 2 tane var
3- reducers larımızı birleştirmek için combineReducers func. kullanıyoruz.combineReducers görevi objeleri birleştirmek. reducerların birleşiminede rootReducer adını veriyoruz genellikle.
ES6 ile gelen özellikle objelerde key value şeklinde yazmaksak key ve value nun isimlerini aynı yapıyor.
   counterReducer:   counterReducer,  biz yukarda key olarak kendimiz isim verdik.count ve todo diye.
const rootReducer = combineReducers({
   counterReducer,
   todoReducer,
});

4- rootReducer ile reducers larımızı birleştirdik. createStore ile rootReducer ı tek store olarak olusturup export ediyoruz.
  export const store = createStore(rootReducer);

5- kullanırkende App de  
import { Provider } from "react-redux";
import { store } from "./redux"; //redux klasörünün altında ki index i kast ettik.
import edip sarmallıyoruz.
*/
