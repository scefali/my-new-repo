const Test1 = () => <h1>Server Test 1</h1>

export function getServerSideProps() {
  throw new Error("My new error")
}

export default Test1
