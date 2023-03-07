

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
      <label htmlFor={entry}>Svar:</label>
      <textarea
          required
          id={entry}
          type="text"
          rows="3" 
          cols="10"
          name={entry}
          onChange={handleInputData(`${entry}`)}
          value={formData[{entry}]}
      />
  </fieldset>
  )
}

export default TextField;