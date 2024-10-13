import React, { useState } from 'react';

const StarRating = ({ onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value);
        onRatingChange(value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleClick(star)}
                    style={{
                        fontSize: '30px',
                        cursor: 'pointer',
                        color: star <= rating ? '#FFD700' : '#ccc', 
                    }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;