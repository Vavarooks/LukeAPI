import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const People = props => {

    const [person, setPerson ] = useState({
        name: "",
        hair_color: "",
        mass: "",
        skin_color: "",
        height: ""
    });

    const { id } = useParams();
    const [selectId, setSelectId] = useState(id);


    useEffect(() => {

        console.log(id)
        axios.get(`https://swapi.dev/api/people/${selectId}`)
            .then( res => {
                setPerson(res.data)
            })
            .catch( err => {console.log(err)})
    }, [selectId]);

    return (
        <>
            <h1>People</h1>
            <Link to="/planets/:id">Planets</Link>
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
                        <button className="btn btn-primary"> Search </button>
                    </div>
                </div>
            </div>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <h1>Name: {person.name}</h1>
                <hr/>
                <h3>Height: {person.height}</h3>
                <h3>Mass: {person.mass}</h3>
                <h3>Hair Color: {person.hair_color}</h3>
                <h3>Skin Color: {person.skin_color}</h3>
            </div>
        </>
    )
}
export default People