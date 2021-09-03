import React, { useState } from 'react';
import { BiPencil, BiSearch } from 'react-icons/bi';
import { offres } from '../data/offre';
import offre from '../interfaces/Ioffre';
import Jobitems from './jobitems';
import '../styles/job.scss';

function Job() {
    let filter = ['Poste', 'Domaine', 'Diplome','Description', 'Date'];
    const [selected, setSelected] = useState('');
    const [jobs, setJobs] = useState([...offres])
    const [search, setSearch] = useState('');
    const [currentJobs, setCurrentJobs] = useState([...jobs])
    const FilterJob = () => {
        let searchs = search.trim().toLowerCase();
        const temps = jobs.filter(x => {
            return x.diplome.toLowerCase().indexOf(searchs) !== -1 || 
            x.description.toLowerCase().indexOf(searchs)!== -1 ||
            (""+x.date_limite.toLowerCase()).indexOf(search) !== -1||
            x.domaine.toLowerCase().indexOf(search)!== -1 ||
            x.poste.toLowerCase().indexOf(search)!== -1 ||
            !search
        }
        );
        setCurrentJobs([...temps])
        console.log('temps');
        console.log(currentJobs);
    }
    return (
        <div>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <i> <BiPencil /> </i>
                    <form>
                        <input type="text" value={search} onChange={(event) => setSearch(event.currentTarget.value)} onKeyUp={FilterJob} />
                        <button type="submit">Rechercher</button>
                        <i><BiSearch /></i>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    {filter.map(x =>
                        <div className="inputOption">
                            <h4>{x}</h4>
                        </div>
                    )}
                </div>
            </div>
            <div>
                {console.log(currentJobs)}
                {currentJobs.map(x =>
                    <Jobitems
                        date={x.date}
                        titre={x.titre}
                        poste={x.poste}
                        description={x.description}
                        domaine={x.domaine}
                        diplome={x.diplome}
                        experience={x.experience}
                        date_limite={x.date_limite}
                    />
                )}
            </div>
        </div>
    )
}
export default Job;