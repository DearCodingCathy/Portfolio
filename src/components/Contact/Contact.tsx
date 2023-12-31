import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ReactComponent as Send } from "../../assets/send.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x7k7hgn",
        "template_yujwjsu",
        form.current,
        "DWoMijZESYOqkBjXt"
    ).then(
      e.target.reset()
      )
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                CatherineoBalogun@gmail.com
              </span>

              <a
                href="mailto:catherineobalogun@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* <div className="contact__card">
              <i className="bx bx1-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Phone Number</h3>
              <span className="contact__card-data">718-704-9689</span>

              <a href="#Home" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div> */}

            {/* <div className="contact__card">
              <i className="bx bx1-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>

              <a href="#Home" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div> */}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Tell me about your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Tell me about your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <Send fill="var(--container-color)" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
