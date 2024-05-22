import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-6 l-5 " style={{ paddingLeft: "50px" }}>
            <h3>Contact Details</h3>
            <p>
              ☎️<strong>Phone:</strong> +91 2348567890
            </p>
            <p>
              📧 <strong>Email:</strong> RTBHospitals@gmail.com
            </p>
            <p>
              📠 <strong>Fax:</strong> +91 284 127 591
            </p>
            <p>
              🏥 <strong>Address:</strong> RTB Hospital , Bangalore, India
            </p>
          </div>
          <div className="col-md-6">
            <h3>Location</h3>
            <iframe
              title="Hospital Location"
              width="150%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.0422091572152!2d77.71426303854679!3d12.966449796837125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1223fc9dd1db%3A0x679620f7a86846b8!2sBrookefield%20Multi%20Speciality%20Hospital%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1709742126524!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="p-3 mt-3 bg-dark text-white sticky-bottom text-center">
        All &copy; RTBHospitals.com | Copy Rights Reserved
      </footer>
    </div>
  );
}
