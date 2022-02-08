import Form from './Form'
import Input from './Input';
import { useState } from 'react'
import './index.css'

function App() {
  const [colorValue, setColorValue ] = useState('')
  const [hexValue, setHexValue] = useState('') 
  const [isColorValue, setIsDarkColorValue] = useState(true)
  
  return (
    <div className="App">
      <Form 
            colorValue={colorValue} 
            hexValue={hexValue} 
            isColorValue={isColorValue}      
      />
      <Input colorValue={colorValue} 
             setColorValue={setColorValue} 
             setHexValue={setHexValue}
             setIsDarkColorValue={setIsDarkColorValue}
             isColorValue={isColorValue}
      />  
    </div>
  );
}

export default App;
