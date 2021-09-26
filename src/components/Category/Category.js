import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faEnvelopeOpen, faAward } from '@fortawesome/free-solid-svg-icons';
import './Category.css';

const Category = (props) => {
    const { img, name, role, age, country, balance } = props.author;
    const icon = <FontAwesomeIcon icon={faUserEdit} />
    const icon2 = <FontAwesomeIcon icon={faEnvelopeOpen} />
    const icon3 = <FontAwesomeIcon icon={faAward} />
    return (
        <div className="category">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>Role: {role}</h4>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <h4>Net Worth: ${balance}M</h4>
            <button onClick={() => props.handleButton(props.author)} className="added-btn">{icon} Add To Cart</button>
            <div className="footer">
                <div><footer className="footer-icon">{icon2}</footer></div>
                <div><footer className="footer-icon">{icon3}</footer></div>
            </div>

        </div>
    );
};

export default Category;