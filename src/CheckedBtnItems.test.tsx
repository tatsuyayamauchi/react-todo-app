import { render, screen } from '@testing-library/react';
import CheckedBtnItems from './CheckedBtnItems';

describe('CheckedBtnItems', () => {
  it('should render all checkbox items correctly', () => {
    const checked = [
      { value: 'apple', label: 'Apple', checked: false },
      { value: 'orange', label: 'Orange', checked: true },
      { value: 'banana', label: 'Banana', checked: false }
    ];

    render(<CheckedBtnItems checked={checked} onChange={() => {}} />);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
    expect(screen.getByLabelText('Apple')).not.toBeChecked();
    expect(screen.getByLabelText('Orange')).toBeChecked();
    expect(screen.getByLabelText('Banana')).not.toBeChecked();
  });
});
