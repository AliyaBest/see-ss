import React from 'react'

const CodePreview = (props) => {
  return (
    <div>
      <h6>CSS CODE</h6>

        <div id="codepreview">
          <ul>
            <li>{`{ color: ${props.color};`}</li>
            <li>{`background: ${props.background}; }`}</li>
          </ul>
        </div>
    </div>
  )
}

export default CodePreview
