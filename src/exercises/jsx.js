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
    return (
      <section>
        <header>
          <h1>Esto es JSX!</h1>
        </header>
        <div>
          <p>
            Fácil{' '}
            <span aria-label="fuerza" role="img">
              💪
            </span>
          </p>
        </div>
      </section>
    );
  }
}

export default withInstructions(Jsx);
