import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useFruitBoxContext } from "./_FruitBoxBase";
import {
  destructuredExpandedCode,
  destructuredSummarizedCode,
  oneByOneExpandedCode,
  oneByOneSummarizedCode
} from "../assets/summaryCode";

const codeVisibilityArray = ["COLLAPSED", "SUMMARIZED", "EXPANDED"] as const
type CodeVisibility = typeof codeVisibilityArray[number]
// const getButtonText = 

const FruitCodeBlock = () => {
  const [codeVisibility, setCodeVisibility] = useState<CodeVisibility>("SUMMARIZED")
  const usage = useFruitBoxContext()
  const isDestructured = usage === "DESTRUCTURED"
  const summarizedCode = isDestructured ? destructuredSummarizedCode : oneByOneSummarizedCode
  const expandedCode = isDestructured ? destructuredExpandedCode : oneByOneExpandedCode

  const code = codeVisibility === "EXPANDED" ? expandedCode : summarizedCode

  const toggle = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    newValue: CodeVisibility
  ) => {
    setCodeVisibility(newValue)
  }

  return (
    <>
      <ToggleButtonGroup
        value={codeVisibility}
        exclusive
        onChange={toggle}
        className="self-end">
        <ToggleButton value="COLLAPSED" aria-label="left aligned">Collapse</ToggleButton>
        <ToggleButton value="SUMMARIZED" aria-label="centered">Summarize</ToggleButton>
        <ToggleButton value="EXPANDED" aria-label="right aligned">Expand</ToggleButton>
      </ToggleButtonGroup>

      {codeVisibility !== "COLLAPSED" &&
        <Box component="pre">
          <SyntaxHighlighter
            language="tsx"
            style={tomorrow} // Dark theme
            customStyle={{
              margin: 0,
              padding: '16px',
              fontSize: '0.875rem',
              fontFamily: '"Fira Code", Monaco, "Lucida Console", monospace'
            }}>
            {code}
          </SyntaxHighlighter>
        </Box>
      }
    </>
  )
}

export default FruitCodeBlock