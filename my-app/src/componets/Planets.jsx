import {Link} from 'react-router-dom';

const Planets = props =>{
    return(
        <>
            <h1>Hello I am Planets</h1>
            <Link to="/people">Go to People</Link>
            <br/>
            <Link to="/">Go to Home</Link>
        </>
    )
}
export default Planets