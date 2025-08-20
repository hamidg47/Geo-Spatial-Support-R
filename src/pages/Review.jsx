import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";

const TITLE = "Review | " + Config.SITE_TITLE;
const DESC =
  "This site is dedicated to comprehensive world mapping and the study of geography.";
const CANONICAL = Config.SITE_DOMAIN + "/";

function Review() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    message: "",
    stars: "",
    image: null,
  });

  // CSS as JS object
  const styles = {
    page: {
      fontFamily: "'Segoe UI', sans-serif",
      background: "#0f2027",
      color: "white",
      padding: "50px",
      minHeight: "100vh",
    },
    container: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "30px",
      borderRadius: "15px",
      maxWidth: "500px",
      margin: "auto",
      backdropFilter: "blur(12px)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
    },
    button: {
      backgroundColor: "#1d465c",
      color: "white",
      cursor: "pointer",
      transition: "background 0.3s",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
    },
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storeReview = (imageBase64) => {
      const newReview = {
        ...formData,
        image: imageBase64 || "/img-vid/logo.png", // ✅ default image from public
      };
      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
      reviews.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(reviews));

      alert("✅ Review submitted! Go back to the Contact page to view it.");
      setFormData({
        name: "",
        country: "",
        message: "",
        stars: "",
        image: null,
      });
    };

    if (formData.image) {
      const reader = new FileReader();
      reader.onload = () => storeReview(reader.result);
      reader.readAsDataURL(formData.image);
    } else {
      storeReview();
    }
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
        <meta name="theme-color" content={Config.THEME_COLOR} />
      </Helmet>

      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Submit Your Review</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="text"
              id="country"
              placeholder="Your Country"
              value={formData.country}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              id="message"
              rows="5"
              placeholder="Write your review here..."
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.input}
            ></textarea>
            <select
              id="stars"
              value={formData.stars}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="">Star Rating</option>
              <option value="⭐️⭐️⭐️⭐️⭐️">5 Stars</option>
              <option value="⭐️⭐️⭐️⭐️">4 Stars</option>
              <option value="⭐️⭐️⭐️">3 Stars</option>
              <option value="⭐️⭐️">2 Stars</option>
            </select>

            <label>Upload your image (optional)</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleChange}
              style={styles.input}
            />

            <button type="submit" style={styles.button}>
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Review;
