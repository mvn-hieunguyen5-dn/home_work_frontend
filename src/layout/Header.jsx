import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <header className="page-header">
      <div className="container flex">
        <ul className="header-menu flex">
          <li>
            <a href="s">demo</a>
          </li>
          <li>
            <a href="s">shop</a>
          </li>
          <li>
            <a href="s">product</a>
          </li>
          <li>
            <a href="s">lookbook</a>
          </li>
          <li>
            <a href="s">blog</a>
          </li>
        </ul>
        <a href="s" className="logo flex">
          <img src={require("../picture/head-logo-white.png")} alt="" />
        </a>
        <ul className="header-action flex">
          <li>
            <button>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
