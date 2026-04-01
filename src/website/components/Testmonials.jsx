import React from "react";
// import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    text: `"I loved working on this project. It was a perfect balance of challenging and achievable, and I learned a lot about project management and time management."`,
    name: "Venkat",
    rating: 5,
  },
  {
    id: 2,
    text: `"This project website was a great learning experience. It allowed me to apply theoretical knowledge to a practical scenario, and I feel much more confident in my skills now."`,
    name: "Sagar",
    rating: 4,
  },
  {
    id: 3,
    text: `"I really appreciated the hands-on approach of this project. It was challenging, but it forced me to think critically and problem-solve in real time."`,
    name: "Renuka",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-overlay">
        <h2 className="testimonials-heading">What Our Customers Say</h2>

        <div className="testimonials-slider">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className="testimonial-card" key={index}>
                {/* <div className="quote-circle">❝</div> */}

                <p className="testimonial-text">{item.text}</p>

                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {star <= item.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <h3 className="customer-name">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;