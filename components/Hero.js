import Image from 'next/image';


export default function Hero({ content, files }) {
    {console.log("frontpage : " + content.heroTitle )}
    return (
        <div className='hero'>
        <a href={`${files[0].guideDownload}?dl=`}>
          <span className='heroLink'><h3>{content[0].heroTitle}</h3>
          {content[0].heroIntro}
          </span>
          <span className='img'>
          <Image src="/bookOne.svg" alt="SVG as an image" width={150} height={150} />
          </span>
         </a>
      </div>
    )
}