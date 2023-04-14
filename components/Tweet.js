import React from 'react';

function Tweet (props) {
  return (
    <div className="w-16 xs:w-14 md:w-20 lg:w-24 h-14 flex justify-center items-center">
      {/* props being used to share current message */}
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${props.msg.quote}"+%20${props.msg.author}%0D%0A%0D%0A&hashtags=quotes,bible,Jesus`} target="_blank" rel="noreferrer" className='overflow-visible'>
        <i className="fab fa-twitter fa-2x text-white drop-shadow hover:text-sky-500 active:animate-click"></i>
      </a>
    </div>
  )
}

export default Tweet