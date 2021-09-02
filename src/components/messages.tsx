import React from 'react';
import '../styles/message.scss'
import {message} from '../data/message';
import { societe } from '../data/societe';
import { Link } from 'react-router-dom';

function Message() {
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
                                        <div className="item-except text-muted text-sm h-1x">For what reason would it be advisable for me to think about business content?</div>
                                    </div>
                                    <div className="no-wrap">
                                        <div className="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
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