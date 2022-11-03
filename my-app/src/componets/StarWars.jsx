import { Link} from 'react-router-dom';

const StarWars = props => {

    return (
        <>
            <h1>Hello I am StarWars</h1>
            <Link to="/planets/:id">Planets</Link>
            <br/>
            <Link to="/people/:id">People</Link>
            <div className="card d-block mx-auto w-75 my-3 border p-3">
                <div className="row">
                    <div className="col-6">
                        <select className="form-select">
                            <option value="planets"></option>
                            <option value="people"></option>
                        </select>
                    </div>
                    <div className="col-4">
                        <input className="form-control" placeholder="ID:" type="number" />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary"> Search </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StarWars