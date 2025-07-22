import README from "@/README.md?raw";
import ReadmeDialog from '@/src/components/ReadmeDialog';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { default as StudyMemberList, default as StudyMemeberList } from "./components/StudyMemberList";
import type { StudyMember } from "./homeInterfaces";

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


const MainPage = () => {
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

      <ReadmeDialog readme={README} />

      <StudyMemberList>

        {studyMemberArray.map((studyMember, index) => <StudyMemeberList.Indivisual key={index} studyMember={studyMember} />)}
      </StudyMemberList>
    </Paper>
  )
}

export default MainPage