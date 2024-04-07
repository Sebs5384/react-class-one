function ControlledCheckbox({ name, value, onChange }) {
    return (
        <>
            <input type="checkbox" checked={value} onChange={onChange}></input>
            <label htmlFor={name}>checkbox-{name}</label>
        </>
    );
};

export default ControlledCheckbox;