import React from 'react';
import { Icon } from 'semantic-ui-react';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="head">Find Me At:</h1>
      <div className="flex-container">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/dylan-taft-454a1a17a/">
            <Icon name="linkedin" size="massive" id="linkedin" style={{ color: 'dodgerblue' }} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/PaperPlanes1623">
            <Icon name="github" size="massive" style={{ color: 'white' }} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://stackoverflow.com/users/11473467/dylan-t">
            <Icon name="stack overflow icon" size="massive" style={{ color: 'darkorange' }} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/dylan.d.taft">
            <Icon name="facebook" size="massive" style={{ color: 'blue' }} />
          </a>
        </div>
      </div>
      <footer>
        <p>Site made by Dylan Taft</p>
        <a href="home">Back to top</a>
      </footer>
    </div >
  )
}

export default Contact;