import React from 'react';
import ReactDOM from 'react-dom';

const Searchbar=(props)=>{
    return(
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s4">
                <form action="" onSubmit={props.handleSubmit}>
                    <div className="input-field">
                    <input placeholder="Search for Books" type="search" onChange={props.handleChange}/>
                    {/* <label className="label-icon" for="search"><i className="material-icons">search</i></label> */}
                    </div>
                </form>
                </section>
            </div>
        </div>
    );
};
export default Searchbar;