/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import withInstructions from '../with-instructions';

/**
 * Este componente debe:
 *
 * Renderizar sus "children" dentro de esta estructura:
 *
 * section > div > p
 *
 */
export class MapRender extends React.Component {
  static instructions = `
  Este componente recibe una prop \`languages\` que es un array de objetos
  con forma \`{ name: String, type: String }\`.

  Renderiza una \`<table>\` cada fila es una elemento del array con \`name\`
  y \`type\` en las celdas.

  __Pista:__

  Con [\`Array.prototype.map\`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map),
  mapeamos los elementos del array a JSA elementos \`<tr/>\`.

  \`\`\`js
  languages.map( language => { return ??? } );
  \`\`\`
  `;

  static propTypes = {
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['natural', 'programming']).isRequired,
      }),
    ),
  };

  static defaultProps = { languages: [] };

  render() {
    return (<table>
       {this.props.languages.map((row) =>{
         return (
          <tr>
          <td>{row.name}</td>
          <td>{row.type}</td>
        </tr>
         )
       })
      }
      
    </table>);
  }
}

/**
 * ***************
 * No toques esto!
 * ***************
 */
export default withInstructions(
  class extends React.Component {
    static instructions = MapRender.instructions;

    render() {
      return (
        <MapRender
          languages={[
            { name: 'Spanish', type: 'natural' },
            { name: 'English', type: 'natural' },
            { name: 'JavaScript', type: 'programming' },
            { name: 'Haskell', type: 'programming' },
          ]}
        />
      );
    }
  },
);
