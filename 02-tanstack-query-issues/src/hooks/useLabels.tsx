import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../issues/actions/get-labels.action";

export const useLabels = () => {
  const labels = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    placeholderData: [
      {
        id: 1249821345,
        node_id: "MDU6TGFiZWwxMjQ5ODIxMzQ1",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20ESLint%20Rules",
        name: "Component: ESLint Rules",
        color: "f7afdb",
        default: false,
        description: "",
      },
      {
        id: 1249821345,
        node_id: "MDU6TGFiZWwxMjQ5ODIxMzQ1",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20ESLint%20Rules",
        name: "Component: ESLint Rules",
        color: "f7afdb",
        default: false,
        description: "",
      },
    ],
  });

  return { labels };
};
