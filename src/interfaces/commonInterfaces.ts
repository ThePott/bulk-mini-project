type Page = "HOME | ANIMAL | ZUSTAND_STATE_RERENDER | CAFE"

/** K: Key를 의미 */
interface HomeStoreState {
  doShowModalDict: {
    [K in Page]: boolean;
  };

  updateDict: (page: Page) => void
  push: () => void
  pull: () => void

  doShowModal: (path: string) => boolean
}

export type { HomeStoreState }