import {useState,useEffect} from 'react';

const AddCustomer = (props) => {
    const [customerName, setCustomerName] = useState('');
    const [location, setLocation] = useState('');

    useEffect(()=>{
        if(props.editStatus){            
            setCustomerName(props.customerById.customerName)
            setLocation(props.customerById.location)
        }
    },[props.editStatus])

    const onSubmit = (e) => {
        e.preventDefault()
        if(!customerName){
            alert('Please add Customer')
            return
        }
        const isEdit = (props.editStatus) ? true : false; 
        const customer = (props.editStatus) ? {id : props.customerById.id,customerName:customerName,location :location} : {customerName:customerName,location :location};
        props.onAdd(customer, isEdit)
        setCustomerName('')
        setLocation('')
    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input type='text' placeholder='Enter Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <input type='text' placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            {props.editStatus ? <input type='submit' value='Update' className='btn-warning' id="edit"/> : <input type='submit' value='Add' className='btn btn-block' id="add"/> }
        </form>
    )
} 

export default AddCustomer;