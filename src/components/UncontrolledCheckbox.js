function UncontrolledCheckbox({ name, initialValue }) {
    const [value, setValue] = React.useState(initialValue);
    const checkboxName = `checkbox-${name}`

    const onChange = (event) => {
        const newValue = !value;
        setValue(newValue);
    };

    return (
        <>
            <input type="checkbox" checked={value} onChange={onChange}/>
            <label htmlFor={checkboxName}>{checkboxName}</label>
        </>
    );
};

export default UncontrolledCheckbox;