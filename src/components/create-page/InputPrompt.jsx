import { useImages } from "../../context/ImagesContext";
import SearchIcon from "./../../Icons/SearchIcon";
import SubmitIcon from "./../../Icons/SubmitIcon";

export default function InputPrompt({
  apiParameters,
  setApiParameters,
  onSubmitted,
}) {
  const { images } = useImages();

  const isLoading = images?.some((image) => image.loading === "Generating...");
  return (
    <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="pl-5 pr-2">
          <SearchIcon />
        </div>
        <input
          value={apiParameters?.promptText}
          onChange={(e) =>
            setApiParameters({ ...apiParameters, promptText: e.target.value })
          }
          onKeyDown={(e) => {
            if (!isLoading) {
              if (e.key === "Enter") {
                onSubmitted();
              }
            }
          }}
          type="text"
          placeholder="Create with Prompts"
          className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
        />
        {!isLoading && (
          <button
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full cursor-pointer"
            onClick={() => {
              onSubmitted();
            }}
          >
            <SubmitIcon />
          </button>
        )}
      </div>
    </div>
  );
}
