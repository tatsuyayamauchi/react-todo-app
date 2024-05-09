import { useState, ChangeEvent } from 'react'
import CheckedBtnItems from './CheckedBtnItems';

const checkedItems = [
  { value: 'apple', label: 'Apple', checked: false },
  { value: 'orange', label: 'Orange',checked: false },
  { value: 'banana', label: 'Banana', checked: false }
];

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState(checkedItems)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCheckedValues(prev => prev.map(item => item.value === value ? { ...item, checked: checked} : item));
  }

  const stateOfCheckedValues = checkedValues.filter(item => item.checked).map(item => item.value).join(', ');

  return (
    <div className="App">
      <p>現在の値: <b>{stateOfCheckedValues}</b></p>
        <CheckedBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  )
}

export default InputCheckBox