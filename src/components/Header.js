import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

// proptypes will help us to decide whether it should be string ,no. etc
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;