import React from "react";
import "./landing.css";
import "./css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const clickBooking = () => {
    navigate("/booking-rooms");
  };

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-image"></div>
          <div className="hero-text">
            <h1>Ceylon Grand </h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button
              href="/booking-rooms"
              className="btn btn-primary"
              onClick={clickBooking}
            >
              Book
            </button>
          </div>
        </div>
      </section>

      {/* //about us */}

      <div style={{ paddingTop: 90, paddingBottom: 90 }} className="about_area">
        <h1>About us</h1>
        <div
          style={{ paddingTop: 100, paddingBottom: 100 }}
          className="abtcontainer"
        >
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="about_info">
                <div className="section_title mb-20px">
                  <span>About Us</span>
                  <h3>
                    A Luxuries Hotel <br />
                    with Nature
                  </h3>
                </div>
                <p className="abttext">
                  Savour your penchant for finer comforts. Partner with sheer
                  luxury at Ceylon Grand, as you attend a business event in the
                  capital city. Let the opulence of our meeting rooms and
                  conference halls seep into flourishing work partnerships.
                  Raise a toast to all the success at our plush restaurants and
                  taste jubilance like never before. When you’ve enjoyed every
                  bit of your Grand accomplishments, retire to your room, and
                  relish in the exquisite comforts that Colombo’s most lavish
                  business hotel has to offer.
                </p>
                <a href="#" className="line-button">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="about_thumb d-flex">
                <div className="img_1">
                  <img src="https://preview.colorlib.com/theme/montana/img/about/xabout_1.png.pagespeed.ic.LF5rkD9bee.webp" />
                </div>
                <div className="abtimg_2">
                  <img
                    src="https://preview.colorlib.com/theme/montana/img/about/xabout_2.png.pagespeed.ic.Iswjjsyaxg.webp"
                    alt=""
                    data-pagespeed-url-hash="965061259"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ongoing offors */}
      <div className="ofoffers_area bg-light">
        <div className="ofcontainer">
          <div className="ofrow">
            <div className="ofcol-xl-12">
              <div className="section_title oftext-center ofmb-100">
                <span>Our Offers</span>
                <h3>Ongoing Offers</h3>
              </div>
            </div>
          </div>
          <div className="ofrow">
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img
                    src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp"
                    alt=""
                    data-pagespeed-url-hash="900117794"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
                <h3 className="offers_area">
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults &amp; 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" className="book_now">
                  book now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img
                    src="https://preview.colorlib.com/theme/montana/img/offers/x2.png.pagespeed.ic.MbYDoANTJ3.webp"
                    alt=""
                    data-pagespeed-url-hash="1194617715"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults &amp; 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" className="book_now">
                  book now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img
                    src="https://preview.colorlib.com/theme/montana/img/offers/x3.png.pagespeed.ic.Y_ffhAZTDD.webp"
                    alt=""
                    data-pagespeed-url-hash="1489117636"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults &amp; 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" className="book_now">
                  book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gallary */}

      <div style={{ paddingTop: 90, paddingBottom: 90 }} className="about_area">
        <h1>About us</h1>
        <div
          style={{ paddingTop: 100, paddingBottom: 100 }}
          className="abtcontainer"
        >
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="about_info">
                <div className="section_title mb-20px">
                  {/* <span>About Us</span> */}
                  <h3>
                    We Serve Fresh and
                    <br />
                    Delicious Food
                  </h3>
                </div>
                <p className="abttext">
                  Savour your penchant for finer comforts. Partner with sheer
                  luxury at Ceylon Grand, as you attend a business event in the
                  capital city. Let the opulence of our meeting rooms and
                  conference halls seep into flourishing work partnerships.
                  Raise a toast to all the success at our plush restaurants and
                  taste jubilance like never before. When you’ve enjoyed every
                  bit of your Grand accomplishments, retire to your room, and
                  relish in the exquisite comforts that Colombo’s most lavish
                  business hotel has to offer.
                </p>
                <a href="#" className="line-button">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="about_thumb d-flex">
                <div className="img_1">
                  <img src="https://preview.colorlib.com/theme/montana/img/about/x1.png.pagespeed.ic.ytFzk1qg9A.webp" />
                </div>
                <div className="abtimg_2">
                  <img
                    src="https://preview.colorlib.com/theme/montana/img/about/x2.png.pagespeed.ic.TMQb44M-no.webp"
                    alt=""
                    data-pagespeed-url-hash="965061259"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">address</h3>
                  <p className="footer_text">
                    {" "}
                    200, Green road, Mongla, <br />
                    New Yor City USA
                  </p>
                  <a href="#" className="line-button">
                    Get Direction
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Reservation</h3>
                  <p className="footer_text">
                    +10 367 267 2678 <br />
                    reservation@montana.com
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Navigation</h3>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Rooms</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984671121426!2d79.97075581409538!3d6.914682820412032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1652956546328!5m2!1sen!2slk"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
