/** @format */

import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

import * as exercises from './exercises';

class App extends Component {
  render() {
    const params = new URL(window.location.href).searchParams;
    const Content = exercises[params.get('exercise')]
      ? exercises[params.get('exercise')]
      : Welcome;

    return (
      <main className="App">
        <nav className="App__Nav">
          {Object.keys(exercises).map(component => (
            <a key={component} href={`/?exercise=${component}`}>
              {component}
            </a>
          ))}
        </nav>
        <Content />
        <footer>
          <nav className="App__Footer-Nav">
            <a href="/">Home</a>
            <a href="https://reactjs.org/docs/">React docs</a>
          </nav>
        </footer>
      </main>
    );
  }
}

const welcomeInstructions = marked(`
Esto consiste en una serie de ejercicios para ir practicando conceptos.

Se ven en la web y podrás ver la consola e interactuar con cada ejercicio.

Por otro lado, cada ejercicio tiene sus pruebas que ayudarán a saber si cumple con la
especificación, tipo <abbr title="Test Driven Development">TDD</abbr>.

Están ordenados progresivamente, pero no hay obligación de seguir paso a paso.

Recuerda, jsx es:

<ComponentName propName="string-value" orJavaScriptProp={ [ 'jsExpressions', 'go', 'in', 'braces' ].join(' ') } booleanProp >

Haz clic en un [ejercicio](/?exercise=Jsx) para empezar.

Antes de empezar:

1. Instalar dependencias:

   \`\`\`yarn\`\`\`

1. Arrancar app:

   \`\`\`yarn start\`\`\`

1. Arrancar pruebas:

   \`\`\`yarn test\`\`\`

`);

const welcomeContent = (
  <section className="Welcome">
    <header>
      <h1>Ejercicios</h1>
    </header>
    <div dangerouslySetInnerHTML={{ __html: welcomeInstructions }} />
  </section>
);

function Welcome() {
  return welcomeContent;
}

export default App;
