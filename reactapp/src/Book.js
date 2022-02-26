import React from "react";

const Book = (props) => {
  //console.log(props);
  //console.log(props.book);
  const { img, title, author } = props;
  const complexExample = (author) => {
    console.log(author);
  };
  const clickHandler = (e) => {
    // return alert("hello world");
    console.log(e);
    console.log(e.target);
  };
  return (
    <article className="book">
      <img src={img} alt="Atomic habits"></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={(e) => clickHandler(e)}>
        Complex Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complexExample
      </button>
    </article>
  );
};

export default Book;
