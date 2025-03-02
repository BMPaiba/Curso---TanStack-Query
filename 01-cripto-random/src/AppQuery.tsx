import "./App.css";
import { useQuery } from "@tanstack/react-query";
import RandomNumber from "./components/random-number";

const getCryptonumber = async (): Promise<number> => {
  throw "no se pudo obtener el number";
  const url = "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";
  const resp = await fetch(url).then((resp) => resp.json());

  return Number(resp);
};

function App() {
  const {
    isLoading,
    data: number,
    error,
    refetch,
  } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptonumber,
    retry: false,
  });

  return (
    <>
      <div>{JSON.stringify(error)}</div>
      {isLoading ? <h1>Loading...</h1> : <h1>Number: {number}</h1>}
      <div>...</div>
      <button onClick={() => refetch()}>Refresh</button>
      {/* <RandomNumber /> */}
    </>
  );
}

export default App;
