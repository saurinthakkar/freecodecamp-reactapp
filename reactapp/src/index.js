import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars

const books = [
  {
    id: 1,
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  },

  {
    id: 2,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL604_SR604,400_.jpg",
  },
];

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { author, title, img } = book;
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

const Book = (props) => {
  console.log(props);
  //console.log(props.book);
  const { img, title, author } = props;
  // const clickHandler = () => {
  //   return alert("hello world");
  // };
  return (
    <article className="book">
      <img src={img} alt="Atomic habits"></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
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
