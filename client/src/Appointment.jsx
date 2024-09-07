import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './appoint.css';

const Appointment = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    symptoms: "",
    date: "",
    department: "",
    gender: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Validate each field
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        errors[key] = t('required', { key: t(key) });
        formIsValid = false;
      } else {
        errors[key] = "";
      }
    }

    // Set errors
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      navigate('/Billing');
    }
  };

  const hasErrors = Object.values(errors).some(error => error);

  return (
    <div id="parent-appoint">
      <div className="language-switch">
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('ur')}>Urdu</button>
      </div>

      <div className="appointment-container">
        <h2>{t('medicalAppointmentForm')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="patientName"
              placeholder={t('patientName')}
              value={formData.patientName}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phoneNumber"
              placeholder={t('phoneNumber')}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">{t('department')}</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">{t('gender')}</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="symptoms"
              placeholder={t('symptoms')}
              value={formData.symptoms}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className={`form-errors ${hasErrors ? 'show' : ''}`}>
            {Object.values(errors).map((error, index) => (
              error ? <p key={index} className="error">{error}</p> : null
            ))}
          </div>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
