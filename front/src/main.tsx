import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);







// Action Types
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';

// // Action Creators
// const increment = () => ({ type: INCREMENT });
// const decrement = () => ({ type: DECREMENT });

// // Reducer
// const initialState = { value: 0 };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, value: state.value + 1 };
//     case DECREMENT:
//       return { ...state, value: state.value - 1 };
//     default:
//       return state;
//   }
// };

// // Store
// const { createStore } = require('redux');
// const store = createStore(counterReducer);

// // Использование
// store.dispatch(increment());
// console.log(store.getState()); // { value: 1 }





// // RTK
// // Создание slice (автоматически генерирует экшены и редюсеры)
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1; // Immer позволяет использовать "мутации"
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });

// // Экспорт экшенов и редюсера
// export const { increment, decrement } = counterSlice.actions;
// const counterReducer = counterSlice.reducer;

// // Настройка хранилища
// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// // Использование
// store.dispatch(increment());
// console.log(store.getState()); // { counter: { value: 1 } }


// Action --> Dispatch --> Reducer --> Store --> View