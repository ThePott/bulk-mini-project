
import { Box, Typography } from '@mui/material';
import type { Components } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownComponents: Components = {
  // Step 2: Map heading elements
  h1: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h4" component="h2" gutterBottom>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h4" component="h3" gutterBottom>
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h4" component="h4" gutterBottom>
      {children}
    </Typography>
  ),
  h5: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h6" component="h5" gutterBottom>
      {children}
    </Typography>
  ),
  h6: ({ children }) => (
    <Typography sx={{ fontWeight: 600 }} variant="h6" component="h6" gutterBottom>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography>{children}</Typography>
  ),
  code: ({ children, className, ...props }) => {
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
  },
}

export default MarkdownComponents