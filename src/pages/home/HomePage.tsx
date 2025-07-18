import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Dialog, DialogTitle, IconButton, Paper, Typography } from "@mui/material";
import { default as StudyMemberList, default as StudyMemeberList } from "./components/StudyMemberList";
import type { StudyMember } from "./homeInterfaces";
import README from "@/README.md?raw"
import ReactMarkdown from "react-markdown"
import type { Page } from '@/src/_interfaces/commonInterfaces';
import useCommonStore from '@/src/_store/commmonStore';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import MarkdownComponents from '@/src/components/markdownComponents';

const studyMemberArray: StudyMember[] = [
  {
    name: "윤경복 님",
    urlInfoArray: [
      { site: "VERCEL_APP", url: "https://bok-project.vercel.app/" },
      { site: "GITHUB", url: "https://github.com/KYUNG-BOK/bok_project" }
    ],
  },
  {
    name: "우혜림 님",
    urlInfoArray: [
      { site: "VERCEL_APP", url: "https://todo-list-app-ecru-pi.vercel.app/" },
      { site: "GITHUB", url: "https://github.com/rimi-w/TodoList-App" }
    ],
  },
]

/** ----------- fallback 로직 없음
 * 
 * 현재 떠오르는 것 doShowModalDict에서 불러와서 있으면 되고 없으면 안 된다는 식으로
 */
const convertPathToPage = (pathname: string): Page => {
  const splitedPathnameArray = pathname.split("/")
  const tempPageName = splitedPathnameArray[1]
  const upperCasedName = tempPageName.toUpperCase()
  const page: Page = upperCasedName ? upperCasedName.replace(/-/g, "_") as Page : "HOME"

  return page
}

const MainPage = () => {
  const doShowModalDict = useCommonStore((state) => state.doShowModalDict)
  const updateDict = useCommonStore((state) => state.updateDict)
  // const 
  const location = useLocation()
  const pathname = location.pathname

  const page = useMemo(
    () => { return convertPathToPage(pathname) },
    [pathname]
  )

  const handleClose = () => {
    // doShowModalDict[page] = false
    updateDict(page, false)

  }

  return (
    <Paper sx={{ borderRadius: "24px" }} className="mx-auto mt-12 p-12 flex flex-col gap-6">
      <Box className="flex gap-6 items-center">
        <Typography variant="h4">리액트 과제 다듬기 스터디</Typography>
        <a href="https://github.com/ThePott/bulk-mini-project" target="_blank">
          <IconButton>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
      </Box>

      <hr />

      <Dialog onClose={handleClose} open={doShowModalDict[page]}>

        <Box className="p-3">
          <Typography variant='h1' sx={{ fontWeight: 900 }} >README</Typography>
          <ReactMarkdown components={MarkdownComponents}>
            {README}
          </ReactMarkdown>
        </Box>

      </Dialog>

      <StudyMemberList>

        {studyMemberArray.map((studyMember, index) => <StudyMemeberList.Indivisual key={index} studyMember={studyMember} />)}
      </StudyMemberList>
    </Paper>
  )
}

export default MainPage