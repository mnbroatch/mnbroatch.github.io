import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export default props => (
  <SyntaxHighlighter
    customStyle={{ paddingBottom: 320 }}
    language="javascript"
  >
    {props.children}
  </SyntaxHighlighter>
)
