import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const RegisterPatientForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    contact_number: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    emergency_contact_name: '',
    emergency_contact_relationship: '',
    emergency_contact_number: '',
    medical_history: '',
    current_medications: '',
    insurance_provider: '',
    insurance_policy_number: '',
    registration_date: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.date_of_birth) newErrors.date_of_birth = "Date of birth is required";
    // Add more validations as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/register-patient', formData);
        alert(response.data.message);
      } catch (error) {
        console.error('Error registering patient:', error);
      }
    }
  };

  return (
    <div className='mt-10'>
        <div className="flex ml-[80%]">
            <button className='bg-blue-gray-500 text-white font-bold text-[20px] rounded-full px-9'>Log In</button>
        </div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Register Patient
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter the details of the patient to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full max-w-screen-lg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.keys(formData).map((key) => (
              <div className="flex flex-col gap-4" key={key}>
                <Typography variant="h6" color="blue-gray">
                  {key.replace(/_/g, ' ').toUpperCase()}
                </Typography>
                <Input
                  size="lg"
                  placeholder={key.replace(/_/g, ' ').toUpperCase()}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required={['first_name', 'email', 'date_of_birth'].includes(key)}
                />
                {errors[key] && <Typography color="red" className="text-sm">{errors[key]}</Typography>}
              </div>
            ))}
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPatientForm;
