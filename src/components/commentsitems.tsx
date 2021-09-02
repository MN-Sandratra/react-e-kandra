import React,{useEffect,useState} from "react";
import users from '../data/user';
import '../styles/commentitems.scss'

interface Comment{
    Commentid:number,
    userId:number,
    commentaire:string
}

const CommentsItem=(props:any)=>{

    const [Myuser,ChangeUser]=useState(users[2])
    const getuserById=(id:number)=>{
        var localuser=users.findIndex((x:any)=>x.id===id);
        ChangeUser(users[localuser]);
    }

    useEffect(()=>{
        getuserById(props.userId)
    })

    


    return(
        <div className="profile-1" key={`comment_${props.Commentid}`}>
            <div className="profile-img"><img src={Myuser.picture} className="avatar" alt="Avatar"/></div>
            <div className="profile-name">
               {Myuser.username}<br />
              <span className="twitter-account">{props.commentaire}</span>
            </div>
          </div>
    )
}
export default CommentsItem;