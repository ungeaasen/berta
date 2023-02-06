import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Buttons from "./RadioButtons";
import TextField from "./TextField";
import GCap from "./GCaptcha";

const _reCAPTCHA_site_key = process.env.reCAPTCHA_site_key;

function FormsM(props) {
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "{entryOne}": "",
	  "{entryTwo}":  "",
    "{entryThree}":  ""
  });

  const entryOne = "entry.1772277633";
  const entryTwo = "entry.828730649";
  const entryThree = "entry.1880127155";
  const entryFour = "entry.333";
  const entryFive = "entry.444";
  const entrySix = "entry.555";

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
    let url = `https://docs.google.com/forms/d/1y7reHgxOP22lYBlZuvtleHsTyqYN8MB9aec4izyd8AA/formResponse?${entryOne}=${formData[`${entryOne}`]}&${entryTwo}=${formData[`${entryTwo}`]}&${entryThree}=${formData[`${entryThree}`]}`;
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
                  <div className="afterForm"><h3>Takk for din interesse! Vi sender deg rapporten så snart den er ferdig. Visste du at : 1fact 2 fact 3 fact</h3> </div>
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
                      <TextField entry={entryOne} formData={formData} setFormData={setFormData}/>
                      <h3>Spørsmål 1</h3>
                        <div className="buttonsbox">
                          <Buttons entry={entryTwo} formData={formData} setFormData={setFormData} />
                        </div>
                        <h3>Spørsmål 2</h3>
                        <div className="buttonsbox">
                          <Buttons entry={entryThree} formData={formData} setFormData={setFormData} />
                        </div>
                        <h3>Spørsmål 3</h3>
                        <div className="buttonsbox">
                          <Buttons entry={entryFour} formData={formData} setFormData={setFormData} />
                        </div>
                        <h3>Spørsmål 4</h3>
                        <div className="buttonsbox">
                          <Buttons entry={entryFive} formData={formData} setFormData={setFormData} />
                        </div>
                        <h3>Spørsmål 5</h3>
                        <div className="buttonsbox">
                          <Buttons entry={entrySix} formData={formData} setFormData={setFormData} />
                        </div>
                      <GCap />
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
