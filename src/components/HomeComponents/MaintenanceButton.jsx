import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Maintenance_Button() {
    // eslint-disable-next-line
    const [clickCount, setClickCount] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        setClickCount(prevCount => {
            const newCount = prevCount + 1;
            if (newCount >= 5) {
                navigate('/maintenance');
            }
            return newCount;
        });
    };

    return (
        <div className="main-header">
            <div className="headers">
                <button onClick={handleClick}>
                    Shafi Uddin
                </button>
                <h2>Software Engineering Student</h2>
            </div>
        </div>
    )
};