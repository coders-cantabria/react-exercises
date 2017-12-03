/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class PropsRender extends React.Component {
  static instructions = `
  Este componente va a recibir un prop: \`subTitle\`. Renderizala como texto.

  __Pista__: En el contexto de JSX, utiliza {llaves} para intercalar una expression de JavaScript, como una variable por ejemplo ;)
  `;

  render() {
    return (<div>{this.props.subTitle}</div>);
  }
}

/**
 * ***************
 * No toques esto!
 * ***************
 */
export default withInstructions(
  class extends React.Component {
    static instructions = PropsRender.instructions;
    render() {
      return <PropsRender subTitle="Si vemos este subtítulo, éxito!" />;
    }
  },
);
