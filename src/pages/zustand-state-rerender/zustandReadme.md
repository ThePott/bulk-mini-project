# ❓ What Are The Differences?
```tsx
// 1. destructure
const { stock, increaseStock } = useStore()

// 2. one-by-one
const stock = useStore((state) => state.stock)
const increaseStock = useStore((state) => state.increaseStock)
```

## 📖 Introduction
How do you allocate states from zustand store?
1. using destructuring for concise code?
2. allocate states one by one as document says?

This app shows re-render problem of destructuring store.

[Zustand README __Recipes __Fetching everything](https://github.com/pmndrs/zustand/blob/c61999bacd59c649a2932e96b1da413691f55e3e/README.md?plain=1#L70-L76)

## ✨ Main Feature
1. **Side-by-side comparison**      : Compare destructured vs one-by-one state allocation
2. **Interactive demonstration**    : Click buttons to see console logs of re-rendering
3. **Code display**                 : View the actual implementation of code

## 🛠️ Tech Stack
This app demonstrates:
1. Zustand                  : Allocate states using both ways
2. Compound Pattern         : Follow compound patterns to minimize redandunt codes
3. Material UI              : Apply custom MUI theme globally
4. React Syntax Highlighter : Highlight syntax of code block in display


## 📦 Installation
In the project directory, you can run:
```bash
git clone https://github.com/ThePott/zustand-destructure-rerender
cd zustand-destructure-rerender
npm install
```
## ✅ Requirements
* Node.js
## 📜 License
MIT