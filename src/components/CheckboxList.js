function CheckboxList(props) {
    const items = Object.entries(props.items)
    const checkboxes = items.map(([key, value]) => <li><UncontrolledCheckbox name={key} initialValue={value} /></li>)
    
    return (
        <ul>{checkboxes}</ul>
    );
};

export default CheckboxList;