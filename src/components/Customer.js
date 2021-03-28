import Customers from "./Customers"

import {FaTimes} from 'react-icons/fa';

const Customer = ({customer, onDelete}) => {
    return(
        <div className='customer'>
            <h3>{customer.customerName}<FaTimes style={{color:'red', cursor:'pointer'}}
            onClick={() => onDelete(customer.customerId)}/></h3>
            <p>{customer.location}</p>
        </div>
    )
}

export default Customer;