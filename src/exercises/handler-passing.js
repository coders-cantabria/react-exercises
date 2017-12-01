/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import withInstructions from '../with-instructions';

/**
 * Este componente crea un handler.
 */
export class HandlerPassing extends React.Component {
  static instructions = `
  Este componente recibe la prop \`handler\`.

  Crea un \`button\` que llame a esta prop cuando sea haga click.
  `;

  static propTypes = { hanlder: PropTypes.func };
  static defaultProps = { handler: () => {} };

  render() {
    return <button onClick={this.props.handler}>Jaled</button>;
  }
}

/**
 * ***************
 * No toques esto!
 * ***************
 */
export default withInstructions(
  class extends React.Component {
    static instructions = HandlerPassing.instructions;
    handler = () => alert('Button was clicked!');

    render() {
      return <HandlerPassing handler={this.handler} />;
    }
  },
);
