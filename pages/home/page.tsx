import { Paper, Typography } from "@mui/material"

interface StudyMember {
  name: string
  vercelUrl: string
  repoUrl: string
}

const studyMemberArray: StudyMember[] = [
  {
    name: "윤경복 님",
    vercelUrl: "/",
    repoUrl: "/"
  },
  {
    name: "우혜림 님",
    vercelUrl: "https://todo-list-app-ecru-pi.vercel.app/",
    repoUrl: "/"
  },
]

const MainPage = () => {
  return (
    <Paper className="mx-auto mt-12 p-12 flex flex-col gap-3">
      <a href="https://github.com/ThePott/bulk-mini-project" target="_blank">
        <Typography>이 페이지의 소스코드를 깃헙에서 확인해보세요</Typography>
      </a>
      <Typography variant="h5">리액트 과제 다듬기 스터디</Typography>
      <hr />
      {studyMemberArray.map((studyMember) => {
        return (
          <>
            <Typography>{studyMember.name}</Typography>
            <Typography component="pre">{studyMember.vercelUrl}</Typography>
            <Typography component="pre">{studyMember.repoUrl}</Typography>
          </>
        )
      })}
    </Paper>
  )
}

export default MainPage