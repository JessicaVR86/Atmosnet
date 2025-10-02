function Form(props) {
  return (
    <>

     <div>
          <label>
            Add profile photo
            <input
              type="file"
              className="hidden_input"
              onChange={props.handleInputPhoto}
            />
          </label>
        </div>

        <div>
          <label >
            Add button image
            <input
              type="file"
              className="hidden_input"
              onChange={props.handleInputImage}
            />
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name your button"
            onChange={props.handleBtnName}
          />
          <input
            type="text"
            placeholder="Add your link"
            onChange={props.handleLinkName}
          />
          <button className="create" onClick={props.handleAddLinks}>
            {" "}
            Create your link
          </button>
        </div>
    </>
  );
}

export default Form;