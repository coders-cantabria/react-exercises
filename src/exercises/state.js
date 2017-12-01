/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class State extends React.Component {
  static instructions = `
  Vamos a hacer un contador utilizand _state_

  - Inicializa el estado de \`clicks\` a \`0\`
  - Renderiza un \`<button>\` que incremente la cuenta
  - Renderiza el valor de \`clicks\` cuenta en un elemento cuyo id sea \`clicks\`


  __Pista:__

  Se utiliza \`this.setState( function( state ) { return newState } )\` para modificar
  el estado del componente.

  Se puede _leer_ el estado en \`this.state\`.

  `;

  state = {};

  render() {
    return null;
  }
}

export default withInstructions(State);
