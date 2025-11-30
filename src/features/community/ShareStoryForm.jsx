import React from 'react';
const ShareStoryForm = () => (
    <section className="section">
        <h2>Share Your Travel Story</h2>
        <form onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Story Title" style={{width: '100%', padding: '8px', marginBottom: '10px'}}/>
            <textarea placeholder="Share your experience and tips..." rows="5" style={{width: '100%', padding: '8px', marginBottom: '10px'}}></textarea>
            <button type="submit">Share Now</button>
        </form>
    </section>
);
export default ShareStoryForm;