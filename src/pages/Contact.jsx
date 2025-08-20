import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";

const TITLE = "Contact Me | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    // ✅ Init EmailJS
    emailjs.init("h6lL_rBaPQddJhbz4");

    // ✅ Load stored reviews
    const storedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    this.setState({ reviews: storedReviews });
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zszwyyl", // Service ID
        "template_xd2kxxc", // Template ID
        this.formRef.current
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          this.formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
          <link rel="canonical" href={CANONICAL} />
          <meta name="description" content={DESC} />
          <meta name="theme-color" content={Config.THEME_COLOR} />
        </Helmet>

        <div className="contact_body">
          {/* ✅ Background Video */}
          <video autoPlay muted loop className="contact_bg-video">
            <source src="/img-vid/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* ✅ Glass Title */}
          <div className="contact-title-glass">
            <h1>Let's Connect</h1>
            <p>
              Have a question, project or opportunity? Reach out anytime — I'm
              ready to support your geo-spatial vision.
            </p>
          </div>

          {/* ✅ Main Glass Box */}
          <div className="contact-wrapper">
            {/* Info Section */}
            <div className="contact_info-section">
              <img src="/img-vid/asdasd.jpg" alt="Hamid Gulzar" />
              <h3>Contact Information</h3>
              <p>
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>{" "}
                Hamid Gulzar
              </p>
              <p>
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>{" "}
                hamidgul.gis@gmail.com
              </p>
              <p>
                <i>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </i>{" "}
                Lahore, Pakistan
              </p>
              <p>
                <i>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>{" "}
                <a
                  href="https://www.linkedin.com/in/hamid-gulzar-534104231"
                  style={{ color: "#8fe4ff" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>

            {/* ✅ Form Section */}
            <div className="contact_form-section">
              <h2>Contact</h2>
              <form
                id="contactForm"
                className="contact-form"
                ref={this.formRef}
                onSubmit={this.sendEmail}
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email Address"
                  required
                />
                <input
                  type="text"
                  name="from_subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message..."
                  required
                ></textarea>

                <input type="hidden" name="to_name" value="Hamid Gulzar" />
                <input
                  type="hidden"
                  name="reply_to"
                  value="hamidgul.gis@gmail.com"
                />
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>

          {/* ✅ Review Section */}
          <div className="contact_review-section">
            <h2>What People Say</h2>
            <div className="contact_review-cards">
              {this.state.reviews.length > 0 ? (
                this.state.reviews.map((review, index) => (
                  <div key={index} className="contact_review-card">
                    <p>"{review.message}"</p>
                    <p>{review.stars}</p>
                    <div className="contact_review-footer">
                      <img
                        src={review.image || "/img-vid/default-user.png"}
                        alt={review.name}
                      />
                      <div className="contact_review-info">
                        <h4>{review.name}</h4>
                        <span>{review.country}</span>
                      </div>
                      <h5 className="contact_review-score">66</h5>
                    </div>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
