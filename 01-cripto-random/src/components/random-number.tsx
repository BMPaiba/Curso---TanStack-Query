import { useQuery } from "@tanstack/react-query";

const getCryptonumber = async (): Promise<number> => {
  const url = "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";
  const resp = await fetch(url).then((resp) => resp.json());

  return Number(resp);
};

export default function RandomNumber() {
  const { data } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptonumber,
    staleTime: 1000 * 60,
  });
  return <div>RandomNumber : {data}</div>;
}
