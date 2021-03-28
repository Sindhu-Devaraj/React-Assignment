import Customer from './Customer';

const Customers = ({customerList, onDelete}) => {
    
    return(
        <>
            {customerList.map((customer) => (
                <Customer key={customer.customerId} customer={customer} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Customers;