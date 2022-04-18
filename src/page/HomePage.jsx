import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "./products.json";
import Product from "./homepage/component/Product";
import LightingCollection from "./homepage/component/LightingCollection";
import BlogSection from "./homepage/component/BlogsSection";

import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <main className="page-main">
      <section className="section-page-introduction ">
        <LightingCollection />
      </section>
      <section className="section-best-selling">
        <div className="container">
          <h3>best selling products</h3>
          {/* <div className="liner" style="background-color: black;"></div> */}
          <p className="script">
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor!
          </p>
          <ul className="product-line">
            {
              data.map((item)=>(<Product data={item} key={item.id}></Product>) )
            }
          </ul>

          <a className="black-button" href=".">
            Load more <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
          </a>
        </div>
      </section>
      <section className="section-blogs">
        <BlogSection />
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
    )
  }
}

