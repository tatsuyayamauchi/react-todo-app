import { render, waitFor } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import InputCheckBox from './InputCheckBox';

describe('InputCheckBox Component', () => {
  it('renders correctly with all checkboxes unchecked initially', () => {
    const { getAllByRole } = render(<InputCheckBox />);
    const checkboxes = getAllByRole('checkbox') as HTMLInputElement[];
    checkboxes.forEach(checkbox => {
      expect(checkbox).not.toBeChecked();
    });
  });

  test('should update the state correctly when checkboxes are checked and unchecked', async () => {
    const { getAllByRole, getByText } = render(<InputCheckBox />);

    const checkboxes = getAllByRole('checkbox') as HTMLInputElement[];
    const checkbox = checkboxes[0];
    const displayText = getByText(/現在の値:/);

    expect(displayText.textContent).toBe('現在の値: ');

    userEvent.click(checkbox);
    await waitFor(() => {
      expect(checkbox).toBeChecked();
      expect(displayText.textContent).toContain(checkbox.value);
    });

    userEvent.click(checkbox);
    await waitFor(() => {
      expect(checkbox).not.toBeChecked();
      expect(displayText.textContent).toBe('現在の値: ');
    });
  });
});
