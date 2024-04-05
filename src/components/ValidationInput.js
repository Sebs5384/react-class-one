function ValidationInput(props) {
    const [value, setValue] = React.useState('');

    const isValid = props.validation(value)

    const handleInputChanges = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };
    const inputClassName = isValid ? 'input' : 'input-match';

    return (
        <input
            type={props.isPassword}
            className={inputClassName}
            value={value}
            onChange={handleInputChanges}
        />
    );
};

export default ValidationInput;