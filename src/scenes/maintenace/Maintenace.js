import React, { Component } from "react";
import PropTypes from "prop-types";

export class Maintenance extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>We&rsquo;ll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience but we&rsquo;re still constructing awesome feature for this app
          </p>
          <p>&mdash; Waskita Studio</p>
        </div>
      </div>
    );
  }
}

export default Maintenance;
