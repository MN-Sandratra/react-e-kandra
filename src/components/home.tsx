import React,{useState} from 'react'
import '../styles/home.scss'
import { BiCalendarEvent,BiPencil, BiPhotoAlbum, BiSend, BiVideo, RiArticleFill } from 'react-icons/all'
import Post from './post';
import Allposts from '../data/post';
import comment from "../data/comment";
import mypic from '../img/webporfolio.png'

function Home() {
    const [Mypost, ChangePost] = useState([
        ...Allposts
    ])
    const [tweet, ChangeTweet] = useState('');
    const Month=['Jan','fev','mar','avr','mai','jun','jul','aug','sep','oct','nov','dec']

    const createPost=()=>{
        var d = new Date();
        console.log("Mandefa za");
        if(tweet.trim().length>0)
            Allposts.unshift({
                id: Mypost.length+1,
                text: "" + tweet,
                username: "MN-Sandratra",
                displayName: "Sandratra",
                avatar: mypic,
                image:'',
                likes: 0,
                isLiked:false,
                date: "" + Month[d.getMonth()] + " " + d.getDate()+","+d.getFullYear()
            })
        console.log("ato za");
        ChangeTweet("");
        ChangePost(Allposts)
    }
    
    function updatePost(posts: any) {
        ChangePost([...posts]);
    }
    const getCommentaire=(postid:number)=>{
        const nbr=comment.filter(x=>x.postId===postid).length;
        return nbr;
    }
    return (
        <div>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <i> <BiPencil /> </i>
                    <form>
                    <input type="text" value={tweet} onChange={(event)=>ChangeTweet(event.currentTarget.value)}/>
                        <i onClick={createPost}><BiSend></BiSend></i>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <div className="inputOption bleu">
                        <i><BiPhotoAlbum /> </i>
                        <h4>Photo</h4>
                    </div>
                    <div className="inputOption orange">
                        <i className="material-icons"> <BiVideo /> </i>
                        <h4>Video</h4>
                    </div>
                    <div className="inputOption gris">
                        <i className="material-icons"> <BiCalendarEvent /> </i>
                        <h4>Event</h4>
                    </div>
                    <div className="inputOption vert">
                        <i className="material-icons"><RiArticleFill /></i>
                        <h4>Write Article</h4>
                    </div>
                </div>
            </div>

            {Mypost.length > 0 ? Mypost.map((post: any) => {
                return (
                    <Post
                        id={post.id}
                        displayName={post.displayName}
                        username={post.username}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                        likes={post.likes}
                        date={post.date}
                        isLiked={post.isLiked}
                        commentaire={getCommentaire(post.id)}
                        updatePost={updatePost}
                    ></Post>
                );
            }) : 'Aucun Post disponible'}

        </div>
    );

}
export default Home;