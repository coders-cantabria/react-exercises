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
    return <WrapsChildrenInAHeader children={['Hola','react','h1']}/>;
  }
}

export class WrapsChildrenInAHeader extends React.Component {
  render() {
    return (<div>{
      this.props.children.map((child) => {
        return <h1>{child}</h1>;
      })
    }</div>);
  }
}

export default withInstructions(ParentPassingChildren);