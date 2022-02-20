import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars
const author = "James Clear";
const title = "Atomic Habits";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="Atomic habits"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {console.log(props)}
    </article>
  );
};

// const Title = () => <h1>Atomic Habits</h1>;
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     James Clear{" "}
//   </h4>
// );
// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
//     alt="Atomic habits"
//   />
// );

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

ReactDom.render(<BookList />, document.getElementById("root"));
