import { ControlledCheckbox } from './ControlledCheckbox.js';

export function CheckboxListWithState(props) {
  const [checkboxState, setCheckboxState] = React.useState(props.items);

  const checkboxOnChange = (name) => {
    setCheckboxState((prevCheckboxState) => ({
      ...prevCheckboxState,
      [name]: !prevCheckboxState[name],
    }));
  };

  return (
    <>
      <ul>
        {Object.entries(checkboxState).map(([name, state]) => (
          <li key={name}>
            <ControlledCheckbox name={name} value={state} checkboxOnChange={() => checkboxOnChange(name)} />
          </li>
        ))}
      </ul>
    </>
  );
}
