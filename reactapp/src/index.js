import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars
import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { author, title, img } = book;
        return <Book key={book.id} {...book}></Book>;
      })}

      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      /> */}
    </section>
  );
}

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
