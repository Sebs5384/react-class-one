function MatchName(props) {
    const [value, setValue] = React.useState('');
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };
    const inputClassName = props.name === value ? 'input-match' : 'input';

    return (
        <input
            className={inputClassName}
            value={value}
            onChange={handleInputChange}
        ></input>
    );
};

export default MatchName;