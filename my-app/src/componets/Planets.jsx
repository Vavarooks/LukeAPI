import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = props => {

    const [planet, setPlanet] = useState({
        name: "",
        terrain: "",
        climate: "",
        surface_water: "",
        population: ""
    });

    
    const {id} = useParams();
    const navigate = useNavigate();
    const [selectId, setSelectId] = useState(id);

    const changeHandler = () => {
        navigate(`/planets/${selectId}`)
    }


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${selectId}`)
            .then( res => {
                setPlanet(res.data)
            })
            .catch( err => {console.log(err)})
    }, [selectId]);

    return (
        <>
            <h1>Planets</h1>
            <Link to="/people/:id">People</Link>
            <br/>
            <Link to="/starwars">Home</Link>
            <div className="card d-block mx-auto w-75 my-3 border p-3">
                <div className="row">
                    <div className="col-6">
                        <select className="form-select">
                            <option value="planets"></option>
                            <option value="people"></option>
                        </select>
                    </div>
                    <div className="col-4">
                    <input className="form-control" value={selectId} type="number" onChange={e => setSelectId(e.target.value)}/>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={`{} => changeHandler{}`}> Search </button>
                    </div>
                </div>
            </div>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <h1>Name: {planet.name}</h1>
                <h3>Climate: {planet.climate}</h3>
                <h3>Terrain: {planet.terrain}</h3>
                <h3>Surface Water: {planet.surface_water}</h3>
                <h3>Population: {planet.population}</h3>
            </div>
        </>
    )
}
export default Planets