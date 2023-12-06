export function UncontrolledCheckbox(props) {
  const [isChecked, setChecked] = React.useState(props.initialValue);

  function checkboxOnChange(event) {
    const checked = event.target.checked;

    setChecked(checked);
  }

  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={checkboxOnChange}></input>
      <span>{props.name}</span>
    </>
  );
}
