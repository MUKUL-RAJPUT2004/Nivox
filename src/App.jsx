import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import './style.css';

// Navigation Bar
function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <h1><Link to="/">Nivox</Link></h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#products" onClick={() => scrollToSection('products')}>Sales</a>
          <a href="#contact">Contact Us</a>
          <a href="#cart" className="flex items-center">
            Cart <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </a>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div id="home">
      <div className="hero-content">
        <h2>Streamlining B2B Procurement</h2>
        <p>Seamless delivery solutions for industries.</p>
      </div>
    </div>
  );
}

// Comparison Section
function BeforeAfter() {
  return (
    <div className="section-container">
      <h2>Before vs. After Nivox</h2>
      <div className="grid-2">
        <div className="card">
          <h3>Before Nivox</h3>
          <ul>
            <li>Manual vendor calls, slow process</li>
            <li>Opaque pricing, hidden costs</li>
            <li>No product trials, high risk</li>
          </ul>
        </div>
        <div className="card">
          <h3>After Nivox</h3>
          <ul>
            <li>Video demos, instant insights</li>
            <li>Transparent pricing, easy RFPs</li>
            <li>Free trials, confident purchases</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Register Organization
function RegisterOrg() {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Organization registered!');
    setOrgName('');
    setEmail('');
  };

  return (
    <div className="register-section">
      <h2>Register Your Organization</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          placeholder="Organization Name"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

// What We Do (Features with Trial Mechanism)
function WhatWeDo() {
  const features = [
    { title: 'Video Demos', desc: 'Watch product demos from trusted vendors.' },
    { title: 'Comment & Rating', desc: 'Share feedback and rate products.' },
    { title: 'RFP Preview', desc: 'Create and preview RFPs easily.' },
    { title: 'Free Trials', desc: 'Try up to 3 products for ₹199 shipping, refunded as credit.' }
  ];

  const handleTrialRequest = () => {
    alert('Trial request submitted! Pay ₹199 shipping to proceed.');
  };

  return (
    <div className="features-section">
      <h2>What We Do</h2>
      <div className="grid-4">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="trial-button" onClick={handleTrialRequest}>
          Request Trial
        </button>
      </div>
    </div>
  );
}

// Retailer Page
function RetailerPage() {
  const { vendor } = useParams();
  const navigate = useNavigate();
  const [credits, setCredits] = useState(0);

  const handleTrialOrder = () => {
    const newCredits = credits + 199; // Add 199 credits for trial order
    setCredits(newCredits);
    alert(`Trial order placed for ${vendor}! You've earned 199 credits. Total credits: ${newCredits}`);
  };

  const retailerDetails = {
    description: `${vendor} is a trusted provider of industry-leading solutions, offering a wide range of products and services tailored to meet your business needs.`,
    services: [
      'Product supply and distribution',
      'Custom order fulfillment',
      'Bulk order discounts',
      'Technical support and consulting',
      'Delivery and installation services'
    ],
    costs: {
      'Starter Plan': '$500/month',
      'Growth Plan': '$900/month',
      'Enterprise Plan': 'Contact for custom pricing'
    },
    features: [
      'High-quality products with rigorous testing',
      'Customizable solutions for all business sizes',
      'Dedicated account manager',
      'Fast and reliable delivery',
      '30-day money-back guarantee'
    ],
    contact: {
      email: `sales@${vendor.toLowerCase()}.com`,
      phone: '+1-800-555-1234',
      address: '123 Industry Lane, Business City, USA 12345'
    },
    catalog: [
      { product: 'Core Product', price: '$400' },
      { product: 'Advanced Solution', price: '$600' },
      { product: 'Enterprise Package', price: '$800' }
    ]
  };

  return (
    <div className="retailer-page">
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <h2>{vendor}</h2>
      <div className="retailer-section">
        <h3>About {vendor}</h3>
        <p>{retailerDetails.description}</p>
      </div>
      <div className="retailer-section">
        <h3>Services</h3>
        <ul>
          {retailerDetails.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="retailer-section">
        <h3>Costs</h3>
        <ul>
          {Object.entries(retailerDetails.costs).map(([plan, cost], index) => (
            <li key={index}><strong>{plan}:</strong> {cost}</li>
          ))}
        </ul>
      </div>
      <div className="retailer-section">
        <h3>Features</h3>
        <ul>
          {retailerDetails.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="retailer-section">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> {retailerDetails.contact.email}</p>
        <p><strong>Phone:</strong> {retailerDetails.contact.phone}</p>
        <p><strong>Address:</strong> {retailerDetails.contact.address}</p>
      </div>
      <div className="retailer-section">
        <h3>Sample Catalog</h3>
        <div className="grid-3">
          {retailerDetails.catalog.map((item, index) => (
            <div key={index} className="catalog-item">
              <h4>{item.product}</h4>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="retailer-section trial-section">
        <h3>Trial Order (Earn Credits!)</h3>
        <p>Try up to 3 products for ₹199 shipping, refunded as <strong>199 credits</strong> towards your next purchase.</p>
        <button onClick={handleTrialOrder}>Place Trial Order</button>
        <p className="credits-display"><strong>Your Credits:</strong> {credits}</p>
      </div>
    </div>
  );
}

// Products Section
function ProductsSection() {
  const [industry, setIndustry] = useState('Tech');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState({});
  const navigate = useNavigate();

  const industries = [
    {
      name: 'Tech',
      retailers: [
        { id: 1, vendor: 'TechCorp', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$800-$1200' },
        { id: 2, vendor: 'TechTrend', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$600-$1000' },
        { id: 3, vendor: 'GadgetPro', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$500-$900' },
        { id: 4, vendor: 'InnoTech', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$700-$1100' },
        { id: 5, vendor: 'CyberShop', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$400-$800' },
        { id: 6, vendor: 'TechBit', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$600-$950' },
        { id: 7, vendor: 'SmartTech', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$550-$850' },
        { id: 8, vendor: 'NextGen', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$650-$1000' },
        { id: 9, vendor: 'TechWave', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$500-$950' },
      ]
    },
    {
      name: 'Furniture',
      retailers: [
        { id: 10, vendor: 'FurniCo', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$100-$300' },
        { id: 11, vendor: 'FurniCraft', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$150-$400' },
        { id: 12, vendor: 'WoodWorks', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$200-$500' },
        { id: 13, vendor: 'HomeStyle', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$120-$350' },
        { id: 14, vendor: 'CozyNest', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$180-$450' },
        { id: 15, vendor: 'UrbanFurn', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$130-$400' },
        { id: 16, vendor: 'TimberTrend', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$160-$420' },
        { id: 17, vendor: 'ElegantHome', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$140-$380' },
        { id: 18, vendor: 'FurniLux', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$170-$430' },
      ]
    },
    {
      name: 'Textiles',
      retailers: [
        { id: 19, vendor: 'TextileHub', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$50-$150' },
        { id: 20, vendor: 'TextilePro', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$80-$200' },
        { id: 21, vendor: 'SilkWeave', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$60-$180' },
        { id: 22, vendor: 'Fabrico', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$70-$160' },
        { id: 23, vendor: 'ThreadCraft', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$55-$170' },
        { id: 24, vendor: 'WeaveMasters', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$65-$190' },
        { id: 25, vendor: 'LoomLux', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$75-$200' },
        { id: 26, vendor: 'TextileTrend', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$60-$175' },
        { id: 27, vendor: 'FiberElite', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$70-$185' },
      ]
    },
    {
      name: 'Automotive',
      retailers: [
        { id: 28, vendor: 'AutoPartsCo', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$200-$600' },
        { id: 29, vendor: 'GearShift', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$150-$500' },
        { id: 30, vendor: 'MotorWorks', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$180-$550' },
        { id: 31, vendor: 'DriveTech', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$220-$650' },
        { id: 32, vendor: 'AutoElite', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$190-$570' },
        { id: 33, vendor: 'SpeedMasters', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$170-$520' },
        { id: 34, vendor: 'CarZone', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$200-$600' },
        { id: 35, vendor: 'WheelPro', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$160-$510' },
        { id: 36, vendor: 'EngineHub', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$210-$620' },
      ]
    },
    {
      name: 'Healthcare',
      retailers: [
        { id: 37, vendor: 'MediSupply', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$300-$800' },
        { id: 38, vendor: 'HealthEquip', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$250-$700' },
        { id: 39, vendor: 'CareTech', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$280-$750' },
        { id: 40, vendor: 'MedPro', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$320-$820' },
        { id: 41, vendor: 'VitalGear', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$270-$730' },
        { id: 42, vendor: 'HealthMasters', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$290-$760' },
        { id: 43, vendor: 'MediCore', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$310-$790' },
        { id: 44, vendor: 'CareEssentials', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$260-$720' },
        { id: 45, vendor: 'LifeTech', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$300-$800' },
      ]
    },
    {
      name: 'Electronics',
      retailers: [
        { id: 46, vendor: 'ElectroMart', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$400-$900' },
        { id: 47, vendor: 'CircuitCity', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$350-$850' },
        { id: 48, vendor: 'TechGear', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$380-$880' },
        { id: 49, vendor: 'GizmoPro', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$420-$920' },
        { id: 50, vendor: 'ElectroTrend', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$370-$870' },
        { id: 51, vendor: 'WireMasters', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$390-$890' },
        { id: 52, vendor: 'TechTrove', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$360-$860' },
        { id: 53, vendor: 'CircuitPro', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$400-$900' },
        { id: 54, vendor: 'ElectroElite', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$380-$880' },
      ]
    },
    {
      name: 'Construction',
      retailers: [
        { id: 55, vendor: 'BuildMart', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$500-$1200' },
        { id: 56, vendor: 'ConstructPro', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$450-$1100' },
        { id: 57, vendor: 'BrickWorks', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$480-$1150' },
        { id: 58, vendor: 'BuildTech', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$520-$1250' },
        { id: 59, vendor: 'SteelMasters', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$470-$1130' },
        { id: 60, vendor: 'ConstructElite', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$490-$1180' },
        { id: 61, vendor: 'BuildEssentials', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$510-$1220' },
        { id: 62, vendor: 'CementPro', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$460-$1120' },
        { id: 63, vendor: 'StructTrend', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$500-$1200' },
      ]
    },
    {
      name: 'Agriculture',
      retailers: [
        { id: 64, vendor: 'AgriSupply', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$200-$600' },
        { id: 65, vendor: 'FarmTech', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$150-$500' },
        { id: 66, vendor: 'GreenFields', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$180-$550' },
        { id: 67, vendor: 'AgroPro', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$220-$650' },
        { id: 68, vendor: 'FarmEssentials', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$190-$570' },
        { id: 69, vendor: 'AgriMasters', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$170-$520' },
        { id: 70, vendor: 'GrowTech', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$200-$600' },
        { id: 71, vendor: 'FieldPro', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$160-$510' },
        { id: 72, vendor: 'AgriTrend', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$210-$620' },
      ]
    },
    {
      name: 'Energy',
      retailers: [
        { id: 73, vendor: 'EnergyCo', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$600-$1500' },
        { id: 74, vendor: 'PowerTech', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$550-$1400' },
        { id: 75, vendor: 'SolarMasters', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$580-$1450' },
        { id: 76, vendor: 'GreenEnergy', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$620-$1550' },
        { id: 77, vendor: 'EnergyPro', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$570-$1420' },
        { id: 78, vendor: 'EcoPower', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$590-$1470' },
        { id: 79, vendor: 'SolarTech', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$610-$1520' },
        { id: 80, vendor: 'PowerEssentials', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$560-$1410' },
        { id: 81, vendor: 'EnergyTrend', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$600-$1500' },
      ]
    },
    {
      name: 'Fashion',
      retailers: [
        { id: 82, vendor: 'FashionHub', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$50-$200' },
        { id: 83, vendor: 'StyleTrend', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$40-$180' },
        { id: 84, vendor: 'ChicWear', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$60-$220' },
        { id: 85, vendor: 'TrendyThreads', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$55-$210' },
        { id: 86, vendor: 'FashionPro', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$45-$190' },
        { id: 87, vendor: 'StyleMasters', url: 'https://www.youtube.com/embed/9bZkp7q19f0', priceRange: '$50-$200' },
        { id: 88, vendor: 'VogueTrend', url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', priceRange: '$65-$230' },
        { id: 89, vendor: 'ChicEssentials', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', priceRange: '$48-$195' },
        { id: 90, vendor: 'FashionElite', url: 'https://www.youtube.com/embed/3tmd-ClpJxA', priceRange: '$52-$205' },
      ]
    }
  ];

  const videos = industries.find(ind => ind.name === industry)?.retailers || [];

  const handleRating = (videoId, star) => {
    alert(`Rated ${star} stars for video ${videoId}`);
  };

  const handleComment = (videoId) => {
    if (!comment) return;
    setComments(prev => ({
      ...prev,
      [videoId]: [...(prev[videoId] || []), comment]
    }));
    alert('Comment submitted');
    setComment('');
  };

  const handleRetailerPage = (vendor) => {
    navigate(`/retailer/${vendor}`);
  };

  return (
    <div id="products">
      <h2>Explore Products by Industry</h2>
      <div className="industry-tabs">
        {industries.map(ind => (
          <button
            key={ind.name}
            className={industry === ind.name ? 'active' : ''}
            onClick={() => setIndustry(ind.name)}
          >
            {ind.name}
          </button>
        ))}
      </div>
      <div className="grid-3">
        {videos.map(video => (
          <div key={video.id} className="product-card" onClick={() => handleRetailerPage(video.vendor)}>
            <iframe src={video.url} title={video.vendor} allowFullScreen />
            <div className="content">
              <h3>{video.vendor}</h3>
              <p>Price: {video.priceRange}</p>
              <div className="rating-buttons">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onClick={(e) => { e.stopPropagation(); handleRating(video.id, star); }}
                  >
                    {star}⭐
                  </button>
                ))}
              </div>
              <div className="comment-section">
                <input
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <button onClick={(e) => { e.stopPropagation(); handleComment(video.id); }}>
                  Submit
                </button>
              </div>
              {comments[video.id] && (
                <div className="comments">
                  <h4>Comments:</h4>
                  <ul>
                    {comments[video.id].map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="action-buttons">
                <button onClick={(e) => { e.stopPropagation(); alert('RFP preview opened (coming soon)'); }}>
                  Preview RFP
                </button>
                <button onClick={(e) => { e.stopPropagation(); alert(`Trial requested for ${video.vendor}`); }}>
                  Request Trial
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    { question: 'What industries does Nivox support?', answer: 'We support Tech, Furniture, Textiles, and more.' },
    { question: 'How do free trials work?', answer: 'Try up to 3 products for ₹199 shipping, refunded as credit.' },
    { question: 'Can I preview RFPs?', answer: 'Yes, create and preview RFPs directly on the platform.' }
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    { name: 'John Doe, TechCorp', quote: 'Nivox made procurement so easy with video demos and transparent pricing!' },
    { name: 'Jane Smith, FurniCo', quote: 'The free trial option helped us choose the right products confidently.' },
    { name: 'Sam Patel, TextileHub', quote: 'A game-changer for B2B purchasing. Highly recommend!' }
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="grid-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <p>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Contact Us Section (Non-functional, for display)
function ContactUsSection() {
  return (
    <div id="contact">
      <h2>Contact Us</h2>
      <div className="contact-form">
        <form>
          <input placeholder="Your Name" disabled />
          <input placeholder="Your Email" type="email" disabled />
          <textarea placeholder="Your Message" rows="4" disabled />
          <button disabled>Send Message</button>
        </form>
      </div>
    </div>
  );
}

// Main App (Single Page)
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <HeroSection />
            <BeforeAfter />
            <RegisterOrg />
            <WhatWeDo />
            <ProductsSection />
            <FAQSection />
            <TestimonialsSection />
            <ContactUsSection />
            <footer>
              <p>© 2025 Nivox. Simplifying B2B Procurement.</p>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Support</a>
              </div>
            </footer>
            <button
              className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
              onClick={scrollToTop}
            >
              ↑
            </button>
          </div>
        } />
        <Route path="/retailer/:vendor" element={<RetailerPage />} />
      </Routes>
    </Router>
  );
}

export default App;