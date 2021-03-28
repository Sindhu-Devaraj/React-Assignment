import {useState} from 'react';

const AddCustomer = ({onAdd}) => {
    const [customerName, setCustomerName] = useState('');
    const [location, setLocation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!customerName){
            alert('Please add Customer')
            return
        }

        onAdd({customerName, location})
        setCustomerName('')
        setLocation('')
    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Customer Name</label>
                <input type='text' placeholder='Enter Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Location</label>
                <input type='text' placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <input type='submit' value='Add' className='btn btn-block'/> 
        </form>
    )
} 

export default AddCustomer;