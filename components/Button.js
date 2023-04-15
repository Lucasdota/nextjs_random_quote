import React from 'react';

class Button extends React.Component {
    render() {
      return (
      <div className="w-40 3xl:w-60 place-self-end overflow-visible p-2.5">
        <button id="new-quote" className="active:animate-click hover:bg-gray-300/40 3xl:text-xl 2xl:w-full sm:text-md sm:p-3 sm:w-24 text-white bg-white/20 border-solid border-1 border-gray-500/10 drop-shadow rounded text-sm p-2.5 mb-1 w-24 leading-2" onClick={this.props.handleChange}>New quote</button>
      </div>
      );
    }
};

export default Button