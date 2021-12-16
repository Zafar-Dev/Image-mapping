import React, { useRef } from 'react'
import image from './assests/pmv-chamara-MEsWk-dZzlI-unsplash.jpg'
const MapImage = () => {

    

    const imgRef = useRef(null)
    const handleClick = (e) => {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        console.log(x, y)
        createDiv(x, y);
    }
        

    const createDiv = (x,y) => {        
        const element = document.createElement('div')
        element.setAttribute("id", "some-id")
        element.style.left = `${x}px`
        element.style.top = `${y}px` 
        element.style.transform = `translate(-${16}px, -15px)`
        element.classList.add("dot") 
        // element.innerText = "dot"       
        imgRef.current?.appendChild(element)
        console.log(element)
    }

    return (
        <div>
            <div className="image_box">
                <div className="image" ref={imgRef}>
                    <img src={image} alt="image_here" onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default MapImage
