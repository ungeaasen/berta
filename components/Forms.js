import React, { useState } from "react";
//import Buttons from "./Buttons";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1772277633": "",
	  "entry.828730649":  ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/d/1y7reHgxOP22lYBlZuvtleHsTyqYN8MB9aec4izyd8AA/formResponse?
		entry.1772277633=${formData["entry.1772277633"]}
		&entry.828730649=${formData["entry.828730649"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="formWrapper">
        <div className="contactForm">
            <div className="contactFormWrapper">
                <div className="formcontact">
                    {submit ? (
                    <div className="afterForm">Takk for interessen!!</div>
                    ) : (
                    <form onSubmit={handleSubmit} target="_self">
                        <div className="formText">
                            <p className="boldText"><strong>Vi har gjort en undersøkelse om internkommunikasjon i norske virksomheter, og lært en hel masse.</strong></p>
                            <p>Skriv inn dine opplysninger for å få tilsendt rapporten helt gratis.</p>
                        </div>
                        <hr></hr>
                            <fieldset>
                              <label htmlFor="entry.1772277633">Epost:</label>
                              <input
                                required
                                id="entry.1772277633"
                                type="text"
                                name="entry.1772277633"
                                onChange={handleInputData("entry.1772277633")}
                                value={formData["entry.1772277633"]}
                              />
                            </fieldset>
                        
                        <button type="submit">Send meg gratis rapport!</button>
                    </form>

                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Form;
