

function TextField({entry, formData, setFormData}) {
    const handleInputData = (input) => (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [input]: value
        }));
      };
    return (
    <fieldset>
        <label htmlFor={entry}>Epost:</label>
        <input
            required
            id={entry}
            type="email"
            name={entry}
            onChange={handleInputData(`${entry}`)}
            value={formData[{entry}]}
        />
    </fieldset>
    )
}

export default TextField;