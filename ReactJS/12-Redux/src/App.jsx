import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';

const App = () => {
  const num = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{num}</h1>
      <p>{theme}</p>
      <div className="buttons">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (num > 0) {
              dispatch(decrement());
            }
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
