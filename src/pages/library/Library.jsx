import React, { useEffect, useState } from "react";
import "./Library.css";

function Library() {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function open() {
    setModal(true);
  }

  function close() {
    setModal(false);
  }
  return (
    <div className="library">
      <div className="library-hero">
        <div className="container">
          <form>
            <input type="search" placeholder="Search a book....." />
          </form>
        </div>
      </div>

      {/* CARDS SECTION */}

      <main>
        <div className="library-main">
          <div className="container">
            <div className="book-cards">
              <div className="one card">
                <i
                  className="fa-solid fa-plus"
                  onClick={() => {
                    close();
                  }}
                ></i>
              </div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </main>

      {/* OVERLAY AND MODAL */}

      <div className={modal ? "overlay " : "overlay hidden"} id="overlay">
        <div className="modal">
          <form>
            <h1 className="modal-form-title">Kitob haqida ma'lumotnoma</h1>
            <label htmlFor="">Turi:</label>
            <select name="" id="">
              <option value="">Roman</option>
              <option value="">Qissa</option>
              <option value="">Dramatik adabiyot</option>
              <option value="">She'r yoki poema</option>
              <option value="">Ilmiy adabiyot</option>
              <option value="">Tafsir</option>
            </select>
            <label htmlFor="">Muallifi:</label>
            <input
              type="text"
              placeholder="Kitob muallifini kiriting..."
              id="author"
            />
            <label htmlFor="">Nomi:</label>
            <input
              type="text"
              placeholder="Kitobning nomini kiriting..."
              id="bookName"
            />
            <label htmlFor="">Kitob haqida:</label>
            <textarea
              name=""
              id=""
              cols="60"
              rows="8"
              placeholder="Kitob haqida qisqacha..."
            ></textarea>
            <button className="addBtn">Qo'shish</button>
          </form>
        </div>
        <i
          className="fas fa-close"
          onClick={() => {
            open();
          }}
        ></i>
      </div>
    </div>
  );
}

export default Library;
