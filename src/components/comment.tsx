import React, { useState, useEffect } from "react";
import Post from "./post";
import Allposts from '../data/post';
import { useParams } from "react-router";

//@ts-ignore
import InputEmoji from 'react-input-emoji'
import CommentsItem from "./commentsitems";
import comment from "../data/comment";


function Commentaire() {
    //@ts-ignore
    var { postId } = useParams();
    const [existant, changeExistance] = useState(true);
    const [Mypost, ChangePost] = useState([
        ...Allposts
    ]);
    const [localpost, changeLocalPost] = useState(Mypost[0]);
    const [commentaires,updateCommentaire]=useState([...comment]);
    const [newCommentaire,setCommentaire]=useState('')

    const getCurrentPost = () => {
        const index = Allposts.findIndex(x => x.id == postId);
        if (index != null) {
            changeLocalPost(Allposts[index]);
        } else {
            changeExistance(false);
        }
    }
    const getCommentaire=()=>{
        const localcomment=comment.filter(x=>x.postId==postId);
        updateCommentaire(prevComment=>[...localcomment]);
    }

    const addComment=()=>{
        const newComment={
            "postId": postId,
            "id": comment.length+1,
            "userId": 1,
            "commentaire": newCommentaire
        }
        setCommentaire('')
        comment.push(newComment)
        getCommentaire();

    }
    useEffect(() => {
        getCurrentPost();
        
    })
    useEffect(()=>{
        getCommentaire();
    },[]);

    const updatePost = (posts: any) => {
        ChangePost([...posts]);
    }


    return (
        <div className="home">
            <Post
                id={localpost.id}
                displayName={localpost.displayName}
                username={localpost.username}
                text={localpost.text}
                avatar={localpost.avatar}
                image={localpost.image}
                likes={localpost.likes}
                commentaire={commentaires.length}
                date={localpost.date}
                isLiked={localpost.isLiked}
                updatePost={updatePost}
            ></Post>
            <div className="row">
                <div className="col-md-9">
                    <InputEmoji
                        value={newCommentaire}
                        cleanOnEnter
                        onEnter={addComment}
                        placeholder="Nouveau commentaire"
                        onChange={setCommentaire}
                    />
                </div>
                <div className="col">
                    <button onClick={addComment} className="btn btn-primary tweetBox-tweetButtons btn-sm ">Poster</button>
                </div>
            </div>
            <div className="comments">
                {commentaires.map(comment=>
                    <CommentsItem
                        Commentid={comment.id}
                        userId={comment.userId}
                        commentaire={comment.commentaire}
                    >
                    </CommentsItem>
                    )}
            </div>
        </div>
    )
}

export default Commentaire;