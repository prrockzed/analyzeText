import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import TextSphere from './Components/Tagcloud'


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="Analyze Text" text1="Home" text2="About" />
      <table>
        <tr>
          <td className='sph'><TextSphere /></td>
          <td className='pr'>
            <h1>prrockz</h1>
            <h3>Priyanshu Ranjan</h3>
          </td>
        </tr>
      </table>
      <div className="container">
        <TextForm heading="Enter the text you want to analyze" />
      </div>
    </>
  );
}

export default App;

