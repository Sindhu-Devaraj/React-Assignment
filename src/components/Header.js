import Button from './Button';

const onClick = () => {
    console.log("Click");
}

const Header  = ({ title, onAdd, showAdd }) => {
    return(
        <header className='header'>
            <h1>{ title }</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Customer'} onClick={onAdd}/>
        </header>
    )
}

export default Header;