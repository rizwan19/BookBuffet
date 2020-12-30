import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {getBooksbyTerms} from './api/GoogleBookApi';
import BookList from './components/BookList';
import Pagination from './components/Pagination';

const App=()=>{
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    await getBooksbyTerms(searchTerm, setBooks, 0, setTotalPages);
    //console.log("hello");
  };
  const handleChange = (event)=>{
    setSearchTerm(event.target.value);
  };

  const nextPage = async(page_number)=>{
    setCurrentPage(page_number);
    var startIndex = (currentPage-1)*10;
    await getBooksbyTerms(searchTerm, setBooks, startIndex, setTotalPages);
  }

  return(
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <BookList books={books}/>
      {totalPages>1?<Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages}/>:""}
    </div>
  );
};
export default App;