import React from 'react';

class Author extends React.Component {
    render() {
        return (
        <div className="bg-black/70 text-white text-base mb-5 px-7 py-5 pt-1 rounded-b-xl flex justify-end col-start-1 col-end-11 row-start-7 row-end-8">
        <p id='author'>{this.props.author}</p>
        </div>
        );
    }
};

export default Author