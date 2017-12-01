/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class ParentPassingChildren extends React.Component {
  static instructions = `
  Vamos a trabajar con dos componentes.

  El componente \`ParentPassingChildren\` renderiza \`WrapsChildrenInAHeader\`
  y le pasa \`children\`. Esto es el contenido _entre las etiquetas_.

  WrapsChildrenInAHeader renderiza los children dentro de una etiqueta \`<h1>\`.
  `;

  render() {
    return null;
  }
}

export class WrapsChildrenInAHeader extends React.Component {
  render() {
    return null;
  }
}

export default withInstructions(ParentPassingChildren);
