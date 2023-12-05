export function ValidationInput(props) {
  const [value, setValue] = React.useState('');

  const inputOnChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  function validation(value) {
    const isValidLength = value.length >= props.minLength;
    const noSpace = !value.match(' ');
    const isEmail = value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (props.isPassword && isValidLength) {
      return true;
    }

    if (isValidLength && noSpace && isEmail) {
      return true;
    }

    return false;
  }

  const inputStyle = validation(value) ? 'input-match' : 'input';

  return (
    <input
      type={props.isPassword ? 'password' : ''}
      className={inputStyle}
      value={value}
      minLength={props.minLength}
      onChange={inputOnChange}
      placeholder={props.placeholder}
    ></input>
  );
}
