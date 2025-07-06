import { Box, Typography } from "@mui/material"

class StudyMember {
  name: string
  vercelUrl: string
  repoUrl: string

  constructor(name: string, vercelUrl: string, repoUrl: string) {
    this.name = name
    this.vercelUrl = vercelUrl
    this.repoUrl = repoUrl
  }
}

const studyMemberArray = [
  new StudyMember("윤경복 님", "/", "/"),
  new StudyMember("양은지 님", "/", "/"),
  new StudyMember("우혜림 님", "/", "/"),
]

const MainPage = () => {
  return (
    <Box>
      <a href="">이 페이지의 소스코드를 깃헙에서 확인하세요</a>
      <Typography variant="h5">리액트 과제 다듬기 스터디</Typography>
      <Typography>윤경복 님</Typography>
      <Typography>양은지 님</Typography>
      <Typography>우혜림 님</Typography>
    </Box>
  )
}

export default MainPage