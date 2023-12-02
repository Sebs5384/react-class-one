export function MatchNombre(props) {
  const [value, setValue] = React.useState('');

  const inputOnChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const inputStyle = value === props.nombre ? 'input-match' : 'input';

  return (
    <div>
      <input className={inputStyle} value={value} nombre={props.nombre} onChange={inputOnChange}></input>
    </div>
  );
}
