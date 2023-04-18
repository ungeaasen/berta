
import Image from 'next/image';
import sanityCLient from 'lib/sanity'
import imageUrlBuilder from '@sanity/image-url';


function AuthorIntro ({ title, ingress, image }) {
  const builder = imageUrlBuilder(sanityCLient);
    
  function urlFor(source) {
    return builder.image(source)
  }
  return (
    <>
      <div className="heading">
        <h1>Hei!</h1>
      </div>
      <div className='image'>
        <Image src={urlFor(image).url()} alt="" height={1024} width={1400} />
      </div>
      
      <div className='headingIntro'>
        <p>
          Berta er i full sving med å bygge en rå nettside. Men før den er klar, vil vi gi deg et kjapt innblikk i hva vi kan tilby deg og din virksomhet.
          <br></br>
          <br></br>
          La oss sette til side dyre byråer og lange beslutningsprosesser. Med Berta ved deres side kan dere spare tid og penger ved å ta kreative prosjekter i egne hender. 
          <br></br>
          <br></br>
          Vi er eksperter på å hjelpe virksomheter med å gjennomføre kreative prosjekter som reklamefilmer, events, employer branding og messestands selv. 
          <br></br>
          <br></br>
          Når dere bruker interne ressurser til prosjektledelse og gjennomføring, kan dere øke kvaliteten på uttakene. Eller bruke mindre penger på dem. Som kreative rådgivere støtter Berta virksomheter i å ta kontroll over egne kreative prosjekter som reklamefilmer, events, employer branding og messestands. 
          Vi er med fra starten og veileder dere gjennom hele prosessen, mens vi tilbyr nødvendig nettverk og ressurser for en vellykket gjennomføring.
          <br></br>
          <br></br>
          Vi tror at alle har kreativ kraft i seg. Berta hjelper dere med å finne deres unike kreative egenskaper og sette dem i arbeid. Gjennom vår metode og veiledning får dere inspirasjon og skaper løsninger som overrasker både dere selv og andre.
          <br></br>
          <br></br>
          Det handler ikke bare om å spare penger. Det er også en mulighet til å tilby medarbeiderne variasjon og engasjere dem i prosjekter som skaper stolthet. Dette bidrar til økt motivasjon og gir rom for å bygge på andre ferdigheter hos de ansatte.
          <br></br>
          <br></br>
          Hver gang dere samarbeider med Berta, blir dere mer erfarne og dyktige i å løse praktiske problemer og se muligheter i kreative prosesser. Vi hjelper dere med å bygge selvtillit og mestre nye ferdigheter, slik at dere kan ta fatt på fremtidige prosjekter med kompetanse, kreativitet og handlekraft.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Hilsen Bjørn 
          <br></br>
          kreativ rådgiver i Berta
        </p>
          
        </div>
    </>
  )
}

export default AuthorIntro;

