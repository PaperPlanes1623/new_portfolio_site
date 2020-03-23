import React from 'react';
import { Icon } from 'semantic-ui-react';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="head">Find Me At:</h1>
      <div className="flex-container">
        <div className="social-icons">
          <Icon name="linkedin" size="massive" id="linkedin" style={{ color: 'dodgerblue' }} />
          <a href="https://www.linkedin.com/in/dylan-taft-454a1a17a/">LinkedIn</a>
        </div>
        <div className="social-icons">
          <Icon name="github" size="massive" style={{ color: 'black' }} />
          <a href="https://github.com/PaperPlanes1623">Github</a>
        </div>
        <div className="social-icons">
          <Icon name="stack overflow icon" size="massive" style={{ color: 'darkorange' }} />
          <a href="https://stackoverflow.com/users/11473467/dylan-t">Stack Overflow</a>
        </div>
        <div className="social-icons">
          <Icon name="facebook" size="massive" style={{ color: 'blue' }} />
          <a href="https://www.facebook.com/dylan.d.taft">Facebook</a>
        </div>
      </div>
      <footer>
        <p>Portfolio made by Dylan Taft</p>
        <a href="home">Back to top</a>
      </footer>
    </div>
  )
}

export default Contact;