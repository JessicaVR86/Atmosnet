import "../styles/App.scss";
import { useState } from "react";




function App() {
  const [ photo, setPhoto ] = useState( "" );
  const [ image, setImage ] = useState( "" );
  const [ btnName, setBtnName ] = useState( "" );
  const [ linkName, setLinkName ] = useState( "" );
  const [ listLinks, setListLinks ] = useState( [] );









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
            <input type="file" />
          </label>
        </div>

        <div>
          <label htmlFor="">
            Add button image
            <input type="file" />
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
          <img/> 
        </div>
        <div>
          <a href="">
            <img   />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
