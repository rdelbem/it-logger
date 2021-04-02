import React from "react";

export default function SearchBar() {
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
              <i className="material-icons">close</i>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}
