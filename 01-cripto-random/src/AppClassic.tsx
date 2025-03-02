import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

  const [number, setNumber] = useState(0);
  const [isLoadiing, setIsLoadiing] = useState(true);
  const [refreshToken, setRefreshToken] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setNumber(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoadiing(false));
  }, [refreshToken]);

  return (
    <>
      <div>{error}</div>
      {isLoadiing ? <h1>Loading...</h1> : <h1>Number: {number}</h1>}
      <div>...</div>
      <button onClick={() => setRefreshToken(refreshToken + 1)}>Refresh</button>
    </>
  );
}

export default App;
