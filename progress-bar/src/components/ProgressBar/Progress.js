import React, { Fragment } from "react";
import "./style.css";

const Progress = ({ starNumber, progress, background }) => {
  return (
    <div className="progress-bar">
      {starNumber ? (
        <div className="progress-bar-stars">{starNumber} stars</div>
      ) : null}
      {progress ? (
        <Fragment>
          <div className="progress-bar-body">
            <div className="progress">
              <div
                className="progress-filled"
                style={{ width: `${progress}%`, background }}
              />
            </div>
          </div>
          <div className="progress-bar-number">{progress}%</div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Progress;
