import { useState, ChangeEvent } from 'react'
import './App.css'

const InputText = () => {
  // 保持されいているテキストの状態
  const [text, setText] = useState('')

  // 入力中のテキストの状態
  const [inputTextValue, setInputTextValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setInputTextValue(event.target.value) }

  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue('');
  }

  return (
    <>
      <div className="App">
        <h1>I love {text}!!!</h1>
        <input type="text" value={inputTextValue} onChange={handleChange} />
        <input type="button" value="Submit" onClick={handleClick} />
      </div>
    </>
  )
}

function App() {
  return <InputText />
}

export default App
