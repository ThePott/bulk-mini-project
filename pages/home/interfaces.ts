interface StudyMember {
  name: string
  urlInfoArray: UrlInfo[]
}

type Site = "GITHUB" | "VERCEL_APP" | "VELOG" 

interface UrlInfo {
  site: Site
  url: string
}

export type { StudyMember, UrlInfo, Site }