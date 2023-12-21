import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const customId = "contact-id";

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mobile number validation: Allow only numbers and a maximum of 10 digits
    if (name === "mobileNumber") {
      const isValidMobileNumber = /^[0-9]{0,10}$/.test(value);
      if (!isValidMobileNumber) return; // Ignore invalid input
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email) || !formData.mobileNumber.trim() || !formData.message.trim()) {
      toast.error('Please fill out all fields correctly.', { autoClose: 3000, toastId: customId });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/submitForm', formData);
      setLoading(false);
      console.log(response.data); // You can handle the response as needed
      toast.success('Form submitted successfully!', { autoClose: 3000 });
      // Clear form fields after successful submission
      setFormData(initialFormData);

      // Send confirmation email to the user
      sendConfirmationEmail(formData.email);
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data);
      }
      toast.error('Failed to submit form.', { autoClose: 3000, toastId: customId });
    }
  };

  const sendConfirmationEmail = async (recipientEmail) => {
    try {
      // Replace with your actual EmailJS service credentials
      const EMAILJS_SERVICE_ID = 'service_zy31zko';
      const EMAILJS_TEMPLATE_ID = 'template_k8ojztm';
      const EMAILJS_USER_ID = 'XQcgXepYf-uKanm9f';

      const templateParams = {
        to_email: recipientEmail,
        // to_email: email,

        // Add any other parameters your template requires
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);
      console.log('Confirmation email sent successfully!');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };

  return (
    <>
      <div className="dots_container" id="indicator" />
      <div className="input__box_main">
        <div className="input__box" data-animate-effect="fadeInLeft">
          <div className="row1">
            <div className="centerplease" style={{ color: "#07abf1" }}>
              <h1>ASK YOUR QUESTION</h1>
            </div>
            <div className="container input_container">
              <form onSubmit={handleSubmit}>
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="Please enter your first name . ."
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_lastname"
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Please enter your last name . ."
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email . ."
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_phone"
                          type="tel"
                          name="mobileNumber"
                          className="form-control"
                          placeholder="Please enter your phone number . ."
                          value={formData.mobileNumber}
                          onChange={handleChange}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Write message here . ."
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                        <div className="help-block with-errors" />
                      </div>

                      <button className='home_btnwa' style={{ textDecoration: "none", color: "white" }}>
                        Submit
                      </button>

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'start', marginTop: '20px' }}>
          <div>Loading...</div>
        </div>
      )}
      <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: -1, position: "fixed", top: "10%" }} closeButton />
    </>
  );
}

export default ContactForm;
