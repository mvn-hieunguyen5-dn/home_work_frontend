import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function LightingCollection() {
  return (
    <div className="container">
      <div className="cover" href="">
        <h2>interior decorations</h2>
        <div className="liner"></div>
        <p>
          <i>looking for furniture for your living room</i>
        </p>
        <br />
        <a className="black-button" href=".">
          shop now <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
        </a>
      </div>
      <ul className="product-line">
        <li className="col-3">
          <a href=".">
            <img
              src="https://themes.the4.co/kalles-html/assets/images/home-decor/cat-banner-01.jpg"
              alt=""
            />
            <div className="description top white">
              <h3 className="line-name">lighting collection</h3>
              <span className="arrow">Expoler</span>
            </div>
          </a>
        </li>
        <li className="col-3">
          <a href=".">
            <img
              src="https://themes.the4.co/kalles-html/assets/images/home-decor/cat-banner-02.jpg"
              alt=""
            />
            <div className="description bottom black">
              <h3 className="line-name">Audio decor</h3>
              <span className="arrow">View collection</span>
            </div>
          </a>
        </li>
        <li className="col-3">
          <a href=".">
            <img
              src="https://themes.the4.co/kalles-html/assets/images/home-decor/cat-banner-03.jpg"
              alt=""
            />
            <div className="description top black">
              <h3 className="line-name">new arrivals</h3>
              <span className="arrow">shop now</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default LightingCollection;
