import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; 
import axios from 'axios';

const Farm = () => {
  const [formData, setFormData] = useState({
    budget: '',
    landArea: '',
    soil: '',
    location: '',
    season: '',
    weatherCondition: '',
    waterAvailability: '',
    annualRainfall: '',
    equipment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      console.log(response.data);
      // Redirect to another page 
      window.location.href = '/newpage';
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h2>My Farm</h2>
          <div className="row">
            {['budget', 'land Area', 'soil'].map((field) => (
              <div className="col-md-4 col-sm-6 col-12 form-group" key={field}>
                <div className="input-box">
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {['Location', 'Season', 'Weather Condition'].map((field) => (
              <div className="col-md-4 col-sm-6 col-12 form-group" key={field}>
                <div className="input-box">
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {['Water Availability', 'Annual Rainfall', 'Equipment'].map((field) => (
              <div className="col-md-4 col-sm-6 col-12 form-group" key={field}>
                <div className="input-box">
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                  <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                </div>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Farm;