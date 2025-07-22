import { Box, Dialog } from '@mui/material'
import { useMemo } from 'react'
import { useLocation } from 'react-router'
import useCommonStore from '../_store/commmonStore'
import { convertPathToPage } from '../_utils/pathUtils'
import ReactMarkdown from 'react-markdown'
import MarkdownComponents from './markdownComponents'

const sx = {
  "& .MuiDialog-paper": {
    margin: 0,
    overflow: "hidden",
    borderRadius: "12px",
    "& .MuiBox-root": {
      overflowX: "hidden",
      overflowY: "scroll",
      scrollbarColor: "oklch(0.5 0 0) transparent",
    }
  }
}

const ReadmeDialog = ({readme}: {readme: string}) => {
  const doShowModalDict = useCommonStore((state) => state.doShowModalDict)
  const updateDict = useCommonStore((state) => state.updateDict)

  const location = useLocation()
  const pathname = location.pathname

  const page = useMemo(
    () => { return convertPathToPage(pathname) },
    [pathname]
  )

  const handleClose = () => {
    updateDict(page, false)

  }

  return (
    <Dialog sx={sx} onClose={handleClose} open={doShowModalDict[page]}>

      <Box className="p-3">
        <ReactMarkdown components={MarkdownComponents}>
          {readme}
        </ReactMarkdown>
      </Box>

    </Dialog>
  )
}

export default ReadmeDialog