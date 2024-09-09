import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import counter, {
  decreament,
  decreamentByValue,
  increament,
  increamentByValue,
  multiply,
} from "./redux/slices/Counter";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <div class="h1">Hello everyone here is a counter for you : {count}</div>
      <button
        type="button"
        class="btn btn-primary m-3 w-20"
        onClick={() => dispatch(increament())}
      >
        +
      </button>
      <button
        type="button"
        class="btn btn-primary m-3 w-20"
        onClick={() => dispatch(decreament())}
      >
        -
      </button>
      <button
        type="button"
        class="btn btn-primary m-3 w-20"
        onClick={() => dispatch(multiply(2))}
      >
        2x
      </button>
      <br />
      <div>
        <input
          type="text"
          placeholder="Value"
          class="form-control w-56 mx-auto"
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
      </div>
      <button
        type="button"
        class="btn btn-primary m-3"
        onClick={() => dispatch(increamentByValue(inputValue))}
      >
        Increase by value
      </button>
      <button
        type="button"
        class="btn btn-primary m-3"
        onClick={() => dispatch(decreamentByValue(inputValue))}
      >
        Decrease by value
      </button>
    </>
  );
}

export default App;
