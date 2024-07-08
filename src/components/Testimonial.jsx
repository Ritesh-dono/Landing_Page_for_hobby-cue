import React from 'react';
import './Testimonial.css';

const Testimonial = ({ text, name, profession, audioSrc }) => {
  return (
    <div className="testimonial-container container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className=" main p-4  rounded text-primary-emphasis" style={{ backgroundColor:  '#F7F5F9' }}>
            <div className="testimonial-header mb-3 d-flex align-items-center">
              <i className="quote-icon me-2" >❝</i>
              <h4 className="mb-0">Testimonials</h4>
            </div>
            <blockquote className="blockquote">
              <p className="mb-4">{<span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nulla et, pariatur debitis numquam ab suscipit aspernatur tempora, optio, quasi laborum sit sequi fugiat saepe voluptatibus. Repellendus dolore labore sed!</span>}</p>
            </blockquote>


            < div className="audio-section position-relative mb-3">
              <audio controls  className=" auio w-75">
                <source src={audioSrc} type="audio/mp4" />
               ok 
              </audio>
         

</div>           
            
            <div className="d-flex align-items-center justify-content-end mt-3">
              <img src="1.jpeg" alt={name} className="testimonial-image rounded-circle me-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />

              
              <div>
                <h6 className="mb-0">{<span>Sudharshan</span>}</h6>
                <p className="profession mb-0">{<span style={{color:" #0096C8"}}>Dancer</span>}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
