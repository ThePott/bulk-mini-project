import type { Page } from "../_interfaces/commonInterfaces"

const convertPathToPage = (pathname: string): Page => {
    const splitedPathnameArray = pathname.split("/")
    const tempPageName = splitedPathnameArray[1]
    const upperCasedName = tempPageName.toUpperCase()
    const page: Page = upperCasedName ? upperCasedName.replace(/-/g, "_") as Page : "HOME"

    return page
}

export { convertPathToPage }