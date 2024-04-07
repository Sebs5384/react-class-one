function ValidationInput({ validation, isPassword }) {
    const [value, setValue] = React.useState('');

    const isValid = validation(value)

    const handleInputChanges = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };
    const inputClassName = isValid ? 'input' : 'input-match';

    return (
        <>
            <input
                id="user-mail-input"
                type={isPassword}
                className={inputClassName}
                value={value}
                onChange={handleInputChanges}
            /><br/>
            <label htmlFor="user-mail-input">Input your mail</label>
        </>
    );
};

export default ValidationInput;