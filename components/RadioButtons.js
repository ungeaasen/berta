

const Buttons = ({entry, formData, setFormData}) => {

    const handleInputData = (input) => (e) => {
        const { value } = e.target;
        console.log("entry " + entry + "formData " + formData )
        setFormData((prevState) => ({
          ...prevState,
          [input]: value
        }));
      };

    return (
        <fieldset className="buttons">
            <div className="enig">Enig</div>
            <input
                required
                type="radio"
                id={entry}
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="0"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <input
                type="radio"
                id={entry}
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="1"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <input
                type="radio"
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="2"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <input
                type="radio"
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="3"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <input
                type="radio"
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="4"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <input
                type="radio"
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="5"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <input
                type="radio"
                name={entry}
                onChange={handleInputData(`${entry}`)}
                value="6"
                autoComplete="false"
            />
            <label htmlFor={entry}></label>
            <div className="ikkeEnig">Ikke enig</div>
        </fieldset>
    )

}

export default Buttons;