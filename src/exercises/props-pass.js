/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

/**
 * Haz un componente que pasa "title"
 * al componente PassMeATitleProp
 */
export class PropsPass extends React.Component {
  static instructions = `
  Renderiza el componente \`PassMeATitleProp\` pasandle una prop \`title\`.

  __Pista__:
  \`\`\`js
                  props aquí :)
                       |
                       V
  <PassMeATitleProp _______ />
  \`\`\`
  `;

  render() {
    return null;
  }
}

/**
 * ***************
 * No toques esto!
 * ***************
 */
class PassMeATitleProp extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default withInstructions(PropsPass);
