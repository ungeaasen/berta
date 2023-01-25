import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const _reCAPTCHA_site_key = "6Lec4fQjAAAAAF_uRfPBYrCOXa1advU_tL0ALjhu";

function GCap() {
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
            console.log("Response " + response)
            return false;
        } else {
            e.preventDefault();
            handleSubmit(e);
            return true;
        }
    }
}

export default GCap;

