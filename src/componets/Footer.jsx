import img from "../assets/img/ostad.png";
const Footer = () => {
  return (
  <div className="main_footer">
        <div className="sub_footer">
      <div>
        {" "}
        <div>
          <img src={img} alt="logo" />
        </div>
        <p>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
      </div>
      <div>
        <h2> কুইক লিংক</h2>
        <p>আপকামিং লাইভ ব্যাচ</p>
        <p>ফ্রী লাইভ ক্লাস</p>
        <p>লাইভ ওয়ার্কশপ</p>
        <p>ব্লগ</p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
