import useWindowResize from "."

const UseWindowResizeTest = () => {

    const windowResize = useWindowResize();
    const { width, height } = windowResize;

  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <h1>Width: {width}</h1>
      <h1>Height: {height}</h1>
    </div>
  )
}

export default UseWindowResizeTest
