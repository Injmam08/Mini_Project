import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from "lucide-react";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-card">
        <div style={{textAlign:'center'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:12}}>
            <Plane style={{stroke:'#2A9D8F'}} />
            <span style={{color:'#2A9D8F',fontWeight:700,fontSize:18}}>Safarnama</span>
          </div>

          <h1 style={{color:'#2A9D8F',fontSize:32,margin:'8px 0'}}>Your Adventure Awaits with Safarnama</h1>
          <p style={{color:'#374151',maxWidth:760,margin:'0 auto 18px'}}>
            Explore immersive stories, connect with a community of travelers, and make a positive impact.
          </p>

          <Link to="/immersive" className="primary-btn" style={{
            background:'#2A9D8F', color:'#fff', padding:'12px 20px', borderRadius:10, textDecoration:'none', fontWeight:700
          }}>
            Start Exploring
          </Link>
        </div>
      </section>
    </main>
  );
}