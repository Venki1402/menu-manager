import { useState } from 'react'

function Component() {
    const [items,setItems] = useState(["Roti","Butter Chicken","Ice Cream"]);

    function handleAddItem() {
        const newItem = document.getElementById('itemInput').value;
        document.getElementById('itemInput').value = "";
        setItems(i => [...i,newItem])
    }

    function handleRemoveItem(index){
        setItems(i => i.filter((_,i) => i!==index))
    }

    return(
        <div>
            <h2>Menu Items : </h2>
            <ul>
                {items.map((item,index) => <li key={index} onClick={() => handleRemoveItem(index)}>{item}</li>)}
            </ul>
            <input type="text" id='itemInput' placeholder='Enter Menu Item name'/>
            <button onClick={handleAddItem}>Add Item</button>
            <p>Click on an Item to remove it</p>
        </div>
    );
}

export default Component;

// TODO - Add CSS - Improve removeItems UI