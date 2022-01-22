import React from 'react';
import "../styles/styles.css";

export default function Meme() {
    return (
        <div className="meme">
            <form action="" className="meme__form">
                <input type="text" placeholder="bottom text" className="meme__form--bottom"></input>
                <input type="text" placeholder="upper text" className="meme__form--upper"></input>
                <button className="meme__form--btn">Get a new meme image</button>
            </form>
        </div>
    )
}