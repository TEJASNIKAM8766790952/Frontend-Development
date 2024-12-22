import React, { useState } from "react";
import "./login.css";
import logo from "../Image/logo.png";
import { FaGithub, FaGitlab, FaMicrosoft, FaKey } from "react-icons/fa";
import { SiBitbucket } from "react-icons/si";

function Login() {
  const [activeTab, setActiveTab] = useState("SAAS"); // State to track the active tab

  return (
    <div className="container">
      <div className="left-section">
        <div className="stats">
          <h2>AI to Detect & Autofix Bad Code</h2>
          <div className="stats-details">
            <p>
              30+ <span>Language Support</span>
            </p>
            <p>
              10K+ <span>Developers</span>
            </p>
            <p>
              100K+ <span>Hours Saved</span>
            </p>
          </div>
          <div className="issues">
            <p>Issues Fixed</p>
            <h3>500K+</h3>
            <span className="growth">↑ 14% This week</span>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="login-card">
        <img src={logo} alt="Logo" />
          <h2>Welcome to CodeAnt AI</h2>
          <div className="tabs">
            {/* Toggle active tab */}
            <button
              className={activeTab === "SAAS" ? "active" : ""}
              onClick={() => setActiveTab("SAAS")}
            >
              SAAS
            </button>
            <button
              className={activeTab === "Self Hosted" ? "active" : ""}
              onClick={() => setActiveTab("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>

          {/* Conditionally render login buttons based on active tab */}
          <div className="login-buttons">
            {activeTab === "SAAS" ? (
              <>
                <button>
                  <FaGithub /> Sign in with Github
                </button>
                <button>
                  <SiBitbucket /> Sign in with Bitbucket
                </button>
                <button>
                  <FaMicrosoft /> Sign in with Azure DevOps
                </button>
                <button>
                  <FaGitlab /> Sign in with GitLab
                </button>
              </>
            ) : (
              <>
                <button>
                  <FaGitlab /> Self Hosted GitLab
                </button>
                <button>
                  <FaKey /> Sign in with SSO
                </button>
              </>
            )}
          </div>

          <p className="terms">
            By signing up you agree to the <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
