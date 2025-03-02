import { useLabels } from "../../hooks/useLabels";

export const LabelPicker = () => {
  const { labels } = useLabels();

  if (labels.isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {labels.data &&
        labels.data.map((label) => (
          <span
            key={label.id}
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer my-6"
            style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
          >
            {label.name}
          </span>
        ))}
    </>
  );
};
