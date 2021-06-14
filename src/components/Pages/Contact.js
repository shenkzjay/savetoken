import React from "react";



function Contact(){
    return(
        <div id="Contact" className="contact">
            <div className="contact__txt--contact">CONTACT</div>
            <div className="ball">
                
                    <form>
                        <label>Name:</label>
                        <input type="text" />
                        <label>Email</label>
                        <input type="text" />
                        <textarea rows="5" cols="5" className="textarea"></textarea>
                        <button className="contact--btn">Send</button>
                    </form>
                

            </div>
            <div className="contact__txt--us">US</div>
            <div className="contact__footer">safetoken  copyright 2021</div>
        </div>)
}

export default Contact;