function MatchName({ name }) {
  const [value, setValue] = React.useState('');
  const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setValue(inputValue);
  };
  const inputClassName = name === value ? 'input-match' : 'input';

  return (
      <>
          <input
              id="user-name-input"
              className={inputClassName}
              value={value}
              onChange={handleInputChange}
          />
          <label htmlFor="user-name-input">Input the name of the user of this device</label>
      </>
  );
};

export default MatchName;
