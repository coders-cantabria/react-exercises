/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class StateInput extends React.Component {
  static instructions = `
  Vamos a hacer un contador utilizand _state_

  - Inicializa el estado.
  - Renderiza un \`<input type="text"/>\` cuyo \`value\` viene del estado
  - Guarde en estado el valor del input utilizando su prop \`onChange\`
  - Renderiza mismo valor del input en otro elemento cuyo id sea \`inputValue\`


  Con esto se ve la forma recomendada de trabajar con elementos \`input\`.

  __Pista:__

  Recuerda que el \`onChange\` recibe un evento…
  `;

  render() {
    return null;
  }
}

export default withInstructions(StateInput);
