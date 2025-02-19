import React, { useState } from 'react';
import './FeedbackForm.css';  

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return (
    <div className="feedback-form-container">
      <div className="feedback-form">
        <h2 className="form-title">We Value Your Feedback!</h2>
        <p className="form-description">
          Please share your thoughts, suggestions, or comments with us. Your feedback helps us improve our services.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">Your Feedback:</label>
            <textarea
              id="feedback"
              className="form-control"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
