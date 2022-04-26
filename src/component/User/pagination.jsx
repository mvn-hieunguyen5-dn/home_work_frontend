import React from "react";

export default function pagination(props) {
  function prev() {
    if (props.page > 1) props.switch(props.page - 1);
  }
  function next() {
    if (props.page < 2) props.switch(props.page + 1);
  }
  function set(num) {
    props.switch(num);
    console.log(num);
  }
  return (
    <div className="pagination">
      <button className="pagi-button" onClick={() => prev()}>
        Frev
      </button>
      <button
        className={props.page === 1 ? "current" : "pagi-button"}
        onClick={() => set(1)}
      >
        1
      </button>
      <button
        className={props.page === 2 ? "current" : "pagi-button"}
        onClick={() => set(2)}
      >
        2
      </button>
      <button className="pagi-button" onClick={() => next()}>
        Next
      </button>
    </div>
  );
}
