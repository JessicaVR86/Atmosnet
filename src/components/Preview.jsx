function Preview(props) {
  return (
    <>

            <div>
          {props.photo && (
            <img src={props.photo} alt="foto de perfil" className="myPhoto" />
          )}
        </div>
        <div className="linkList">
          {props.listLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link_btn"
            >
              {link.picture && (
                <img
                  src={link.picture}
                  alt={link.btn}
                  className="btn_picture"
                />
              )}

              <p className="link_btn">{link.btn}</p>
            </a>
          ))}
        </div>
    </>
  );
}

export default Preview;