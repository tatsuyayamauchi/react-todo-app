import { useState, ChangeEvent } from 'react'
import './App.css'

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' }
]

const SelectItems = items.map((item) => {
  return (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  );
});

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(items[0].value)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => { setSelectedValue(e.target.value) };

  return (
    <div className="App">
      <p>現在の値: <b>{selectedValue}</b></p>
      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
}

const InputText = () => {
  // 保持されいているテキストの状態
  const [text, setText] = useState('')

  // 入力中のテキストの状態
  const [inputTextValue, setInputTextValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { setInputTextValue(e.target.value) }

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
  return (
    <>
      <InputText />
      <InputSelectBox />
    </>
  )
}

export default App
