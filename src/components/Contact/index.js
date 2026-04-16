import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

// Initialize EmailJS
emailjs.init('SybVGsYS52j2TfLbi');

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 16px 32px rgba(133, 76, 230, 0.15);
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    opacity: 0.95;
    box-shadow: 0 20px 40px rgba(133, 76, 230, 0.25);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(133, 76, 230, 0.18);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`



const Contact = () => {

  const [snackbar, setSnackbar] = React.useState({ open: false, severity: 'success', message: '' });
  const [loading, setLoading] = React.useState(false);
  const form = useRef();

  const validateForm = () => {
    const formData = new FormData(form.current);
    const from_email = formData.get('from_email');
    const from_name = formData.get('from_name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!from_email || !from_name || !subject || !message) {
      setSnackbar({ open: true, severity: 'error', message: 'Please complete all fields before sending.' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      setSnackbar({ open: true, severity: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const formData = new FormData(form.current);
    
    try {
      // Method 1: Try FormSubmit (most reliable, no setup needed)
      console.log('Attempting to send via FormSubmit...');
      const formSubmitResponse = await fetch('https://formsubmit.co/ajax/aklijoshuaericy@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (formSubmitResponse.ok) {
        console.log('✓ Email sent successfully via FormSubmit');
        setLoading(false);
        setSnackbar({ open: true, severity: 'success', message: '✓ Message sent successfully! I will get back to you soon.' });
        form.current.reset();
        return;
      } else {
        throw new Error('FormSubmit failed');
      }
    } catch (formSubmitError) {
      console.log('FormSubmit failed, trying EmailJS...', formSubmitError);
      
      // Method 2: Fallback to EmailJS
      try {
        const result = await emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current);
        console.log('✓ Email sent successfully via EmailJS', result);
        setLoading(false);
        setSnackbar({ open: true, severity: 'success', message: '✓ Message sent successfully! I will get back to you soon.' });
        form.current.reset();
        return;
      } catch (emailjsError) {
        console.error('Both methods failed:', emailjsError);
        setLoading(false);
        setSnackbar({ open: true, severity: 'error', message: '✗ Unable to send message. Please try again later or contact via email.' });
      }
    }
  }



  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <input type="hidden" name="to_email" value="aklijoshuaericy@gmail.com" />
          <ContactInput type="email" placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" value={loading ? "Sending..." : "Send"} disabled={loading} />
        </ContactForm>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  )
}

export default Contact