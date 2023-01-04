import Image from 'next/image'

const CardItem = () => {
  return (
    <div className={`fj-card`}>
      <div className="card-body-wrapper">
        <div
          className="d-flex flex-row">
          <Image
            src={'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
          <div>
            <div className="font-weight-bold mb-1">Placeholder Author</div>
            <div className="card-date">Placeholder Date</div>
          </div>
        </div>
        <div className="view overlay">

        </div>
        <div>
          <div className="card-main-title">Placeholder Title</div>
          <div>Placehodler Subtitle</div>
        </div>
      </div>
      <a className="card-button">
        Read More
      </a>
    </div>
  )
}

export default CardItem;