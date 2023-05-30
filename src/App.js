
import './App.css';
import Header from './components/common/header/Header';
import Sidebar from './components/common/sidebar/Sidebar';
import Main from './components/common/Main';
import { useSelector } from 'react-redux';

function App() {

  const {toggleSide}=useSelector(store=>{
    return {
      toggleSide:store.layotSlice.toggleSidebar
    }
  })

  return (
    
      <div className="App_Container">
        <Header  />
        {toggleSide && <Sidebar /> }
        <Main />
      </div>
   
  );
}

export default App;
