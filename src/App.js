import './App.css';
import Header from './components/Header';
import Customers from './components/Customers';
import AddCustomer from './components/AddCustomer';
import { useState, useEffect } from 'react';

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [inEdit,setEdit] = useState(false);
  const [customerById,setcustomerById] = useState(null);
  const [showAdd,setShowAdd] = useState(false);

  useEffect(() => {
    const getCustomerList = async() => {
      const customerList = await fetchCustomerList()
      setCustomerList(customerList)
    }
    getCustomerList()
  })

  const fetchCustomerList = async() => {
    const response = await fetch('http://localhost:4001/customerList')
    const data = await response.json()
    return data;
  }

  const fetchCustomerById = async(id)=>{
    const response = await fetch(`http://localhost:4001/customerList/${id}`)
    const data = response.json()
    return data;
  }

  const deleteCustomer = async(id) => {
    await fetch(`http://localhost:4001/customerList/${id}`, {
      method: 'DELETE'
    })
    setCustomerList(customerList.filter((customer) => customer.id !==id))
  }

  const addCustomer = async(customer,isEdit) => {
    console.log("Fetched customer data"+JSON.stringify(customer));
    console.log("Fetched isEdit"+isEdit);
    if(isEdit){
      {
        const editCustomer = {
          id:customer.id,
          customerName:customer.customerName,
          location:customer.location
        }
        const response = await fetch(`http://localhost:4001/customerList/${customer.id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(editCustomer)
        })
        console.log("Response"+response);
        const data = await response.json()
        setCustomerList([...customerList,data])
        setEdit(false)
      }
    }else{
      const response  = await fetch('http://localhost:4001/customerList/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(customer)
      })
      console.log("Response"+JSON.stringify(response));
      const data = await response.json()
      console.log("data"+data);
      setCustomerList([...customerList, data])
    }
  }

  const getCustomerById = (id)=>{
    let customerByObj;
    customerList.forEach((customer)=>{
      if(customer.id === id){
        console.log("Selected customer Id"+customer.id);
        customerByObj = customer;
      }
    })
    console.log("Customer by obj"+JSON.stringify(customerByObj));
    return customerByObj;
  }

  const onEdit = (id)=>{
    setShowAdd(!showAdd);
    setEdit(true);
    console.log("Edit Status:"+inEdit);
    setcustomerById(getCustomerById(id));
    console.log("Customer by id"+JSON.stringify(customerById));
  }

  const setForm =() => {
    setShowAdd(!showAdd);
    setEdit(false);
  }

  return (
    <div className='container'>
      <Header title='Customers List' onAdd={setForm} showAdd = {showAdd}/>
      {/* <Header title='Customers List'/> */}
      {/* { showAdd && <AddCustomer onAdd={addCustomer} editStatus = {inEdit} customerById = {customerById}/>} */}
      { showAdd && <AddCustomer onAdd={addCustomer} editStatus = {inEdit} customerById = {customerById}/>}
      {customerList.length > 0 ? <Customers customerList={customerList} onDelete={deleteCustomer} onEdit={onEdit}/> :
      'No Customer Entry to show !!'}
    </div>
  );
}

export default App;
