import React from 'react';
import '../styles/message.scss'
import {message} from '../data/message';
import { societe } from '../data/societe';
import { Link } from 'react-router-dom';

function Message() {

    const getLastMessage=(id:any)=>{
        var select=message
        var res=select.filter(
            x=>x.idconversation=id
        );
        let ln=res.length;
        return res[ln-1].Message;
    }
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row">
                    <div className="col-sm-11">
                        <div className="list list-row block">
                            {societe.map(
                                x=>
                                <Link to={`/chat/${x.id}`}>
                                <div className="list-item" data-id="19" key={`${x.id}`}>
                                    <div><a href="#" data-abc="true"><span className={`w-48 avatar ${x.color}`}>{x.avatar}</span></a></div>
                                    <div className="flex"> <a className="item-author text-color" data-abc="true">{x.nom}</a>
                                        <div className="item-except text-muted text-sm h-1x">clicker pour voir le message et repondre au message</div>
                                    </div>
                                    <div className="no-wrap">
                                        <div className="item-date text-muted text-sm d-none d-md-block ms-auto">13/12 20</div>
                                    </div>
                                </div>
                                </Link>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Message;