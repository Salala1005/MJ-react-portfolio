import { useState } from "react";

function ContactForm() {
  const [email, setEmail] =useState('');
  const [message, setMessage] =useState('');

      function submitForm() {
        console.log('Your Email is ' + email)
        console.log('Your Message is ' + message)
      }
      function handleEmail(e) {
        setEmail(e.target.value)
      }
      function handleMessage(e) {
        setMessage(e.target.value)
      }
      function handleSubmit(e) {
        e.preventDefault();
        // console.log("Submitted email:", email, "and message:", message);
        if (email === "" || message ==="") {
          alert('Please write your Email and Messge')
        } else if (!email.includes("@")) {
          alert('Please write valid Email address')
        } else {
        alert('Your Message has sent successfully! Thank you.')};
        setEmail('');
        setMessage('');
      }

  return (
    <div>
      <div className="mb-3 container col-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmail}/>
        </div>
        <div className="mb-3 container col-6">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessage}></textarea>
        </div>
        <div className="mb-3 container col-6">
           <input className="btn btn-primary btn-light" type="submit" value="Submit" onClick={handleSubmit} />
           </div>
    </div>
  )
}

export default ContactForm;
