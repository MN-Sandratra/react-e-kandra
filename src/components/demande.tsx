import React from "react";
import '../styles/demande.scss'

function Demande() {
    const selectfile = () => {

    }
    return (
        <div className="demande">
            <div className="form-group">
                <label htmlFor="exp">Experience Professionnel</label>
                <input type="text"
                    className="form-control" name="exp" id="exp" aria-describedby="helpId" placeholder="" />
            </div>
            <div className="form-group">
                <label htmlFor="exp">Duree dans ce poste</label>
                <input type="number"
                    className="form-control" name="exp" id="exp" aria-describedby="helpId" placeholder="" />
            </div>
            <div className="form-group">
                <label htmlFor="dip">Niveau actuel et Diplome</label>
                <input type="text"
                    className="form-control" name="dip" id="dip" aria-describedby="helpId" placeholder="" />
            </div>
            <div className="form-group">
                <label htmlFor="comp">Lister vos competence</label>
                <textarea className="form-control" name="comp" id="comp" placeholder="ex C,C#"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exp">Importer votre Circulum Vitae</label>
                <div className="dropzone">
                    <input type="file" id="fileDropRef" onChange={selectfile} />
                    <img src="assets/images/ic-upload-file.svg" alt="" />
                    <h3>Importez votre CV ici</h3>
                    <h3>ou</h3>
                    <label htmlFor="fileDropRef" >Rechercher un Fichier</label>
                </div>
            </div>
            <button className="btn btn-send">Envoyer votre candidature</button>
        </div>
    )
}

export default Demande;