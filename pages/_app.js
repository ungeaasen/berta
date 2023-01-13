import '../styles/globals.scss'
import '../styles/forms.scss'
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../components/gtag";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey="6Lc45_QjAAAAAA7nvPOqA0CT0wKdRNdMdMP_uo3Y"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
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
      <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </>
  )
}

export default MyApp
