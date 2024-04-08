function PasswordInput({ minLength }) {
  const [value, setValue] = React.useState('');
  const handleInputChanges = (event) => {
      const inputValue = event.target.value;
      setValue(inputValue);
  };
  const inputClassName = value.length > minLength ? 'input' : 'input-match';

  return (
      <input 
          className={inputClassName}
          value={value}
          onChange={handleInputChanges}
      />
  );
};

export default PasswordInput;
