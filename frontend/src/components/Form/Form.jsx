import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 20px;
  position: relative;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  background-color: #007bff;
  height: 100%;
`;

const Step = styled.h2`
  font-size: 18px;
  margin-top: 20px;
`;

const Form = styled.form`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    city: '',
    documentType: '',
    uploadedDocument: null,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleFormDataChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    setFormData({ ...formData, uploadedDocument: file });
  };

    const handleSubmit = () => {
        alert('Your application is submitted successfully!');
    };

  return (
    <Container>
      <ProgressBar>
        <Progress progress={(step / 4) * 100} />
      </ProgressBar>
      <Step>Step {step} - {step === 1 ? 'Basic Details' : step === 2 ? 'Upload Form' : step === 3 ? 'Review' : 'Submit'}</Step>
      <Form visible={step === 1}>
        <Input type="text" name="fullName" placeholder="Full Name" onChange={handleFormDataChange} />
        <Input type="email" name="email" placeholder="Email" onChange={handleFormDataChange} />
        <Input type="text" name="age" placeholder="Age" onChange={handleFormDataChange} />
        <Input type="text" name="city" placeholder="City" onChange={handleFormDataChange} />
        <Button onClick={handleNextStep}>Next</Button>
      </Form>
      <Form visible={step === 2}>
        <Input type="text" name="documentType" placeholder="Type of Document" onChange={handleFormDataChange} />
        <input type="file" name="uploadedDocument" onChange={handleFileChange} />
        {/* <Button onClick={}>Submit</Button> */}
        <Link to="/dashboard">
            <Button onClick={handleSubmit}>Submit</Button>
        </Link>
      </Form>
      <Form visible={step === 4}>
        <p>Thank you for your submission!</p>
      </Form>
    </Container>
  );
};

export default Register;
