import React,{useEffect, useState} from "react";
import { BiComment } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import comment from "../data/comment";
import post from "../data/post";
import { IPost } from '../interfaces/Ipost';
import '../styles/post.scss'
function Post(props:IPost){
    const [liked,clickLike]=useState(false);

    useEffect(()=>{
      const index=post.findIndex(x=>x.id===props.id);
      clickLike(post[index].isLiked)
    },[])

    const LikePost=()=>{
      const index=post.findIndex(x=>x.id===props.id);
      post[index].isLiked=!post[index].isLiked;
      clickLike(post[index].isLiked);
      if(post[index].isLiked){
        post[index].likes+=1;
      }else{
        post[index].likes-=1;
      }
      props.updatePost(post);
    }
    return(
        <div className="post">
            <div className="avatar">
          <img src={props.avatar} alt="" />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="post-headerText">
              <h3>
                {props.displayName}{" "}
                <span className="post-headerSpecial">
                  @{props.username} &bull; {props.date}
                </span>
              </h3>
            </div>
            <div className="post-headerDescription">
              {props.text.split('\n').map((str: any) => <p key={str}>{str}</p>)}
            </div>
          </div>
          <img src={props.image} alt="" />
          <div className="post-footer">
            <Link to={`/commentaire/${props.id}`}><span className="post-icon"><i className="far fa-comment"><BiComment/></i></span>{props.commentaire}</Link>
            <span><span className="post-icon"><i className={liked?' heart-red fa-heart':'fa heart fa-lg'} onClick={LikePost}><FaHeart/> </i></span>{props.likes}</span>
            <i className="fa fa-external-link-alt"></i>
          </div>
        </div>
        </div>
    )
}
export default Post;