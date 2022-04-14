import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
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
            <img src={require("./picture/head-logo-white.png")} alt="" />
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
      <main className="page-main">
        <section className="section-page-introduction ">
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
                  <img src="/picture/cat-banner-01.jpg" alt="" />
                  <div className="description top white">
                    <h3 className="line-name">lighting collection</h3>
                    <span className="arrow">Expoler</span>
                  </div>
                </a>
              </li>
              <li className="col-3">
                <a href=".">
                  <img src="/picture/cat-banner-02.jpg" alt="" />
                  <div className="description bottom black">
                    <h3 className="line-name">Audio decor</h3>
                    <span className="arrow">View collection</span>
                  </div>
                </a>
              </li>
              <li className="col-3">
                <a href=".">
                  <img src="/picture/cat-banner-03.jpg" alt="" />
                  <div className="description top black">
                    <h3 className="line-name">new arrivals</h3>
                    <span className="arrow">shop now</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-best-selling">
          <div className="container">
            <h3>best selling products</h3>
            {/* <div className="liner" style="background-color: black;"></div> */}
            <p className="script">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor!
            </p>
            <ul className="product-line wrap">
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
              <li className="product-item col-6">
                <a href=".">
                  <div className="product-img">
                    <img src={require("./picture/product.jpg")} alt="" />
                  </div>
                  <p className="product-name">Productname</p>
                  <p className="product-price">$3.33</p>
                </a>
              </li>
            </ul>
            <a className="black-button" href=".">
              Load more <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
            </a>
          </div>
        </section>
        <section className="section-blogs">
          <div className="container">
            <h3>latest blog posts </h3>
            <p>
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor!
            </p>
            <ul className="blog-list">
              <li className="blog">
                <a href=".">
                  <img
                    src={require("./picture/blog-01.jpg")}
                    className="blogimg"
                    alt=""
                  />
                  <h4>The Kozmophone Is a Holographic, Bluetooth Turntable</h4>
                  <p>
                    By <strong>admin</strong> on{" "}
                    <strong>February 21, 2020</strong>{" "}
                  </p>
                  <p>
                    Imagine a turntable with a portable and detachable
                    phonograph-style horn speaker and a miniature.{" "}
                  </p>
                </a>
              </li>
              <li className="blog">
                <a href=".">
                  <img
                    src={require("./picture/blog-02.jpg")}
                    className="blogimg"
                    alt=""
                  />
                  <h4>
                    The Pi Offers a Futuristic Slice of Proximity Charging For
                    New iPhones
                  </h4>
                  <p>
                    By <strong>admin</strong> on{" "}
                    <strong>February 21, 2020</strong>{" "}
                  </p>
                  <p>
                    This startup founded by MIT grads wants users to charge up
                    to four iPhones at the same time{" "}
                  </p>
                </a>
              </li>
              <li className="blog">
                <a href=".">
                  <img
                    src={require("./picture/blog-03.jpg")}
                    className="blogimg"
                    alt=""
                  />
                  <h4>Poilu Vases Are 3D Printed with Implanted “Hair”</h4>
                  <p>
                    By <strong>admin</strong> on{" "}
                    <strong>February 21, 2020</strong>{" "}
                  </p>
                  <p>
                    A collection of 3D printed vases where "hair" is implanted
                    during the printing process.{" "}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-subscribe">
          <div className="container">
            <h3>subscribe our newsletter</h3>
            <p>
              Sign up for our newsletter to be updated on the latest designs,
              exclusive offers, inspiration and tips!
            </p>
            <form className="subscribe">
              <input type="text" name="" id="email" />
              <button className="black-button">Subscribe</button>
            </form>
          </div>
        </section>
        <section className="section-policy">
          <div className="container">
            <ul className="policys">
              <li>
                <div>
                  <strong>Free Shipping</strong>
                  <p>Free shipping for all US orde</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Support 24/7</strong>
                  <p>we support 24 hours a day</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>30 days return</strong>
                  <p>you have 30 days to return</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Payment 100% Secure</strong>
                  <p>Payment 100% Secure</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="page-footer">
        <div className="footer-middle-row">
          <div className="container">
            <div className="row">
              <div className="footer-middle-col">
                <img src="./picture/kalles.svg" alt="" />
                <address>
                  <ul className="contact-list">
                    <li>
                      <i></i>
                      <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                    </li>
                    <li>
                      <i></i>
                      <a href="mailto:">contact@company.com</a>
                    </li>
                    <li>
                      <i></i>
                      <span> +001 2233 456</span>
                    </li>
                  </ul>
                </address>
                <ul className="socials">
                  <li>
                    <a href=".">.</a>
                  </li>
                </ul>
              </div>
              <div className="footer-middle-col">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <a href=".">Men</a>
                  </li>
                  <li>
                    <a href=".">Women</a>
                  </li>
                  <li>
                    <a href=".">Accessories</a>
                  </li>
                  <li>
                    <a href=".">Shoes</a>
                  </li>
                  <li>
                    <a href=".">Denim</a>
                  </li>
                </ul>
              </div>
              <div className="footer-middle-col">
                <h4>Infomation</h4>
                <ul>
                  <li>
                    <a href=".">About Us</a>
                  </li>
                  <li>
                    <a href=".">Contact Us</a>
                  </li>
                  <li>
                    <a href=".">Terms & Conditions </a>
                  </li>
                  <li>
                    <a href=".">Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href=".">Shipping & Delivery</a>
                  </li>
                  <li>
                    <a href=".">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-middle-col">
                <h4>Useful links</h4>
                <ul>
                  <li>
                    <a href=".">About Us</a>
                  </li>
                  <li>
                    <a href=".">Contact Us</a>
                  </li>
                  <li>
                    <a href=".">Terms & Conditions </a>
                  </li>
                  <li>
                    <a href=".">Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href=".">Shipping & Delivery</a>
                  </li>
                  <li>
                    <a href=".">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-middle-col">
                <h4>Quick links</h4>
                <ul>
                  <li>
                    <a href=".">Men</a>
                  </li>
                  <li>
                    <a href=".">Women</a>
                  </li>
                  <li>
                    <a href=".">Accessories</a>
                  </li>
                  <li>
                    <a href=".">Shoes</a>
                  </li>
                  <li>
                    <a href=".">Denim</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>Copyright © 2021 Kalles all rights reserved. Powered by The4</p>
            <ul>
              <li>
                <a href=".">Shop</a>
              </li>
              <li>
                <a href=".">About Us</a>
              </li>
              <li>
                <a href=".">Contact</a>
              </li>
              <li>
                <a href=".">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
