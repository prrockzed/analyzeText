import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import TextSphere from './Components/Tagcloud'
// import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(46, 47, 50)';

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
    <>
      <Navbar title="Analyze Text" text1="Home" text2="About" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <table>
        <tbody>
          <tr>
            <td className='sph'><TextSphere mode={mode} /></td>
            <td className='pr' style={{ color: mode === 'dark' ? 'white' : 'black' }}>
              <h1>prrockz</h1>
              <h3>Priyanshu Ranjan</h3>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="container">
        <TextForm heading="Enter the text you want to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;

