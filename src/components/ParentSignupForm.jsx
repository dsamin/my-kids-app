import React, { useState } from 'react';
import './ParentSignupForm.css';
import SuccessModal from './SuccessModal';

const ParentSignupForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    childName: '',
    childAge: '',
    interests: [],
    frequency: 'daily',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const interestOptions = [
    '🎨 Art & Crafts',
    '🎮 Video Games',
    '📚 Reading',
    '🎭 Drama & Pretend Play',
    '🧪 Science',
    '🎵 Music',
    '⚽ Sports',
    '🌿 Nature & Outdoors',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    setShowSuccessModal(true);
  };

  return (
    <>
      <div className="signup-container">
        <div className="form-header">
          <h1>✨ Welcome to KidsPlay Daily! ✨</h1>
          <p>Get personalized activities, stories, and games for your little one 🎈</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>👋 Parent's Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label>📱 Contact Information</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>👶 Child's Name</label>
            <input
              type="text"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="Your child's name"
              required
            />
          </div>

          <div className="form-group">
            <label>🎂 Child's Age</label>
            <input
              type="number"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              placeholder="Age in years"
              min="1"
              max="12"
              required
            />
          </div>

          <div className="form-group">
            <label>🌟 What does your child love? (Select all that apply)</label>
            <div className="interests-grid">
              {interestOptions.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  className={`interest-button ${formData.interests.includes(interest) ? 'selected' : ''}`}
                  onClick={() => handleInterestChange(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>📅 How often would you like to receive activities?</label>
            <select
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              required
            >
              <option value="daily">Daily Magic ✨</option>
              <option value="weekly">Weekly Bundle 📦</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Start the Adventure! 🚀
          </button>
        </form>
      </div>
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        frequency={formData.frequency}
      />
    </>
  );
};

export default ParentSignupForm; 