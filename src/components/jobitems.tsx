import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import offre from '../interfaces/Ioffre';
import '../styles/jobitems.scss'
function Jobitems(props:offre){
    const[offre,setOffre]=useState(props)
    return (
        <div className="job-items">
            <div className="card border-primary">
              <div className="card-body">
                <h4 className="card-title">{offre.poste}</h4>
                <p className="card-text description ">{offre.description}</p>
                <table>
                <tr>
                    <td>
                        <h4 className="coi-color">Domaine</h4>
                    </td>
                    <td>
                        <p>{offre.domaine}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 className="coi-color">Diplome requis</h4>
                    </td>
                    <td>
                        <p>{offre.diplome}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 className="coi-color">Date limite de candidature</h4>
                    </td>
                    <td>
                        <p className='{{(today < currentOffre.date_limite)?"" : "ofr-text-red"}}'>
                            {offre.date}
                            </p>
                    </td>
                </tr>
                </table>
                <Link className="btn btn-send" to="">Envoyer votre candidature</Link>
              </div>
            </div>
        </div>
    )
}

export default Jobitems;