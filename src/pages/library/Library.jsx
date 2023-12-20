import React, { useEffect } from "react";
import "./Library.css";

function Library() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="library">
      <div className="library-hero">
        <div className="container">
          <form>
            <input type="search" placeholder="Search a book....." />
          </form>
        </div>
      </div>

      <main>
        <div className="library-main">
          <div className="container">
            <div className="book-cards">
              <div className="one card">
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Library;
