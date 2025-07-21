import { Typography, List, ListItem } from '@mui/material';
import type { Components } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Fold Level 2
const MarkdownComponents: Components = {
  // Step 2: Map heading elements
  h1: ({ children }) => (
    <Typography sx={{ fontWeight: 600, fontSize: "30px" }} variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography sx={{ fontWeight: 600, fontSize: "24px", color: "oklch(0.75 0 0)", paddingTop: "24px", paddingBottom: "8px" }} variant="h4" component="h2">
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h4" component="h3" gutterBottom>
      {children}
    </Typography>
  ),

  p: ({ children }) => (
    <Typography>{children}</Typography>
  ),

  // List components
  ul: ({ children }) => (
    <List sx={{ paddingLeft: 2 }}>
      {children}
    </List>
  ),
  
  ol: ({ children }) => (
    <List component="ol" sx={{ paddingLeft: 2 }}>
      {children}
    </List>
  ),
  
  li: ({ children }) => (
    <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
      <Typography component="span">{children}</Typography>
    </ListItem>
  ),

  code: ({ children, className }) => {
    // Check if this code is inside a pre tag
    const isCodeBlock = className?.startsWith('language-');

    if (isCodeBlock && className) {
      // Extract language from className (e.g., "language-tsx" -> "tsx")
      const language = className.replace('language-', '');
      console.log("---- language:", language)
      return (
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          customStyle={{
            margin: 0,
            padding: '16px',
            fontSize: '0.875rem',
            fontFamily: '"Fira Code", Monaco, "Lucida Console", monospace'
          }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    }

    return (
      <code
        style={{
          backgroundColor: 'oklch(0.3 0 0)',
          padding: '2px 4px',
          borderRadius: '3px',
          fontFamily: '"Fira Code", Monaco, "Lucida Console", monospace',
          fontSize: "inherit"
        }}
      >
        {children}
      </code>
    );
  },
}

export default MarkdownComponents