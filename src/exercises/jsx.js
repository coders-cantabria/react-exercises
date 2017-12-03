/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class Jsx extends React.Component {
  static instructions = `
  Modifica este componente para que renderize _algo_.

  ¡No importa qué!

  __Pista__: Devuelve JSX del \`render()\`.
  `;

  render() {
    return (<div>
    	<h1>Hola, algo</h1>
    	<p>juas juas</p>

    	</div>);
  }
}

export default withInstructions(Jsx);
