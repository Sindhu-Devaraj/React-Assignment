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

  const deleteCustomer = async(id) => {
    await fetch(`http://localhost:4001/customerList/${id}`, {
      method: 'DELETE'
    })
    setCustomerList(customerList.filter((customer) => customer.id !==id))
  }

  const addCustomer = async(customer) => {
    const response  = await fetch('http://localhost:4001/customerList/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(customer)
    })
    const data = await response.json()
    setCustomerList([...customerList, data])
  }

  const [showAdd, setShowAdd] = useState(false)

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
