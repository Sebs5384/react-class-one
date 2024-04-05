function UncontrolledCheckbox(props) {
    const [value, setValue] = React.useState(props.initialValue);
    const onChange = (event) => {
        const newValue = event.target.checked;
        setValue(newValue);
    };

    return (
        <>
            <input type="checkbox" checked={value} onChange={onChange}/>
            <span>{`Checkbox-${props.name}`}</span>
        </>
    );
};

export default UncontrolledCheckbox;