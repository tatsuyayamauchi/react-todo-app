import { ChangeEvent } from 'react'

interface CheckedBtnProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: CheckedItem[]
}

interface CheckedItem {
  value: string;
  label: string;
  checked: boolean;
}

const CheckedBtnItems: React.FC<CheckedBtnProps> = ({ checked, onChange }) => {
  return (
    <>
      {checked.map((item, index) => (
        <label key={index}>
          <input type="checkbox" value={item.value} onChange={onChange} checked={item.checked} />
          {item.label}
        </label>
      ))}
    </>
  );
};

export default CheckedBtnItems;