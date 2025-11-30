import React from 'react';
import Card from '../../components/Card';
const mockPosts = [{id: 1, author: 'Israr', content: 'Just got back from Chennai! The  food in Chennai is unbelievable.'}, {id: 2, author: 'Faisum', content: 'Tip for solo travelers: always download Safarnama app for better travelling assistance!'}];
const CommunityFeed = () => (
    <section className="section">
        <h2>Community Stories</h2>
        {mockPosts.map(p => <Card key={p.id} className="post-card"><h4>{p.author} says:</h4><p>"{p.content}"</p></Card>)}
    </section>
);
export default CommunityFeed;