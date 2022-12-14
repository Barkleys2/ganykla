import types from "../Data/types";
import {  useState, useContext } from 'react';
import DataContext from "../Data/DataContext";

function Create() {

   
   const [type, setType] = useState('0');
   const [weight, setWeight] = useState('')
   const {setCreateData} = useContext(DataContext)

   const add = () => {
      setCreateData({
         
         type: parseInt(type),
         weight
         
      });
      
      setType('0');
      setWeight('');
   }

    const doWeight = e => {
    let y = parseInt(e.target.value);
    if (isNaN(y)) {
        setWeight('');
    } else {
        setWeight(Math.min(y, 400));
    }
  }

 

  return (
    <div className="card m-4">
      <h5 className="card-header">New animal</h5>
      <div className="card-body">
         <div>
          <div className="mb-3">
            <label className="form-label">Animal type</label>
            <select className="form-select" value={type} onChange={e => setType(e.target.value)}>
              <option value={0} disabled>
                Select from the list
              </option>
              {
              types.map((g) => ( <option key={g.id} value={g.id}>{g.type}</option>))
              }
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Enter the weight (kg)</label>
            <input type="text" className="form-control" value={weight} onChange={doWeight}/>
          </div>
          <button  type="button" onClick={add} className="btn btn-outline-dark">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Create;