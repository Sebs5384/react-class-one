function PasswordInput(props) {
    const [value, setValue] = React.useState('');
    const handleInputChanges = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };
    const inputClassName = value.length > props.minLength ? 'input' : 'input-match';

    return (
        <input 
            className={inputClassName}
            value={value}
            onChange={handleInputChanges}
        />
    );
};

export default PasswordInput;
