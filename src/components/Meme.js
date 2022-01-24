import React from 'react';
import "../styles/styles.css";
import memeData from '../memesData.js';


export default function Meme() {

    return (
        <div className="meme">
            <div className="meme__form">
                <input type="text" placeholder="bottom text" className="meme__form--bottom meme__form--inputs"></input>
                <input type="text" placeholder="upper text" className="meme__form--upper meme__form--inputs"></input>
                <button onClick={grabMeme} className="meme__form--btn">Get a new meme image  🖼</button>
            </div>
        </div>
    )

    function grabMeme() {
        
        const prop = Math.floor(Math.random() * memeData.data.memes.length);
        console.log("the meme url we picked is: ", memeData.data.memes[prop].url)
        
    }
}