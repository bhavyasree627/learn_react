import logo from './logo.svg';
import './App.css';
import Bhavya from './components/Bhavya';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Ironman"> <p>Hello Bob</p> </Hello>
      <Hello name="Thor"/>
      <Hello name="Spidey" girlfriend="Gwen" />
      <Welcome name="diana" designation="princess"><p>Hello I am class component</p></Welcome>
      {/* <Welcome/>
      <Bhavya/> */}
    </div>
  );
}

export default App;
