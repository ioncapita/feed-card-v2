import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function CommentList() {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    if (!comment.text || /^\s*$/.test(comment.text)) {
      return;
    }

    const newComments = [comment, ...comments];

    setComments(newComments);
    console.log(...comments);
  };

  const updateComment = (commentId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setComments((prev) =>
      prev.map((comment) => (comment.id === commentId ? newValue : comment))
    );
  };

  const removeComment = (id) => {
    const removedArr = [...comments].filter((comment) => comment.id !== id);

    setComments(removedArr);
  };

  return (
    <>
      <CommentForm onSubmit={addComment} />
      <Comment
        comments={comments}
        removeComment={removeComment}
        updateComment={updateComment}
      />
    </>
  );
}

export default CommentList;
