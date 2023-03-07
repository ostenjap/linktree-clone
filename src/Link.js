import React from 'react';

function Link(props) {
  return (
    <div>
      <a href={props.url}>{props.name}</a>
    </div>
  );
}

export default Link;
