import React from 'react'
import Navbar from '../Components/Navbar';
import RegisterPatientForm from '../Components/RegisterPatientForm';

const RegisterPatient = () => {

return (
    <div className='flex gap-6'>
        <Navbar/>
        <RegisterPatientForm/>
    </div>
)
}

export default RegisterPatient