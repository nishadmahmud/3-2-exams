import ReactMarkdown from 'react-markdown';
import { renderToString } from 'react-dom/server';
import React from 'react';

const markdown = `
Question 1
<details>
<summary>Answer</summary>

This is the answer
</details>
`;

const html = renderToString(React.createElement(ReactMarkdown, null, markdown));
console.log("RENDERED HTML:");
console.log(html);
