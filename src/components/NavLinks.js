import '../styles/Navlinks.css';
import {Link} from 'react-router-dom'

const Navlinks = () => {
    return ( 
        <>
        <div className="navlinks">
        <Link to="/" className='linkText'>Home</Link>
        <Link to="/about" className='linkText'>About</Link> 
        <Link to="/portfolio" className='linkText'>Portfolio</Link> 
        </div>
        <div className="close">X</div>
        </>
 
        );
}
 
export default Navlinks;