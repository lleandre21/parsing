import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

function Content(props) {
    return (
        <div>
            <h3>Author: {props.author}</h3>      
            <h3>Title:{props.title}</h3>   
            <h3>ISBN: {props.ISBN}</h3>   
            <h3>Format: {props.format}</h3>   
            <h3>Pages: {props.pages}</h3>   
            <h3>Publisher: {props.publisher}</h3>   
            <h3>Publication Date: {props.publishdate}</h3>
            <h3>Genre: {props.genre}</h3>   
            <h3>Added Date: {props.added-date}</h3>   
        </div>
    )
}

export default Content;