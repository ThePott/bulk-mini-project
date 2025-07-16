import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Box, IconButton, Typography } from "@mui/material";
import type { Site, StudyMember, UrlInfo } from '../homeInterfaces';
import type { ReactNode } from 'react';

const SiteIcon = ({ site }: { site: Site }) => {
  switch (site) {
    case "GITHUB":
      return <GitHubIcon fontSize="large" />
    case "VERCEL_APP":
      return <RocketLaunchIcon fontSize="large" />
    case "VELOG":
      return <div>---- Velog Icon ----</div>
  }
}

const StudyMemeberUrl = ({ urlInfo }: { urlInfo: UrlInfo }) => {
  return (
    <a href={urlInfo.url}>
      <IconButton>
        <SiteIcon site={urlInfo.site} />
      </IconButton>
    </a>
  )
}


const StudyMemberIndivisual = ({ studyMember }: { studyMember: StudyMember }) => {
  return (
    <Box className="flex gap-6 items-center">
      <Typography variant='h6'>{studyMember.name}</Typography>
      {studyMember.urlInfoArray.map((urlInfo, index) => <StudyMemeberUrl key={index} urlInfo={urlInfo} />)}
    </Box>
  )
}

const StudyMemberList = ({ children }: {children: ReactNode}) => {
  return (
    <Box className="flex flex-col gap-3">
      <Typography variant='h6'>함께 한 스터디원</Typography>
      {children}
    </Box>
  )
}

StudyMemberList.Indivisual = ({ studyMember }: { studyMember: StudyMember }) => <StudyMemberIndivisual studyMember={studyMember} />

export default StudyMemberList