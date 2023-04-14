import React from 'react';

class Quote extends React.Component {
  render() {
    return (
    <div className="bg-black/70 text-white px-7 py-5 rounded-t-xl col-start-1 col-end-11 row-start-1 row-end-7" id="text">
      <h3 id="phrase"><i className="fas fa-quote-left fa-sm" style={{
          color: "white",
          textShadow: "0.1 1 1 rgba(0, 0, 0, 0.486)"
          }}></i>&nbsp;&nbsp;{this.props.quote}</h3>
    </div>
    );
  }
};

export default Quote