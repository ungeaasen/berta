import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const _reCAPTCHA_site_key = process.env.reCAPTCHA_site_key;

function FormsM(props) {
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "{entryOne}": "",
	  "{entryTwo}":  ""
  });

  const entryOne = "entry.1772277633";
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
    let url = `https://docs.google.com/forms/d/1y7reHgxOP22lYBlZuvtleHsTyqYN8MB9aec4izyd8AA/formResponse?
		entry.1772277633=${formData["entry.1772277633"]}
		&entry.828730649=${formData["entry.828730649"]}`;
    console.log("URL" + url)
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
                <div className="formcontact" >
                    {submit ? (
                    <div className="afterForm">Vi sender deg rapporten så snart den ferdig!</div>
                    ) : (
                    <form 
                      onSubmit={validateRecaptcha} 
                      target="_self"
                    >
                      <div className="formText">
                          <p className="boldText">
                              Vi har gjort en undersøkelse om internkommunikasjon
                              i norske virksomheter og lært en hel masse.
                          </p>
                          <p>
                            Gi oss din epost, så vi kan sende deg rapporten når den ferdig! 
                          </p>
                      </div>
                      <hr></hr>
                      <fieldset >
                        <label htmlFor={entryOne}>Epost:</label>
                        <input
                          required
                          id={entryOne}
                          type="email"
                          name={entryOne}
                          onChange={handleInputData(`${entryOne}`)}
                          value={formData[{entryOne}]}
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
                                        id={entryTwo}
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="0"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        id={entryTwo}
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="1"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="2"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="3"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="4"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="5"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <input
                                        type="radio"
                                        name={entryTwo}
                                        onChange={handleInputData(`${entryTwo}`)}
                                        value="6"
                                        autoComplete="false"
                                    />
                                    <label htmlFor={entryTwo}></label>
                                    <div className="ikkeEnig">Ikke enig</div>
                                </fieldset>
                            </div>
                        </div>
                      <div 
                        className="g-recaptcha"
                        data-sitekey="6Lec4fQjAAAAAF_uRfPBYrCOXa1advU_tL0ALjhu"
                      ></div>
                      <button type="submit">Send meg gratis rapport!</button>
                    </form>
                  )}
                </div>
                <Modal show={show} notShowing={setShow} onClose={() => {setShow(false)}} />
              </div>
        </div>
    </div>
  );
};

export default FormsM;
