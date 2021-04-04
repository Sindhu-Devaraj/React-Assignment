import Customer from './Customer';

const Customers = ({customerList, onDelete}) => {
    
    return(
        <>
            {customerList.map((customer) => (
                <Customer key={customer.id} customer={customer} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Customers;