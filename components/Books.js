import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Search from "./Search";
import BooksList from "./BooksList";
import apiHook from "../hooks/apiHook";
const bookData = [
  {
    name: "The Alchemist",
    author: "Paulo Coelho",
    pic: "https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg",
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    pic: "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg",
  },
  {
    name: "Psychology of Money",
    author: "Morgan Housel",
    pic: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg",
  },
  {
    name: "Zero to One",
    author: "Peter Thiel",
    pic: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg",
  },
  {
    name: "The Lean Startup",
    author: "Eric Ries",
    pic: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
  },
  {
    name: "Art of War",
    author: "Sun Tzu",
    pic: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
  },
];

function Books() {
  const [bookData, setBookData] = useState();
  const [books, setBooks] = useState(bookData);
  const locadData = async ()=>{
    const data = await apiHook("http://localhost:8888/api/getBooks");
    console.log("This is new data", data);
    setBookData(data);
    setBooks(data);
  }
  useEffect(() => {
    locadData();
  }, []);

  const Header = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 100,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Books
        </Text>
      </View>
    );
  };
  const handleChanges = (text) => {
    if (text.length === 0) {
      setBooks(bookData);
      return;
    }
    let filteredBooks = bookData.filter((book) => {
      return book.name.toLowerCase().includes(text.toLowerCase());
    });
    setBooks(filteredBooks);
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <Search handleChanges={handleChanges} />
      <BooksList books={books} />
    </View>
  );
}

export default Books;
