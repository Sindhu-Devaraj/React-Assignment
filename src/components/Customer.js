import {FaTimes} from 'react-icons/fa';
import {VscEdit} from 'react-icons/vsc';

const Customer = ({customer, onDelete}) => {
    return(
        <div className='customer'>
            <h3>{customer.customerName}<VscEdit className="edit" style={{color:'grey', cursor:'pointer'}} />
                <FaTimes className="delete" style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(customer.id)}/>
            </h3>
            <p>{customer.location}</p>
        </div>
    )
}

export default Customer;