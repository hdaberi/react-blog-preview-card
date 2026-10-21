import imgUrl from "../assets/images/illustration-article.svg";
import publisherImg from "../assets/images/image-avatar.webp";
function Card() {
  return (
    <div className="blog-card">
      <div className="card-header">
        <img src={imgUrl} alt="blog card image" />
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
      <div className="card-body">
        <h1 className="card-body__title">HTML & CSS foundations</h1>
        <p className="edcription">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
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
    </div>
  );
}

export default Card;
