const pageArray = ["HOME", "ANIMAL", "ZUSTAND_STATE_RERENDER", "CAFE"] as const
type Page = typeof pageArray[number]

/** K: Key를 의미 */
interface HomeStoreState {
  doShowModalDict: {
    [K in Page]: boolean;
  };

  updateDict: (page: Page, doShow: boolean) => void

  // doShowModal: (path: string) => boolean
}

export { pageArray }
export type { Page, HomeStoreState }