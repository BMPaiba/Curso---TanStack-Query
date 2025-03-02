import { useRandon } from "./hooks/useRandon";

function App() {
  const { randomQuery } = useRandon();

  return (
    <>
      <div>{JSON.stringify(randomQuery.error)}</div>
      {randomQuery.isLoading ? <h1>Loading...</h1> : <h1>Number: {randomQuery.data}</h1>}
      <div>...</div>
      <button onClick={() => randomQuery.refetch()}>Refresh</button>
    </>
  );
}

export default App;
