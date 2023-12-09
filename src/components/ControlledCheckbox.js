export function ControlledCheckbox(props) {
  return (
    <>
      <input type="checkbox" checked={props.value} onChange={props.checkboxOnChange}></input>
      <span>{props.name}</span>
    </>
  );
}
