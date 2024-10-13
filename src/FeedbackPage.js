import React, { useState } from 'react';
import StarRating from './StarRating'; 
import './App.css'; 

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0); 

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Đánh giá: ${rating} sao\nPhản hồi: ${feedback}`);
        // Reset form
        setFeedback('');
        setRating(0);
    };

    return (
        <div className="feedback-container"> 
            <h1>Đánh Giá và Phản Hồi</h1>
            <form onSubmit={handleSubmit}>
                <StarRating onRatingChange={setRating} />
                <label>
                    Phản hồi:
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                        style={{ width: '100%', height: '100px', marginTop: '10px' }}
                    />
                </label>
                <button type="submit">Gửi Phản Hồi</button>
            </form>
        </div>
    );
};

export default FeedbackPage;
