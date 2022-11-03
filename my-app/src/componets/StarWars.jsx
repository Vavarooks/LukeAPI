import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const StarWars = props => {

    const params = useParams(); 

    useEffect(() =>{
        console.log(params)
    }, []);

    return (
        <>
            <h1>Hello I am StarWars</h1>
            <div className="card d-block mx-auto w-75 my-3 border p-3">
                <form onSubmit={movePage}>
                    <div className="row">
                        <div className="col-6">
                            <select className="form-select">
                                <option value="planets"><Link to="/planets">Planets</Link></option>
                                <option value="people"><Link to="/people">People</Link></option>
                            </select>
                        </div>
                        <div className="col-4">
                            <input className="form-control" placeholder="ID:" type="number" />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary"> Search </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default StarWars