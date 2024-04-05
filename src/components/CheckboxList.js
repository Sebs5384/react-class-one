function CheckboxList(props) {
    const UncontrolledCheckbox = props.UncontrolledCheckbox
    const items = Object.entries(props.items)
    const checkboxes = items.map(([key, value]) => <li><UncontrolledCheckbox name={key} initialValue={value} /></li>)
    
    return (
        <ul>{checkboxes}</ul>
    );
};

export default CheckboxList;