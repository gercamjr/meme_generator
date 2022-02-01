import React, {useState} from 'react';
import "../styles/styles.css";
import memeData from '../memesData.js';


export default function Meme() {

    const [memeImage, setMemeImage] = useState("");

    function grabMeme() {
        
        const prop = Math.floor(Math.random() * memeData.data.memes.length);
        const memeURL = memeData.data.memes[prop].url;
        console.log("the meme url we picked is: ", memeURL);
        setMemeImage(memeURL)
        
    }

    return (
        <div className="meme">
            <div className="meme__form">
                <input type="text" placeholder="bottom text" className="meme__form--bottom meme__form--inputs"></input>
                <input type="text" placeholder="upper text" className="meme__form--upper meme__form--inputs"></input>
                <button onClick={grabMeme} className="meme__form--btn">Get a new meme image  🖼</button>
            </div>
            <img src={memeImage} alt="a meme image" className="meme__image" />
        </div>
    )

}