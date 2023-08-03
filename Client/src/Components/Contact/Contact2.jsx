import React, { useState } from 'react';
import "./Contact.css";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

function Contact2() {
    const [loading, setLoading] = useState(false);
    const customId = "contact-id";

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName.trim()) {
            toast.error('Please enter your first name.', { autoClose: 3000 }, { toastId: customId });
            return;
        }
        if (!formData.lastName.trim()) {
            toast.error('Please enter your last name.', { autoClose: 3000 }, { toastId: customId });
            return;
        }

        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast.error('Please enter a valid email address.', { autoClose: 3000 }, { toastId: customId });
            return;
        }

        if (!formData.mobileNumber.trim()) {
            toast.error('Please enter your number.', { autoClose: 3000 }, { toastId: customId });
            return;
        }

        if (!formData.message.trim()) {
            toast.error('Please enter your message.', { autoClose: 3000 }, { toastId: customId });
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('https://main-backend-39e3.onrender.com/submit-form', formData);
            setLoading(false);
            console.log(response.data); // You can handle the response as needed
            toast.success('Form submitted successfully!', { autoClose: 3000 });
            // Clear form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
                message: ''
            });

        } catch (error) {
            setLoading(false);
            console.error('Error submitting form:', error);
            toast.error('Failed to submit form.', { autoClose: 3000 }, { toastId: customId });

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
                            <form method='post' onSubmit={handleSubmit}>
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    id="form_name CCHH"
                                                    type="text"
                                                    name="firstName" // Changed "name" attribute to "firstName"
                                                    className="form-control"
                                                    placeholder="Please enter your firstname . ."
                                                    required="required"
                                                    data-error="Firstname is required."
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    id="form_lastname CCHH"
                                                    type="text"
                                                    name="lastName" // Changed "name" attribute to "lastName"
                                                    className="form-control"
                                                    placeholder="Please enter your lastname"
                                                    required="required"
                                                    data-error="Lastname is required."
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
                                                    id="form_email CCHH"
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Please enter your email"
                                                    required="required"
                                                    data-error="Valid email is required."
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    id="form_phone CCHH"
                                                    type="tel"
                                                    name="mobileNumber" // Changed "name" attribute to "mobileNumber"
                                                    className="form-control"
                                                    placeholder="Please enter your phone"
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
                                                    id="form_message CCHHCC"
                                                    name="message"
                                                    className="form-control"
                                                    placeholder="Message"
                                                    rows={4}
                                                    required="required"
                                                    data-error="Please, leave us a message."
                                                    defaultValue={""}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                            <div className="col-md-13">
                                                <button
                                                    type="submit "
                                                    className="whowe_btn whowe_btn-success btn-success whowe_btn-send"
                                                    defaultValue="Submit Now"
                                                >
                                                    Submit
                                                </button>
                                            </div>
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
                    <Loader />
                </div>
            )}
            <ToastContainer position='top-right' autoClose={4000} limit={1} style={{ zIndex: -1, position: "fixed", top: "10%" }} closeButton />
        </>
    )
}

export default Contact2;
