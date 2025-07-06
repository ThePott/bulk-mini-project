const destructuredSummarizedCode = `const Apple = () => {
  const { appleStock, increaseAppleStock } = useDesctructedFruit()
  return (...)
}

const Banana = () => {
  const { bananaStock, increaseBananaStock } = useDesctructedFruit()
  return (...)
}

const DetructedFruitBox = () => {
  return (
    <div>
      <Apple />
      <Banana />
    </div>
  )
}`

const destructuredExpandedCode = `import { create } from "zustand"

const Apple = () => {
  const { appleStock, increaseAppleStock } = useDesctructedFruit()
  console.log("---- deconstructed apple re-rendered")
  return (
    <div>
      <p>사과: {appleStock}</p>
      <button onClick={increaseAppleStock}>🍎 +1</button>
    </div>
  )
}

const Banana = () => {
  const { bananaStock, increaseBananaStock } = useDesctructedFruit()
  console.log("---- deconstructed banana re-rendered")
  return (
    <div className="flex justify-between items-center gap-6">
      <p>바나나: {bananaStock}</p>
      <button onClick={increaseBananaStock}>🍌 +1</button>
    </div>
  )
}

const DetructedFruitBox = () => {
  console.log("---- deconstructed app re-rendered")
  return (
    <div>
      <p>구조 분해 할당</p>
      <Apple />
      <Banana />
    </div>
  )
}`

const oneByOneSummarizedCode = `const Apple = () => {
  const appleStock = useOneByOneFruit((state) => state.appleStock)
  const increaseAppleStock = useOneByOneFruit((state) => state.increaseAppleStock)
  return (...)
}

const Banana = () => {
  const bananaStock = useOneByOneFruit((state) => state.bananaStock)
  const increaseBananaStock = useOneByOneFruit((state) => state.increaseBananaStock)
  return (...)
}

const OneByOneFruitBox = () => {
  return (
    <div>
      <Apple />
      <Banana />
    </div>
  )
}`

const oneByOneExpandedCode = `import { create } from "zustand"

const Apple = () => {
  const appleStock = useOneByOneFruit((state) => state.appleStock)
  const increaseAppleStock = useOneByOneFruit((state) => state.increaseAppleStock)
  console.log("---- one-by-one apple re-rendered")
  return (
    <div>
      <p>사과: {appleStock}</p>
      <button onClick={increaseAppleStock}>🍎 +1</button>
    </div>
  )
}

const Banana = () => {
  const bananaStock = useOneByOneFruit((state) => state.bananaStock)
  const increaseBananaStock = useOneByOneFruit((state) => state.increaseBananaStock)
  console.log("---- one-by-one banana re-rendered")
  return (
    <div className="flex justify-between items-center gap-6">
      <p>바나나: {bananaStock}</p>
      <button onClick={increaseBananaStock}>🍌 +1</button>
    </div>
  )
}

const DetructedFruitBox = () => {
  console.log("---- one-by-one banana re-rendered")
  return (
    <div>
      <p>하나 씩 할당</p>
      <Apple />
      <Banana />
    </div>
  )
}`

export {
  destructuredSummarizedCode,
  destructuredExpandedCode,
  oneByOneSummarizedCode,
  oneByOneExpandedCode
}