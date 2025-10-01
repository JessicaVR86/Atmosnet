import "../styles/App.scss";
import { useState } from "react";




function App() {
  const [ photo, setPhoto ] = useState( "" );
  const [ image, setImage ] = useState( "" );
  const [ btnName, setBtnName ] = useState( "" );
  const [ linkName, setLinkName ] = useState( "" );
  const [ listLinks, setListLinks ] = useState( [] );




const handleInputPhoto = (ev) =>{

  const photoFile = ev.target.files[0];
  if (photoFile){
    const profilePhoto = URL.createObjectURL(photoFile);
    setPhoto(profilePhoto)
  }
};

const handleInputImage = (ev) =>{

  const imageBtn = ev.target.files[0];
  if (imageBtn){
    const picBtn = URL.createObjectURL(picBtn);
    setPhoto(picBtn)
  }
};




  return (
    <>
      <header>
        <h1>Atmosnet</h1>
        <h3>One moment. One link. Let's stay close.</h3>
      </header>

      <main>
        <div>
          <label>
            Add profile photo
           <input type="file" className="hidden_input"   onChange={handleInputPhoto} />
          </label>
        </div>

        <div>
          <label htmlFor="">
            Add button image
            <input type="file"   className="hidden_input"  onChange={handleInputImage} />
          </label>
        </div>
        <div>
          <input type="text" placeholder="Name your button" />
          <input type="text" placeholder="Add your link" />
          <button className="create">Create your link</button>
        </div>
      </main>

      <section>
        <div>
          <img />
        </div>
        <div>
          <a href="">
            <img />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
