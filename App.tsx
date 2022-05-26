import { Provider } from "react-redux";
import CounterApp from "./src/CounterApp";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

