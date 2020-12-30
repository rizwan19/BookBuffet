import React, {useState, useEffect} from 'react';
import {getBookDetails} from './../api/GoogleBookApi';
import {Link} from 'react-router-dom';

const BookDetails=(props)=>{
    //console.log(props);
    const [currentBook, setCurrentBook] = useState(0);
    //console.log()
      useEffect(()=>{
          getBookDetails(props.location.book_id, setCurrentBook);
      },[0]);
    //getBookDetails(props.location.book_id, setCurrentBook);
    
    console.log("In currentbook");
    console.log(currentBook);
    var ImageURL="";
    if(currentBook!=0)
        ImageURL=currentBook.volumeInfo.imageLinks.thumbnail;
    //if(currentBook.volumeInfo.imageLinks!=undefined)
        //ImageURL = currentBook.volumeInfo.imageLinks.thumbnail;
    //currentBook.volumeInfo.imageLinks.thumbnail;
    //console.log(ImageURL);
    return(
        
        
            <div className="col s12 m5"  >
                <div className="card" style={{height:"auto",width:"auto"}}>
                    
                    <div className="card-image" style={{maxWidth:"1000em"}}>{/*card-image*/}
                        <img src = {ImageURL} alt="" style={{display:"",height:"19.2em",width:"19.2em",maxHeight:"19.2em",maxWidth:"19.2em"}}/>{/* <img src="" alt=""/> */}
                        
                    </div>
                    <div className="card-content"> {/*style={{marginTop:0,height:"7em",maxWidth:"20em",overflow:"hidden"}*/}
                        {currentBook!=0?<h3>{currentBook.volumeInfo.title}</h3>:"" }
                    </div>
                    <div className="card-content">
                        {currentBook!=0?<h4>{currentBook.volumeInfo.authors}</h4>:""}
                    </div>
                    <div className="card-content">
                        {currentBook!=0?<h6>{currentBook.volumeInfo.description}</h6>:""}
                    </div>
                    
                    <div className="card-content">
                        <Link to="/">Go to Search Page</Link>
                    </div>
                </div>
            </div>
            
        
    );
};
export default BookDetails;