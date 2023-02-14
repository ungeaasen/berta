import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Buttons from "./RadioButtons";
import TextField from "./TextField";
import GCap from "./GCaptcha";

const _reCAPTCHA_site_key = process.env.reCAPTCHA_site_key;

function FormsM({ surveys }) {
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
 /* const [formData, setFormData] = useState({
    "{entryMail}": "",
    "{entryOne}": "",
	  "{entryTwo}":  "",
    "{entryThree}":  "",
    "{entryFour}":  "",
    "{entryFive}":  "",
    "{entrySix}":  "",
    "{entrySeven}":  "",
    "{entryEight}":  "",
  });
 /*
const entryOneString = "Jeg opplever vanligvis at å svare på undersøkelser fører til faktiske endringer i ettertid.";
const entryTwoString = "Jeg synes at å svare på undersøkelser er bortkastet tid.";
const entryThreeString = "Undersøkelser bærer ofte preg av å ikke stille de viktige spørsmålene."; 
const entryFourString = "Jeg svarer ærlig på undersøkelser i regi av arbeidsplassen.";
const entryFiveString = "Jeg har tenkt på at ledelsen unngår å stille spørsmål som setter dem i dårlig lys.";
const entrySixString = "Jeg føler deg sett og hørt gjennom å få svare på medarbeiderundersøkelser. ";
const entrySevenString = "Undersøkelser er vanligvis for lange.";
*/
let entryObj = {}


if(Object.keys(entryObj).length === 0) {
  surveys.map(sr =>
    sr.survey.map(s => {
     console.log(" truse before " + (Object.keys(entryObj).length === 0))
     entryObj[s.entry] = "";
     console.log(" yes " + Object.entries(entryObj))
     
    })
  );
}


//const url = "https://docs.google.com/forms/d/1i6t7aZvtbbK1n8jzRDECGHSzUkRg-s9GNAoGFKCpdCw";
  const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEx1nVirOWry1YqENOR5JB6TTL7sEe8jgFh2PScb_pUxouIw";

  const [formData, setFormData] = useState({entryObj});

  let siteUrl = `${url}/formResponse?&`;
  console.log(" formdata " + Object.entries(formData))
/*
  formData(...setFormData.map((entry) => {

      //entry.entry = 'Michael';
      console.log("entry666" + entry)
    return entry;
  }));
  */
 


  
/*
  const entryMail = "entry.562939875";



  const entryOne = "entry.936751181";
  const entryTwo = "entry.967661064";
  const entryThree = "entry.1701958794";
  const entryFour = "entry.793576337";
  const entryFive = "entry.1173528585";
  const entrySix = "entry.315794520";
  const entrySeven = "entry.1731836643";
*/
  //let siteUrl = `${url}/formResponse?${entryMail}=${formData[`${entryMail}`]}&${entryOne}=${formData[`${entryOne}`]}&${entryTwo}=${formData[`${entryTwo}`]}&${entryThree}=${formData[`${entryThree}`]}&${entryFour}=${formData[`${entryFour}`]}&${entryFive}=${formData[`${entryFive}`]}&${entrySix}=${formData[`${entrySix}`]}&${entrySeven}=${formData[`${entrySeven}`]}`;
  


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
    //let url = `https://docs.google.com/forms/d/1y7reHgxOP22lYBlZuvtleHsTyqYN8MB9aec4izyd8AA/formResponse?${entryOne}=${formData[`${entryOne}`]}&${entryTwo}=${formData[`${entryTwo}`]}&${entryThree}=${formData[`${entryThree}`]}`;
    const res = await fetch(siteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }

  return (
    <div>
    {surveys.map(survey =>
        <div key={survey.title} className="form">
          <div className="formWrapper" >
            {submit ? (
              <div className="afterForm">
                <h3>
                  Takk for din interresse! Berta skaper en positiv feedback-loop mellom medarbeidere og ledelse. Vi gjetter aldri frem løsninger, alle våre leveranser er datadrevet og frie for gjetning og antakelser. 
                  Vi har spurt før vi gir svar.
                </h3> 
              </div>
              ) : (
              <form 
                  onSubmit={validateRecaptcha} 
                  target="_self"
                >
                <div className="formText">
                  <div className="boldText">
                    <h3>{survey.title}</h3>
                  </div>
                  <div>
                    <h4>{survey.introText}</h4>
                 </div>
                </div>
                {survey.survey.map(srv => 
                  <div key={srv.entry} >
                    <div >{srv.questionText}</div>
                    <Buttons entry={srv.entry} formData={formData} setFormData={setFormData} />
                  </div>
                )} 
                <GCap />
                <button type="submit">SEND INN!</button>
              </form>
            )}
          </div>
            <Modal show={show} notShowing={setShow} onClose={() => {setShow(false)}} />
        </div>
      )}
    </div>
    /*
          <div className="form">
              <div className="formWrapper" >
                  {submit ? (
                  <div className="afterForm">
                    <h3>
                      Takk for din interresse! Berta skaper en positiv feedback-loop mellom medarbeidere og ledelse. Vi gjetter aldri frem løsninger, alle våre leveranser er datadrevet og frie for gjetning og antakelser. 
                      Vi har spurt før vi gir svar.
                    </h3> 
                  </div>
                  ) : (
                    <form 
                        onSubmit={validateRecaptcha} 
                        target="_self"
                      >
                      <div className="formText">
                        <p className="boldText">
                          BLI MED PÅ UKENTLIGE UNDERSØKELSER OG MOTTA SPENNENDE INNHOLD SOM BELØNNING.
                        </p>
                        <p>
                          Ukens Undersøkelse har som formål å stille spørsmål om internkommunikasjon fra et skråblikkperspektiv. Spørsmålene vi stiller, er designet med den hensikt å stille spørsmålene du vanligvis ikke får i en medarbeiderundersøkelse. 
                          Når du svarer på undersøkelsen, vil du få tilgang til lærerikt innhold tilpasset ukens tema. Vi sender deg resultatet med en kort rapport om hovedfunn når undersøkelsen er ferdig. Hver uke inviterer vi en person med høy kompetanse innenfor en gren av internkommunikasjonsfaget til å lage undersøkelsen og innholdet. Denne UU er laget av Bjørn Glestad, og temaet er “Undersøkelse Om Undersøkelser”.
                        </p>
                      </div>
                      <hr></hr>
                      <TextField entry={entryMail} formData={formData} setFormData={setFormData}/>
                      <h3>{entryOneString}</h3>
                        <Buttons entry={entryOne} formData={formData} setFormData={setFormData} />
                        <h3>{entryTwoString}</h3>
                          <Buttons entry={entryTwo} formData={formData} setFormData={setFormData} />
                        <h3>{entryThreeString}</h3>
                          <Buttons entry={entryThree} formData={formData} setFormData={setFormData} />
                        <h3>{entryFourString}</h3>
                          <Buttons entry={entryFour} formData={formData} setFormData={setFormData} />
                        <h3>{entryFiveString}</h3>
                          <Buttons entry={entryFive} formData={formData} setFormData={setFormData} />
                        <h3>{entrySixString}</h3>
                          <Buttons entry={entrySix} formData={formData} setFormData={setFormData} />
                        <h3>{entrySevenString}</h3>
                          <Buttons entry={entrySeven} formData={formData} setFormData={setFormData} />
                      <GCap />
                      <button type="submit">SEND INN!</button>
                    </form>
                  )}
              </div>

              <Modal show={show} notShowing={setShow} onClose={() => {setShow(false)}} />
          </div>

          */
  );
};

export default FormsM;

