import "../styles/App.scss";
import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";

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
      <header>
        <h1>Atmosnet</h1>
        <h3>One moment. One link. Let's stay close.</h3>
      </header>

      <main>
        <Form
          handleInputPhoto={handleInputPhoto}
          handleInputImage={handleInputImage}
          handleBtnName={handleBtnName}
          handleLinkName={handleLinkName}
          handleAddLinks={handleAddLinks}
        />
      </main>

      <section>
<Preview  
photo={photo}
listLinks={listLinks}

/>
      </section>
    </>
  );
}

export default App;
