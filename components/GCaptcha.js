import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function GCap() {
    const _reCAPTCHA_site_key = process.env.reCAPTCHA_site_key;
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js"
        window.onSubmit = () => alert("reCaptcha submit")
        document.body.appendChild(script)
    }, [])

    return (
    <div 
        className="g-recaptcha"
        data-sitekey={_reCAPTCHA_site_key}
    ></div>
    )
}


export default GCap;

