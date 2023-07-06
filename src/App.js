import React, { useState } from 'react'
import './css/App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import TextSphere from './Components/Tagcloud'

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(60, 60, 60)'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar
        title='Analyze Text'
        text1='Home'
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className='container'>
        <TextForm heading='Enter the text you want to analyze' mode={mode} />
      </div>
      <center>
        <hr style={{ width: '80%' }} />
      </center>
      <table>
        <tbody>
          <tr>
            <td className='sph'>
              <TextSphere mode={mode} />
            </td>
            <td
              className='pr'
              style={{ color: mode === 'dark' ? 'white' : 'black' }}
            >
              <h1>prrockzed</h1>
              <h3>Priyanshu Ranjan</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
