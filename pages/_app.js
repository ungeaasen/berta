import '../styles/globals.scss';
import '../styles/forms.scss';
import Script from 'next/script';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import  { useState, useEffect } from "react";
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  const [initGtag, setInitGtag] = useState(false);

/*
  const handleAcceptCookie = () => {
    console.log("den kjørte før : " + getCookieConsentValue() )
    //setInitGtag(true);
    //if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      
      //initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    //}
  };*/

  const initGA = (id) => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize(id);
    }
  };
  const handleAcceptCookie = () => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);
  return (
    <>{/*
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SEPDQV6SSG"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            gtag('config', 'G-SEPDQV6SSG', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        */ }



  <Script>  
    </Script>
        <CookieConsent 
          declineButtonText="Nei takk!"
          buttonText="Den er god!" 	
          declineButtonClasses="declineButton"
          disableStyles={true}
          debug={true}
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          Denne siden bruker cookies.<br></br> <br></br>
          Berta bruker google analytics for å se hvor brukerne våre er fra.<br></br>
          Vi deler aldri informasjon om brukerne våre.
      </CookieConsent>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
