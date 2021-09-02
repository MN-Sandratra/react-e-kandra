import React from "react";
import '../styles/profile.scss'
import user from '../data/user'
import sary from '../img/webporfolio.png'

function Profile() {
    let profile = user[0];
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="pdc"></div>
                <img src={sary} className="sidebar__topAvatar"/>
                <h2>{profile.nom}</h2>
                <h4>{profile.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>{profile.classe}</p>
                </div>
                <div className="sidebar__stat">
                    <p>{profile.competence}</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Connaissance{profile.connaissance.length > 0 ? 's' : ''}</p>
                {
                    profile.connaissance.map(
                        x => <div className="sidebar__recentItem">
                            <span className="sidebar__hash">#</span>
                            <p>{x}</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Profile;