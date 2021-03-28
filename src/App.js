import './App.css';
import Header from './components/Header';
import Customers from './components/Customers';
import AddCustomer from './components/AddCustomer';
import { useState, useEffect } from 'react';

function App() {
  const [customerList, setCustomerList] = useState([])

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

  // const deleteCustomer = (customerId) => {
  //   setCustomerList(customerList.filter((customer) => customer.customerId !==customerId))
  // }
  const deleteCustomer = async(customerId) => {
    await fetch(`http://localhost:4001/customerList/${customerId}`, {
      method: 'DELETE'
    })
    setCustomerList(customerList.filter((customer) => customer.customerId !==customerId))
  }

  // const addCustomer = (customer) => {
  //   const customerId = 'C' + Math.random()
  //   const newCustomer  = {customerId, ...customer}
  //   setCustomerList([...customerList, newCustomer])
  // }
  const addCustomer = async(customer) => {
    console.log("Customer"+JSON.stringify(customer));
    const response  = await fetch('http://localhost:4001/customerList', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(customer)
    })
    console.log("Response"+JSON.stringify(response))
    const data = await response.json()
    console.log("data"+data)
    setCustomerList([...customerList, data])
  }

  const [showAdd, setShowAdd] = useState(false)
  // const toggleReminder = (id) => {
  //   setCustomerList(customerList.map((customer) => customer.customerId === id ?
  //   {...customer, reminder:customer.reminder} : customer))
  // }

  return (
    <div className='container'>
      <Header title='Customers List' onAdd={() => setShowAdd(!showAdd)} showAdd = {showAdd}/>
      { showAdd && <AddCustomer onAdd={addCustomer}/>}
      {customerList.length > 0 ? <Customers customerList={customerList} onDelete={deleteCustomer}/> :
      'No Customer Entry to show !!'}
    </div>
  );
}

export default App;
