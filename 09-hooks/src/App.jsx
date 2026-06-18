import React from 'react'
import {useState} from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => {
      setCount(() => count + 1);
    }}>Count is, {count}</button>
  )
}

export default App

//useState - use for changing states of any variables
//useEffect - use in sidestack function for ex- Api calling
//useRef - use for refrence for any components,tags etc.. just like dom queryselector
//useContext - Global context where you can gave context to any section or part of website globally from where whole app can use it directly
//useReducer - handle complex logic
//useMemo - used for memoization used for performance optimization
//useCallback - also used for performance optimization 
                //both usecallback and usememo re-render are used to stop re-render
