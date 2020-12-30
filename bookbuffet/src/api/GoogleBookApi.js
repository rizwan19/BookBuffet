import axios from 'axios';

const GoogleBookApi=axios.create({
    baseURL:"https://www.googleapis.com/books/v1",

});
const testapi = axios.create({
    testbaseURL:"https://books.google.com/ebooks",
})
const getBooksbyTerms=(searchTerm, setBooks, startIndex, setTotalPages)=>{
    var totalpage;
    GoogleBookApi.get("/volumes",
    {params:{q:searchTerm,
        startIndex: startIndex,
    }},
    ).then((response)=>{
        setBooks(response.data.items);
        totalpage = Math.ceil((response.data.totalItems*1.0)/10.0);
        setTotalPages(totalpage);
        //console.log(response);
    });
};
const getBookDetails=(BookID, setCurrentBook)=>{
    GoogleBookApi.get("/volumes/"+BookID,
    
    ).then((response)=>{
        //console.log(response);
        setCurrentBook(response.data);
        //console.log(response);
        //console.log("inside bookdetails");
    });
};
export {getBooksbyTerms, getBookDetails};