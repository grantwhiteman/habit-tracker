import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/react-portfolio' && <Button color={showAdd ? 'green' : 'red'} text={showAdd ? 'Add' : 'Close'} onClick={onAdd} />}
        </header>
    )
}

export default Header