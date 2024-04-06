function CheckboxList({items, UncontrolledCheckbox}) {
    const itemList = Object.entries(items)
    const checkboxes = itemList.map(([key, value]) => <li key={key}><UncontrolledCheckbox name={key} initialValue={value} /></li>);
    
    return (
        <ul>{checkboxes}</ul>
    );
};

export default CheckboxList;