import React from 'react';
import "./stylesheet.css";


const SearchSchool = (props) => (
    <div className="outer-schoolList">
        <img alt="S"></img>
        <div className="schoolList">
            <p className="school_name_p">{props.school_name}</p>
        </div>
    </div>
);

export default SearchSchool;