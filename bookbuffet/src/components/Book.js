import React from 'react';
import {Link} from 'react-router-dom';

const Book =(props)=>{
    var ImageURL="";
    if(props.data.volumeInfo.imageLinks!=undefined)
        ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    
    //console.log(ImageURL);
    return(
        
            <div className="col s12 m5"  >
                <div className="card" style={{height:"auto",width:"auto"}}>
                    <div className="card-image" style={{maxWidth:"1000em"}}>{/*card-image*/}
                        <img src = {ImageURL} alt={props.data.volumeInfo.title} style={{display:"",height:"19.2em",width:"19.2em",maxHeight:"19.2em",maxWidth:"19.2em"}}/>{/* <img src="" alt=""/> */}
                        
                    </div>
                    <div className="card-content" style={{height:"7em",maxWidth:"20em",overflow:"hidden"}}>
                        <h6>{props.data.volumeInfo.title}</h6>
                    </div>
                    <div className="card-content">
                        <Link to={{pathname:"/volumes/"+props.data.id,
                    book_id: props.data.id}}>Read More...</Link>
                    </div>
                </div>
            </div>
            
        
    );
};
export default Book;