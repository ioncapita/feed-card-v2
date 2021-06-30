import React, { useState, useEffect, useRef } from "react";
import "./CommentForm.css";

function CommentForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="comment-form">
        {props.edit ? (
          <>
            <input
              placeholder="Update your comment"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="comment-input edit"
            />
            <button onClick={handleSubmit} className="comment-button edit">
              Edit
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add comment"
              value={input}
              onChange={handleChange}
              name="text"
              className="comment-input"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="comment-button">
              Add Comment
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default CommentForm;
