function PasswordInput({ minLength, typePassword }) {
  const [value, setValue] = React.useState('');
  const handleInputChanges = (event) => {
      const inputValue = event.target.value;
      setValue(inputValue);
  };
  const inputClassName = value.length > minLength ? 'input' : 'input-match';

  return (
    <>
        <input 
            id="password-input"
            type={typePassword}
            className={inputClassName}
            value={value}
            onChange={handleInputChanges}
        />
        <label htmlFor="password-input">
            Input your password, minimum of {minLength} characters is needed
        </label>
    </>
  );
};

export default PasswordInput;
