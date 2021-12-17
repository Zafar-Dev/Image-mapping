import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import image from './assests/pmv-chamara-MEsWk-dZzlI-unsplash.jpg'
import {data} from './data'
import OrderList from './orderlist'

const MapImage = ({items, setItems, file, setFile}) => {   

    const imgRef = useRef(null)
    const prodRef = useRef(null)
    const [selectedItem, setSelectedItem] = useState()    
    const [selectedDotX, setSelectedDotX] = useState([])      
    const [selectedDotY, setSelectedDotY] = useState([])

    useEffect(()=>{
        console.log(selectedItem);
        prodRef.current.value = selectedItem ? selectedItem[0].productname : ""
    }, [selectedItem])

    useEffect(()=>{
        console.log("Items in array");
        console.log(items);
    }, [items])

    useEffect(()=>{
        setItems([])
    },[])

    useEffect(()=>{
        console.log("coords : " +selectedDotX, selectedDotY)
    }, [selectedDotX, selectedDotY])

    const handleClick = (e) => {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        // console.log(x, y)
        setSelectedDotX(x)
        setSelectedDotY(y)
        createDiv(x, y);
    }
        

    const createDiv = (x,y) => {        
        const element = document.createElement('div')
        element.setAttribute("id", "some-id")
        element.style.left = `${x}px`
        element.style.top = `${y}px` 
        element.style.transform = `translate(-${16}px, 4px)`
        element.classList.add("dot") 

        
        // element.innerText = "dot"       
        imgRef.current?.appendChild(element)
        // console.log(element)
    }

    const createOptions = (x,y) => {        
        const element = document.createElement('div')
        element.setAttribute("id", "some-id")
        element.style.left = `${x}px`
        element.style.top = `${y}px` 
        element.style.transform = `translate(-${16}px, 4px)`
        element.classList.add("dot") 
        // element.innerText = "dot"       
        imgRef.current?.appendChild(element)
        // console.log(element)
    }

    const getItem =(id) => {
        return data.filter((el) => {
          return el.id === id
        })    
      }

    const handleItemClick = (e) => {
        let id = e.target.parentElement.id
        const item = getItem(id)
        setSelectedItem(item)        
    }

    const mapItem = () => {
        let data = {
            selectedItem,
            coordinates : {
                x : selectedDotX,
                y : selectedDotY
            } 
        }
        console.log(data);
        setItems(pre => ([
            ...pre,
            data
        ]))
    }

    const handleFileChange = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]));
        setFile(URL.createObjectURL(e.target.files[0]))
    }   


    return (
        <div className='container'>
            <div className="image_box">
                <div className="image" ref={imgRef}>
                    {!file && <label htmlFor="file">Select Image from PC</label>}
                    <input id='file' type="file" onChange={handleFileChange}/>
                    
                    {file && <img src={file} alt="image_here" onClick={handleClick}/>}
                </div>
            </div>
            <div>
                <div className='item_info'>
                    <h2>Map Item</h2>
                    <div className='map_item'>
                        <input type="text" disabled value="" className='product_input'ref={prodRef}/>
                        <div className='map_btn' onClick={mapItem}>Add</div>
                    </div>
                </div>
                <div className='order_list'>
                    <h2>Order List</h2>
                    <ul>
                        {data.map(item => (
                            <li key={item.id} id={item.id}>  
                                <div className='item_no'>{item.id}</div>                          
                                <a className='product_name' href={item.url} target="_blank" >{item.productname}</a>
                                <div className='add_item' onClick={handleItemClick}>Select</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="/view" className='submit'>Submit</Link>
            </div>
            {/* <div className='options'>
                <div className='add_area_btn'>Add Area</div>
                <div className='select_area_btn'>Select Area</div>                
                <div className='clear_area_btn'>Clear Area</div>
            </div> */}
        </div>
    )
}

export default MapImage
