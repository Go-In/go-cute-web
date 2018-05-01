import React from 'react'

export default (props) => (
  <div className="card">
    <div className="card-header">
      {props.title}
    </div>
    <div className="card-body">
      {props.children}
      <div className="mt-3">

      </div>
      <p class="blockquote-footer">{props.description}</p>
    </div>
  </div>
)