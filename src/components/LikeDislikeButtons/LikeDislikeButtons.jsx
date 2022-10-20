import React, { useState } from 'react';
import "./LikeDislikeButtons.css"
// import "../../assets/thumbsUp.png"

const LikeDislikeButtons = (props) => {
    const [isLiked, setIsLiked] = useState(null);
    const [isDisliked, setIsDisliked] = useState(null);
    const [likeClassName, setLikeClassName] = useState("inactive");
    const [dislikeClassName, setDislikeClassName] = useState("inactive");
    const [color, setColor] = useState("black");

    function handleClickLike(){
        if(!isLiked && !isDisliked){setIsLiked(true); setLikeClassName("active");}
        else if(!isLiked && isDisliked){
            setIsLiked(true); setLikeClassName("active")
            setIsDisliked(false); setDislikeClassName("inactive")
        }
        else{setIsLiked(false); setLikeClassName("inactive"); }
        }

    // function handleClickLike(){
    //     if(!isLiked && !isDisliked){setIsLiked(true); setColor("green");}
    //     else if(!isLiked && isDisliked){
    //         setIsLiked(true); setLikeClassName("active")
    //         setIsDisliked(false); setDislikeClassName("inactive")
    //     }
    //     else{setIsLiked(false); setLikeClassName("inactive"); }
    //     }
    
    function handleClickDislike(){
        if(!isDisliked && !isLiked){setIsDisliked(true); setDislikeClassName("dislikeActive")}
        else if(isLiked && !isDisliked){
            setIsLiked(false); setLikeClassName("inactive")
            setIsDisliked(true); setDislikeClassName("dislikeActive")
        } 
        else{setIsDisliked(false); setDislikeClassName("inactive");} 
    }

    return (

        <div>
            <button className={likeClassName} value={isLiked} onClick={handleClickLike}><i class="fa-regular fa-thumbs-up"></i></button>
            {/* <i className="fa-regular fa-thumbs-up" value={isLiked} onClick={handleClickLike} id={color} ></i> */}
            <button className={dislikeClassName} value={isDisliked} onClick={handleClickDislike}><i class="fa-regular fa-thumbs-down"></i></button>
            
        </div>
      );
}
 
export default LikeDislikeButtons;