import {data} from './data'
const OrderList = () => {

    const item = () => {
        // console.log(data.map(item => item.productname))
        console.log("in OrderList");
        return data.map(item => (
            <li key={item.id}>
                {item.productname}
            </li>
        ))
    }

    return (
        <div className="order_list">
            <ul>
                {/* {item} */}
            </ul>
        </div>
    )
}
export default OrderList