import React from 'react';

class MpFooter extends React.Component {
  render() {
    return (
      <div className="contact-foot">
        <div>
          <a href="tel:555-555-5555">
          <span className="icon-phone"></span>
          <span className="mobile-hide">555-555-5555</span>
          </a>
        </div>
        <div>
          <a href="mailto:hello@hello.com">
            <span className="icon-mail"></span>
            <span className="mobile-hide">hello@hello.com</span>
          </a>
        </div>      
      </div>


    )
  }
  
}

export default MpFooter;