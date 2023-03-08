import React from 'react';

function Link(props) {
  return (
      <div>
      <h1>{props.number}</h1>
      <a href={props.url}>{props.name}</a>
    </div>
  );
}

export default Link;
