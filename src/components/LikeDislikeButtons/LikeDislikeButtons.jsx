import React, { useState } from 'react';
import "./LikeDislikeButtons.css"
// import "../../assets/thumbsUp.png"

const LikeDislikeButtons = (props) => {
    const [isLiked, setIsLiked] = useState(null);
    const [isDisliked, setIsDisliked] = useState(null);
    const [likeColor, setLikeColor] = useState("black");
    const [dislikeColor, setDislikeColor] = useState("black");


    function handleClickLike(){
        if(!isLiked && !isDisliked){setIsLiked(true); setLikeColor("green");}
        else if(!isLiked && isDisliked){
            setIsLiked(true); setLikeColor("green")
            setIsDisliked(false); setDislikeColor("black")
        }
        else{setIsLiked(false); setLikeColor("black"); }
        }
    
    function handleClickDislike(){
        if(!isDisliked && !isLiked){setIsDisliked(true); setDislikeColor("red")}
        else if(isLiked && !isDisliked){
            setIsLiked(false); setLikeColor("black")
            setIsDisliked(true); setDislikeColor("red")
        } 
        else{setIsDisliked(false); setDislikeColor("black");} 
    }

    return (

        <div>
            <i class="fa-solid fa-thumbs-up" value={isLiked} onClick={handleClickLike} id={likeColor} ></i>
            <i class="fa-solid fa-thumbs-down" value={isLiked} onClick={handleClickDislike} id={dislikeColor} ></i>
        </div>
      );
}
 
export default LikeDislikeButtons;