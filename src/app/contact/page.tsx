import React from 'react';


const Contact = () => {
return (
<center>
<div className="contact">
<h1>Contact Us</h1>
<div>
<label>Name</label> <br />
<input type="text" name="name" id="name"/>
</div>
<br />
<div>
<label>Email</label> <br />
<input type="email" name="email" id="email" />
</div>
<br />
<div>
<label>Message</label> <br />
<textarea name="message"id="message"rows={4}></textarea>
</div>
<div>
<button type="submit" className='button'>Submit</button>
<p>Feel free to reach out through our email</p>
    <p>suhailahmedaamro786@gmail.com</p>
</div >
</div>
</center>




);
};

export default Contact;
