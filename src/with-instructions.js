/** @format */

import React from 'react';
import marked from 'marked';
import './Exercise.css';

export default function(WrappedComponent) {
  return class extends React.Component {
    static displayName = `WithInstructions(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Exercise'})`;
    render() {
      return (
        <div className="Exercise">
          {WrappedComponent.instructions && (
            <div
              className="Exercise__Instructions"
              dangerouslySetInnerHTML={{
                __html: marked(WrappedComponent.instructions),
              }}
            />
          )}
          <div className="Exercise__Component">
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
