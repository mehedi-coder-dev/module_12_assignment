const ContactForm = () => {
  return (
    <>
      <h2 className="contact_title">Contact Form</h2>

      <div className="contactForm">
        <div className="contactLeft">
          <h3>Get in touch</h3>
          <div className="nameInfo">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div>
            {" "}
            <input className="subject" type="text" placeholder="Subject" />
          </div>
          <div className="textArea">
            {" "}
            <textarea name="" id="" cols="30" rows="10">
              Message
            </textarea>
          </div>
          <div className="btn">
            {" "}
            <button>Send Message</button>
          </div>
        </div>
        <div className="contactRight">
          <h2>Contact us</h2>
          <h4>
            <span>Address: </span> 198 west 21th
          </h4>
          <h4>
            <span>Phone: </span> +93246482
          </h4>
          <h4>
            <span>Email: </span> mdmehedihasan01790@gmail.com
          </h4>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
