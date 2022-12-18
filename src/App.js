import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import TextSphere from './Components/Tagcloud'


let name = "Priyanshu"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" text1="Home" text2="About" />
      {/* <TextSphere /> */}
      <h1 className='prrockz'>I'm prrockz</h1>
      <div className="container">
        <TextForm heading="Enter the text you want to analyze" />
      </div>
    </>
  );
}

export default App;

