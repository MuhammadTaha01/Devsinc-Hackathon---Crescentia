// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English and Urdu translations
const resources = {
  en: {
    translation: {
      "patientName": "Patient Name",
      "phoneNumber": "Phone Number",
      "email": "Email",
      "symptoms": "Symptoms",
      "date": "Date",
      "department": "Department",
      "gender": "Gender",
      "time": "Time",
      "required": "{{key}} is required",
      "submit": "Make an appointment",
      // Add more translations as needed
    }
  },
  ur: {
    translation: {
      "patientName": "مریض کا نام",
      "phoneNumber": "فون نمبر",
      "email": "ای میل",
      "symptoms": "علامات",
      "date": "تاریخ",
      "department": "محکمہ",
      "gender": "جنس",
      "time": "وقت",
      "required": "{{key}} درکار ہے",
      "submit": "وقت مقرر کریں",
      // Add more translations as needed
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
