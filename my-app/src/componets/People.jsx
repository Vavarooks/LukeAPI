import {Link} from 'react-router-dom';

const People = props =>{
    return(
        <>
            <h1>Hello I am People</h1>
            <Link to="/planets">Go to Planets</Link>
            <br/>
            <Link to="/">Go to Home</Link>
        </>
    )
}
export default People