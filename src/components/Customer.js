import {FaTimes} from 'react-icons/fa';
import {VscEdit} from 'react-icons/vsc';

const Customer = (props) => {
    return(
        <div className='customer'>
            <h3>{props.customer.customerName}<VscEdit className="edit" style={{color:'grey', cursor:'pointer' }} onClick={() => props.onEdit(props.customer.id)}/>
                <FaTimes className="delete" style={{color:'red', cursor:'pointer'}} onClick={() => props.onDelete(props.customer.id)}/>
            </h3>
            <p>{props.customer.location}</p>
        </div>
    )
}

export default Customer;