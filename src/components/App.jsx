import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [photo, setPhoto] = useState("");
  const [image, setImage] = useState("");
  const [btnName, setBtnName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [listLinks, setListLinks] = useState([]);

  const handleInputPhoto = (ev) => {
    const photoFile = ev.target.files[0];
    if (photoFile) {
      const profilePhoto = URL.createObjectURL(photoFile);
      setPhoto(profilePhoto);
    }
  };

  const handleInputImage = (ev) => {
    const imageBtn = ev.target.files[0];
    if (imageBtn) {
      const picBtn = URL.createObjectURL(imageBtn);
      setImage(picBtn);
    }
  };

  const handleBtnName = (ev) => {
    setBtnName(ev.target.value);
  };

  const handleLinkName = (ev) => {
    setLinkName(ev.target.value);
  };

  const handleAddLinks = () => {
    if (btnName && linkName) {
      setListLinks([
        ...listLinks,
        { picture: image, btn: btnName, url: linkName },
      ]);
      setImage("");
      setBtnName("");
      setLinkName("");
    }
  };

  return (
    <>
      <header >
        <h1>Atmosnet</h1>
        <h3>One moment. One link. Let's stay close.</h3>
      </header>

      <main>
        <div>
          <label>
            Add profile photo
            <input
              type="file"
              className="hidden_input"
              onChange={handleInputPhoto}
            />
          </label>
        </div>

        <div>
          <label >
            Add button image
            <input
              type="file"
              className="hidden_input"
              onChange={handleInputImage}
            />
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name your button"
            onChange={handleBtnName}
          />
          <input
            type="text"
            placeholder="Add your link"
            onChange={handleLinkName}
          />
          <button className="create" onClick={handleAddLinks}>
            {" "}
            Create your link
          </button>
        </div>
      </main>

      <section>
        <div>
          {photo && (
            <img src={photo} alt="foto de perfil" className="myPhoto" />
          )}
        </div>
        <div className="linkList">
          {listLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link_btn"
            >
              {link.picture && <img src={link.picture} alt={link.btn} className="btn_picture"/>}

             <p className="link_btn">{link.btn}</p> 
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
