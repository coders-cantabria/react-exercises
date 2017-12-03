/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class EventHandling extends React.Component {
  static instructions = `
  Renderiza un \`button\` cuyo \`onClick\` loguea a la consola.

  __Pista__: \`button\` accepta una prop \`onClick\`…
  `;

  // handler = ???

  render() {
    return (<button onClick={() => (console.log("click"))}>Boton</button>);
  }
}

export default withInstructions(EventHandling);
