import { UncontrolledCheckbox } from './UncontrolledCheckbox.js';

export function CheckboxList(props) {
  return (
    <>
      <ul>
        {Object.entries(props.items).map(([name, initialValue]) => (
          <li key={name}>
            <UncontrolledCheckbox name={name} initialValue={initialValue} />
          </li>
        ))}
      </ul>
    </>
  );
}
