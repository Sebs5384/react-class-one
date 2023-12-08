export function UncontrolledCheckbox(props) {
  const [isChecked, setChecked] = React.useState(props.initialValue);

  function checkboxOnChange(event) {
    setChecked(!isChecked);
  }

  return (
    <>
      <input type="checkbox" checked={isChecked} onChange={checkboxOnChange}></input>
      <span>{props.name}</span>
    </>
  );
}
