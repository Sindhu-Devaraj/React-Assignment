import Customer from './Customer';

const Customers = (props) => {
    
    return(
        <>
            {props.customerList.map((customer,key) => (
                <Customer key={key} customer={customer} onDelete={props.onDelete} onEdit={props.onEdit}/>
            ))}
        </>
    )
}

export default Customers;