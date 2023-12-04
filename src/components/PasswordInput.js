export function PasswordInput(props) {
  const [value, setValue] = React.useState('');

  const inputOnChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const inputStyle = value.length >= props.minLength ? 'input-match' : 'input';

  return (
    <div>
      <input className={inputStyle} type="password" value={value} minLength={props.minLength} onChange={inputOnChange}></input>
      <p>
        {value.length < props.minLength
          ? `Solo se admiten 8 digitos como minimo par tu password`
          : `Te pasaste por ${value.length - props.minLength + 1} digitos`}
      </p>
    </div>
  );
}
