function CheckboxListWithState({ items, ControlledCheckbox }) {
  const [itemsState, setItemsState] = React.useState(items);
  const itemList = Object.entries(itemsState);
  const checkboxes = itemList.map(([key, value]) => 
      <li key={key}><ControlledCheckbox name={key} value={value} onChange={() => setItemsState({ ...itemsState, [key]: !value })}/></li>
  );

  return (
      <ul>{checkboxes}</ul>
  );
};

export default CheckboxListWithState;