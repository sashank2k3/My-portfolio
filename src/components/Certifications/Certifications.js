import React from "react";
import "./Certifications.scss";
import pdfIcon from "../../assets/images/pdf-icon.png";

// List of certificate files (static for now, can be automated later)
const certificates = [
  "Coursera Create Informative Presentations with Google Slides.pdf",
  "Coursera Data Analysis with R Programming.pdf",
  "Coursera Exploratory Data Analysis for Machine Learning.pdf",
  "Coursera Introduction to Cloud Computing.pdf",
  "Coursera Introduction to Contemporary Operating Systems.pdf",
  "Coursera Introduction to CSS3.pdf",
  "Coursera Introduction to Data Analysis using MS Excel.pdf",
  "Coursera Introduction to HTML5.pdf",
  "Coursera Learn PHP Database Connectivity.pdf",
  "Coursera Python for Data Visualization Matplotlib Seaborn.pdf",
  "Coursera RDBMS.pdf",
  "Coursera_DataAnalysis_Python.pdf",
  "Coursera_IBM_Introduction_to_AI.pdf",
  "java_basic certificate.pdf",
  "python_basic certificate.pdf"
];

const Certifications = () => {
  return (
    <div className="certifications-section">
      <h2>My Certifications</h2>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div className="certificate-card" key={idx}>
            <img src={pdfIcon} alt="PDF Icon" className="certificate-thumbnail" />
            <div className="certificate-info">
              <span className="certificate-name">{cert.replace(/\.pdf$/, "")}</span>
              <a
                href={process.env.PUBLIC_URL + "/certificates/" + cert}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate-btn"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
