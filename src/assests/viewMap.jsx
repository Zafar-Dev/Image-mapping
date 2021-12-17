import { Link } from "react-router-dom"
import { useEffect, useRef } from "react/cjs/react.development"

const ViewMap = ({items, setItems, file, setFile}) => {

    const viewImgRef = useRef(null)

    useEffect(() => {
        console.log("Received");
        console.log();
        items.map((item) => (
            handleOp(item.coordinates, item.selectedItem[0])
        ))
    }, [])

    const handleOp = (coords, product) => {
        console.log("==========");
        console.log(coords)
        console.log(product);
        
        console.log("==========");
        createDiv(coords.x, coords.y, product)   
    }
    const createDiv = (x,y, product) => { 
        console.log("product Here");
        console.log(product.productname)       
        const element = document.createElement('div')
        element.style.left = `${x}px`
        element.style.top = `${y}px` 
        element.style.transform = `translate(-${16}px, -15px)`
        element.onmouseenter = handleOnMouseEnter
        element.classList.add("dot") 

        const elementDiv = document.createElement('div')
        elementDiv.style.left = `${x}px`
        elementDiv.style.top = `${y}px` 
        elementDiv.style.transform = `translate(-${40}px, 10px)`
        elementDiv.classList.add("option_tab")

        const elementProDiv = document.createElement('div')
        elementProDiv.innerHTML = product.productname
        elementProDiv.classList.add("view_product_name") 

        const elementPriceDiv = document.createElement('div')
        elementPriceDiv.innerHTML = product.price
        elementPriceDiv.classList.add("view_product_price") 

        const elementDivA = document.createElement('div')
        elementDivA.classList.add("view_product_link") 
        
        const elementViewProDiv = document.createElement('a')
        elementViewProDiv.innerHTML = "View Product"
        elementViewProDiv.setAttribute("href", product.url)
        elementDivA.appendChild(elementViewProDiv)

        elementDiv.appendChild(elementProDiv)
        elementDiv.appendChild(elementPriceDiv)
        elementDiv.appendChild(elementDivA)

        console.log(elementDiv);
        // element.innerText = "dot"       
        viewImgRef.current?.appendChild(element)
        viewImgRef.current?.appendChild(elementDiv)
        // console.log(element)
    }

    const handleOnMouseEnter = (e) => {
        console.log(e)
    }

    return (
        <div className='container_view'>
            <div className="image_box">
                <div className="image" ref={viewImgRef}>                    
                    {file && <img src={file} alt="image_here" />}
                </div>
            </div>
            <Link to="/" className='home_page'>- Back</Link>
        </div>
    )
}

export default ViewMap