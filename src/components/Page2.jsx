import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Page2 = () => {
    const count = useSelector((state) => state.count);


    return (
        <div>
            <h2>Page 2</h2>
            <p>Counter Value from Page 1:<span style={{ color: count % 2 === 0 ? "green" : "red", fontSize: 30, fontWeight: "bold" }} >
                {count}</span>
                <span style={{fontSize:26}}> {count % 2 === 0 ? "color is green" : "color is red"}</span></p>
            <button><Link style={{ textDecoration: "none", color: "black" }} to="/" >Back/Go to Page 1</Link></button>
        </div>
    );
};

export default Page2;
