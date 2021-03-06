import React, {useState} from 'react';
import "../styles/styles.css";



export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const [allMemes, setAllMemes] = useState([]);

    function grabMeme() {
        
        const prop = Math.floor(Math.random() * allMemes.length);
        const memeURL = allMemes[prop].url;
        console.log("the meme url we picked is: ", memeURL);
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                randomImage: memeURL
            })
        })
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <div>
            <div className="meme__form">
            <input type="text" placeholder="upper text" className="meme__form--upper meme__form--inputs" value={meme.topText} name="topText" onChange={handleChange}></input>
                <input type="text" placeholder="bottom text" className="meme__form--bottom meme__form--inputs" value={meme.bottomText} name="bottomText" onChange={handleChange}></input>
                
                <button onClick={grabMeme} className="meme__form--btn">Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )

}