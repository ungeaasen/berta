

function AuthorIntro ({ title, ingress }) {
  return (
    <div className="ingress">
      <div className="intro">
          <h1>{title}</h1>
          <span className="underlineBig"></span>
      </div>
      <div className='introTekst'>
        <p>{ingress}</p>
      </div>
    </div>
  )
}

export default AuthorIntro;

