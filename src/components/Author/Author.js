import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Display from '../Display/Display';
import './Author.css';

const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('./authors.json')
            .then(res => res.json())
            .then(data => setAuthors(data));
    }, [])

    const handleButton = (author) => {
        const newInfo = [...info, author];
        setInfo(newInfo);
    }

    return (
        <div className="author-container">
            <div className="author-info-container">
                {
                    authors.map(author => <Category key={author.key} author={author} handleButton={handleButton}></Category>)
                }
            </div>
            <div className="cart-info-container">
                <Display info={info}></Display>
            </div>
        </div>
    );
};

export default Author;