import React from 'react';
import { Icon } from 'semantic-ui-react';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="head">Find Me At:</h1>
      <div className="flex-container">
        <div className="social-icons">
          <Icon name="github" size="massive" />
          <a href="https://github.com/PaperPlanes1623">Github</a>
        </div>
        <div className="social-icons">
          <Icon name="linkedin" size="massive" />
          <a href="https://github.com/PaperPlanes1623">LinkedIn</a>
        </div>
        <div className="social-icons">
          <Icon name="facebook" size="massive" />
          <a href="https://github.com/PaperPlanes1623">Facebook</a>
        </div>
        <div className="social-icons">
          <Icon name="codepen" size="massive" />
          <a href="https://github.com/PaperPlanes1623">Codepen</a>
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