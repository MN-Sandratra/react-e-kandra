import React,{useEffect, useState} from 'react';
import offre from '../interfaces/Ioffre';

function Jobitems(props:offre){
    const[offre,setOffre]=useState(props)
    return (
        <div className="job-items">
            <div className="card border-primary">
              <div className="card-body">
                <h4 className="card-title">{offre.poste}</h4>
                <p className="card-text">{offre.description}</p>
                <tr>
                    <td>
                        <h4 className="coi-color">Domaine</h4>
                    </td>
                    <td>
                        <h4>{offre.domaine}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 className="coi-color">Diplome requis</h4>
                    </td>
                    <td>
                        <h4>{offre.diplome}</h4>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 className="coi-color">Date limite de candidature</h4>
                    </td>
                    <td>
                        <h4 className='{{(today < currentOffre.date_limite)?"" : "ofr-text-red"}}'>
                            {offre.date}
                            </h4>
                    </td>
                </tr>
              </div>
            </div>
        </div>
    )
}

export default Jobitems;