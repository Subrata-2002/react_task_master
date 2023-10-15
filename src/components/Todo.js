import React, { useState } from 'react'
import file from '../images/file1.jpg'
import '../index.css'
const Todo = () => {

    const [item, setItem] = useState("");
    const [putItem, setPutitem] = useState([]);


    const addItem = () => {
        if (!item) {
        }
        else {
            setPutitem([...putItem, item]);
            setItem('');
        }
    }

    const deleteItem=(id,element)=>{
        console.log(element+" deleted");

        const updatedItem = putItem.filter((element, ind)=>{
            return (ind !== id);
        })
        setPutitem(updatedItem);
    }

    const removeAll=()=>{
        setPutitem([]);
    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure className=''>
                        <img src={file} alt="todologo" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder='📝 Add items here'
                            value={item}
                            onChange={(event) => {
                                // console.log(event.target.value)
                                setItem(event.target.value);

                            }} />
                        <i className="fa fa-plus" aria-hidden="true" onClick={addItem}></i>
                    </div>

                    <div className='showItems'>
                        {
                            putItem.map((elem, index) => {
                                return (
                                    <div className='eachItem' key={index}>
                                        <h3>{elem}</h3>
                                        <i className="fa fa-trash-alt add-btn" aria-hidden="true" 
                                        onClick={()=>deleteItem(index,elem)}></i>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Code for remove all item */}
                    <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>Remove All</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Todo;
