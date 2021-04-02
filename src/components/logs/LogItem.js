import React from "react";
import Moment from "react-moment";
import propTypes from "prop-types";

export default function LogItem({ log }) {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment parse="YYYY-MM-DDTHH:mm:ss" format="MMMM Do, YYYY, h:mm a">
            {" "}
            {log.date}{" "}
          </Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: propTypes.object.isRequired,
};
