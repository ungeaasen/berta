import Image from 'next/image';
import SanityBlockContent from "@sanity/block-content-to-react";
import sanityCLient from 'lib/sanity'
import imageUrlBuilder from '@sanity/image-url';

export default function Card({ cards }) {

    const builder = imageUrlBuilder(sanityCLient);
    
    function urlFor(source) {
      return builder.image(source)
    }
    const serializers = {
        types: {
          code: (props) => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          ),
        },
      }
    return (
        <div className="cards">
            {cards.map(card =>
                <div key={card.title} className="cardItem">
                    <span className="top"> 
                        <span className="icon">
                        <Image src={urlFor(card.image).url()} alt="" width={35} height={35} />
                        <span className='title'>{card.description}</span> 
                        </span>
                    </span>
                    <div className='cardContent'>
                        <span className="cardName">
                            <span className='cardTitle'>{card.title} </span>
                        </span>
                        <SanityBlockContent blocks={ card.content } serializers={serializers} />
                        <span className='cardTitle'><Image className="cardIcon" src="/egg.svg" alt="SVG as an image" width={23} height={23} /> Oppskrift </span>
                        <span>  <Image src="/logoBGrnPunkt1.svg" alt="" width={35} height={35} /></span>
                    </div>
                </div>
            )}
        </div>
    )
}