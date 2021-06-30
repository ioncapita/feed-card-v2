import React, { useState } from "react";
import CommentForm from "./CommentForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import defaultUserImage from "../img/user.png";

const Comment = ({ comments, removeComment, updateComment }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateComment(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <CommentForm edit={edit} onSubmit={submitUpdate} />;
  }

  return comments.map((comment, index) => (
    <div className="comment-row complete" key={index}>
      <div className="comment-text" key={comment.id}>
        {comment.text}
      </div>
      <div>
        <img className="userImg" src={defaultUserImage} alt="" />
        <p className="user-name">Maria Silva</p>
        <span className="time">12 min ago</span>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeComment(comment.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: comment.id, value: comment.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Comment;
