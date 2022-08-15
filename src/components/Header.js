
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
  //setting header, also taking in a property of title
  //on click function 
  const onClick = () => {
    console.log("click")
  }
  return (
    //header with a button, that has a onClick event listener where we pass in onClick function above
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text = 'Hello' onClick={onClick} /> 
    </header>
  )
}

//sets the default property
Header.defaultProps = {
    title: 'Task tracker'
}
//requires that the prop value type is a string
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header