import React from 'react';

function Meme() {
  const [memes, setMemes] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/1g8my4.jpg"
  });

  const [memesData, setMemesData] = React.useState([])

  function handleChange(event) {
    const {name, value} = event.target;

    setMemes(prevMemes => ({
      ...prevMemes,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();

    const i = Math.floor(Math.random() * memesData.length + 1);

    setMemes(prevMemes => ({
      ...prevMemes,
      url: memesData[i].url
    }))
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
          const memeArray = data.data.memes;
          setMemesData(memeArray);
        })
  }, [])

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="input-container flex">
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={memes.topText}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={memes.bottomText}
            onChange={handleChange}
          />
        </div>

        <button>Get a new meme image</button>
      </form>

      <div className="meme-container">
        <p className="top-text">{memes.topText}</p>
        <p className="bottom-text">{memes.bottomText}</p>
        <img src={memes.url} alt="meme" className="meme-img" />
      </div>
    </main>
  );  
}

export default Meme;
