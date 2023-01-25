import React, { useState, useEffect } from "react";
//import GCap from "./GCaptcha";

const FormMultiple = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "{entryOne}": '',
    "{entryTwo}": ''
  });

  const entryOne = "entry.892264060";
  const entryTwo = "entry.828730649";

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js"
        window.onSubmit = () => alert("reCaptcha submit")
        document.body.appendChild(script)
      }, [])

  function validateRecaptcha(e) {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        e.preventDefault();
        setShow(true);
        return false;
    } else {
        e.preventDefault();
        handleSubmit(e);
        return true;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1Z0ATcmuNeDrZVTeXpCUUz3mfJcH_geJBdRvbrTnk7vprKA/formResponse?
		${entryOne}=${formData[{entryOne}]}&
        ${entryTwo}=${formData[{entryTwo}]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
        <div className="radioForm">
            <div className="radioFormContainer">
                {submit ? (
                <div className="afterForm">Takk for interessen. Du vil snart motta vår rapport!</div>
                ) : (
                    <form onSubmit={handleSubmit} target="_self">
                        <h3>Vi har gjort en undersøkelse om internkommunikasjon i norske virksomheter, og lært en hel masse. 
                            Skriv inn dine opplysninger for å få tilsendt rapporten helt gratis.
                        </h3>
                        <hr></hr>
                        <fieldset>
                            <label htmlFor={entryOne}>Skriv epost her:</label>
                            <input
                                required
                                type="email"
                                name={entryOne}
                                onChange={handleInputData({entryOne})}
                                value={formData[{entryOne}]}
                                autoComplete="false"
                            />
                        </fieldset>
                        <h3>Spørsmål 1</h3>
                        <div className="buttonsbox">
                            <div className="buttonsboxContainer">
                                <fieldset className="buttons">
                                    <div className="enig">Enig</div>
                                    <input
                                        required
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="0"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="1"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="2"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="3"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="4"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="5"
                                        autoComplete="false"
                                    />
                                    
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData()}
                                        value="6"
                                        autoComplete="false"
                                    />
                                    <div className="ikkeEnig">Ikke enig</div>
                                </fieldset>
                            </div>
                        </div>
                        <div 
                            className="g-recaptcha"
                            data-sitekey="6Lec4fQjAAAAAF_uRfPBYrCOXa1advU_tL0ALjhu"
                          ></div>
                        <button type="submit">Få gratis rapport!</button>
                    </form>
                )}
            </div>
        </div>
  );
};

export default FormMultiple;
