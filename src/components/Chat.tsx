import React, { useState, useEffect } from "react";
import '../styles/chat.scss'
import { useParams } from 'react-router-dom'
import { message } from "../data/message";
import { societe } from "../data/societe";
import mypic from '../img/webporfolio.png';
//@ts-ignore
import InputEmoji from 'react-input-emoji';

function Chat() {
    //@ts-ignore
    var { id } = useParams();

    const [Localmessage, setmessage] = useState([...message])
    const [localuser, setlocaluser] = useState(societe[0])
    const [newMessage, setMessage] = useState("");

    const getMessage = () => {
        const messages = message.filter(x => x.idconversation == id);
        console.log(messages);
        setmessage([...messages]);
    }
    const getUser = () => {
        const user = societe.findIndex(x =>x.id == id)
        setlocaluser(societe[user]);
    }
    const user = {
        "nom": "Sandratra",
        "image": "sary"
    }
    useEffect(() => {
        getMessage();
        getUser();
    }, []);

    const addMessage = () => {
        const newMess = {
            "id": message.length + 1,
            "sender": 10,
            "idconversation": id,
            "Message": newMessage,
        }
        message.push(newMess);
        setMessage("");
        getMessage();
    }

    return (
        <div className="card direct-chat direct-chat-warning">
            <div className="card-header">
                <h3 className="card-title"><span className={`w-48 avatar ${localuser.color}`}>{localuser.avatar}</span> {localuser.nom}</h3>
            </div>
            <div className="card-body">

                <div className="direct-chat-messages">


                    {Localmessage.map(mes =>
                        <div className={`direct-chat-msg ${mes.sender === 10 ? 'right' : ''}`}>
                            <div className="direct-chat-infos clearfix">
                                <span className={`direct-chat-name ${mes.sender === 10 ? 'float-right' : 'float-left'}`}>{mes.sender === 10 ? user.nom : localuser.nom}</span>
                            </div>
                            <div className="messagecontent">
                                
                            </div>
                            {mes.sender===10?<img className="direct-chat-img" src={`${mypic}`} alt="message user image" />:
                                <span className={`w-48 avatar ${localuser.color} ico-societe`}>{localuser.avatar}</span>
                            }
                            
                            <div className="direct-chat-text">
                                {mes.Message}
                            </div>

                        </div>
                    )}
                </div>
                <div className="card-footer">
                    <form>
                        <div>
                            <div className="row">
                                <div className="col-sm-9">
                                    <InputEmoji
                                        value={newMessage}
                                        cleanOnEnter
                                        onEnter={addMessage}
                                        placeholder="Ecrire un message"
                                        onChange={setMessage}
                                    />
                                </div>
                                <div className="col">
                                    <span className="input-group-append">
                                        <button type="button" className="btn btn-primary" onClick={addMessage}>Envoyer</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}
export default Chat;