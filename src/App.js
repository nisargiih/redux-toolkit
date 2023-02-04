import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { getCatsFetch } from './reducer';
import { useEffect } from 'react';

function App() {

  const catDetails = useSelector(state => state.cats.cats)
  const dispatch = useDispatch()
  console.log('catDetails',catDetails)


  // useEffect(() => {
  //   dispatch(getCatsFetch)
  // },[dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(getCatsFetch())}>
        Click me
      </button>
    </div>
  );
}

export default App;
