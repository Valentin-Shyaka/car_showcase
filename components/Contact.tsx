'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import CustomButton from './CustomButton';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
       
        e.preventDefault();
    
        emailjs.sendForm('service_wq2ho1s', 'template_4hzkneq', form.current, 'v75ycDi95WzXVgQnr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
  return (
    <section className="contact section " id="contact">
       

        <div className="contact__container container grid ">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title"> Email</h3>
                        <span className="contact__card-data">eTware@gmail.com</span>
                        <a href="mailto:vava1lantern7@gmail.com.com" className="contact__button">Reach us
                        <i className="bx bx-right-arrow-alt container__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title"> Instagram</h3>
                        <span className="contact__card-data">@eTware_RW</span>
                        <a href="https://api.whatsapp.com.send?phone=0737698591&text=Hello, more information!" className="contact__button">Reach Us
                        <i className="bx bx-right-arrow-alt container__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title"> X (twitter)</h3>
                        <span className="contact__card-data">@eTware_RW</span>
                        <a href="https://m.me/BIGWI%20%Valentin" className="contact__button">Reach Us
                        <i className="bx bx-right-arrow-alt container__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Mail us</h3>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text"  name="name" className="contact__form-input" placeholder="Name"></input>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email"  name="email" className="contact__form-input" placeholder="Email"></input>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">message</label>
                        <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="How may we help you?"></textarea>
                    </div>
                    <CustomButton btnType={'submit'}  active={false} text='Send message'/>
                    
                        
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact