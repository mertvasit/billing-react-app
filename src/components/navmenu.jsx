import React, { Component } from "react";

class NavMenu extends Component {
  render() {
    return (
      <nav className="col-md-2  bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link btn btn-outline-secondary m-2">
                <svg
                  className="bi bi-house-door-fill"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                  <path
                    fillRule="evenodd"
                    d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-danger m-2">
                <svg
                  className="bi bi-trophy"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 011-1h8a1 1 0 011 1H3zm2-1a1 1 0 011-1h4a1 1 0 011 1H5z" />
                  <path
                    fillRule="evenodd"
                    d="M12.5 3a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0zm-6-2a2 2 0 100 4 2 2 0 000-4zm-3 2a3 3 0 116 0 3 3 0 01-6 0z"
                    clipRule="evenodd"
                  />
                  <path d="M7 10h2v4H7v-4z" />
                  <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z" />
                </svg>
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-info m-2">
                <svg
                  className="bi bi-music-player-fill"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 1a1 1 0 011-1h6a1 1 0 011 1v2.5a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm7 8a3 3 0 11-6 0 3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                  <circle cx="8" cy="11" r="1" />
                </svg>
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-warning m-2">
                <svg
                  className="bi bi-people-circle"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
                  <path
                    fillRule="evenodd"
                    d="M8 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                    clipRule="evenodd"
                  />
                </svg>
                Person
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavMenu;
