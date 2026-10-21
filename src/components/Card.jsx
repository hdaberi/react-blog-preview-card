import imgUrl from "../assets/images/illustration-article.svg";
import publisherImg from "../assets/images/image-avatar.webp";
function Card() {
  return (
    <div className="blog-card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default Card;

function CardHeader() {
  return (
    <div className="card-header">
      <img className="blog-card__img" src={imgUrl} alt="blog card image" />
      <div className="card-header_info">
        <ul className="card-tags">
          <li className="card-tags__item">Learning</li>
        </ul>
        <span className="card-published">
          {`Published ${new Date().toLocaleString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}`}
        </span>
      </div>
    </div>
  );
}

function CardBody() {
  return (
    <div className="card-body">
      <h1 className="card-body__title">HTML & CSS foundations</h1>
      <p className="decription">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
}

function CardFooter() {
  return (
    <div className="card-footer">
      <div className="publisher-info">
        <img
          src={publisherImg}
          alt="publisher avatar image"
          className="avatar-img"
        />
        <span className="publisher-userName">Greg Hooper</span>
      </div>
    </div>
  );
}
