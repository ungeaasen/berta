import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Buttons from "./RadioButtons";
import TextField from "./TextField";
import GCap from "./GCaptcha";
import SanityBlockContent from "@sanity/block-content-to-react";

function FormsM({ surveys }) {
  const [show, setShow] = useState(false);
  const [showAward, setShowAward] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({});

  const myRef = useRef(null)

  let entryObj = {}

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }

  if(Object.keys(entryObj).length === 0) {
    surveys.map(sr =>
      sr.survey.map(s => {
      entryObj[s.entry] = "";
      })
    );
  }

  const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEx1nVirOWry1YqENOR5JB6TTL7sEe8jgFh2PScb_pUxouIw";
  let siteUrl = `${url}/formResponse?`;
  
  Object.entries(formData).map(([key, value], i, arr) => {
    if (i !== arr.length - 1) {
      siteUrl += key + "=" + value + '&'
    } else {
      siteUrl += key + "=" + value
    }
  })

  useEffect(() => {
    if(myRef && submit) {
      myRef.current.scrollIntoView()
      console.log("MYREFSS" + myRef )
    }
  }, [myRef])
      

  function validateRecaptcha(e) {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        e.preventDefault();
        setShow(true);
        return false;
    } else {
        e.preventDefault();
        handleSubmit(e);
        setShowAward(true);
        myRef.current.scrollIntoView();
        return true;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
   
    const res = await fetch(siteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }

  return (
    <div ref={myRef}>
    {surveys.map(survey =>
        <div key={survey.title} className="form">
          <div className="formWrapper">
            {submit ? (
              <div className="afterForm">
                <div className="surveyAward">
                  <SanityBlockContent blocks={survey.surveyAwardText} serializers={serializers} />
                </div>
              </div>
              ) : (
              <form 
                  onSubmit={validateRecaptcha} 
                  target="_self"
                >
                <div className="formText">
                  <span className="formTitle"><h3>Ukas undersøkelse:</h3></span>
                  <div className="boldText">
                    <h4>{survey.title}</h4>
                    <span className="underlineMedium"></span>
                  </div>
                  {console.log(survey)}
                  <div>
                    <p>{survey.introText}</p>
                 </div>
                </div>
                {survey.survey.map(srv => 
                  <div key={srv.entry} >
                    <div className="questionText">{srv.questionText}</div>
                    <Buttons entry={srv.entry} formData={formData} setFormData={setFormData} />
                  </div>
                )} 
                <GCap />
                <button type="submit">SEND INN!</button>
              </form>
            )}
          </div>
          <Modal show={show} text="Vennligst bekreft at du ikke er helt robot :)" notShowing={setShow} onClose={() => {setShow(false)}} />
          <Modal showAward={showAward} text="Takk for at du svarte! Vi sender deg snart en rapport! :)" notShowing={setShowAward} onClose={() => {setShowAward(false)}} />
        </div>
      )}
    </div>
  );
};

export default FormsM;

