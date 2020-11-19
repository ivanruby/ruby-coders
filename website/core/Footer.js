/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">         
        <section className="copyright">
          <a
            href="https://educationmakers.ca/"
            target="_blank">
            <img
              src='/ruby-coders/docs/assets/img/edmakers-logo.png'
              alt="Education Makers"
              height="40"
            />
          </a>
          <br/>
          {this.props.config.copyright}
          </section>
      </footer>
    );
  }
}

module.exports = Footer;
