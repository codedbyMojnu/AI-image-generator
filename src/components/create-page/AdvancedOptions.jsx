import { useImages } from "../../context/ImagesContext";

export default function AdvancedOptions({
  models,
  apiParameters,
  setApiParameters,
}) {
  const { images } = useImages();
  function handleRatioClick(ratio) {
    switch (ratio) {
      case "1:1":
        setApiParameters({ ...apiParameters, height: 512, width: 512 });
        break;
      case "16:9":
        setApiParameters({ ...apiParameters, height: 1280, width: 720 });
        break;
      case "4:3":
        setApiParameters({ ...apiParameters, height: 1024, width: 768 });
        break;
      case "3:2":
        setApiParameters({ ...apiParameters, height: 900, width: 600 });
        break;
    }
  }
  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <!-- Model Selection --> */}
        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Model
          </label>
          <select
            id="model"
            className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            onChange={(e) =>
              setApiParameters((parameters) => ({
                ...parameters,
                model: e.target.value,
              }))
            }
          >
            {models[0]?.map((model) => (
              <option key={model} className="bg-zinc-900" value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        {/* <!-- Seed Input : Auto Generated, readonly for user --> */}
        <div>
          <label
            htmlFor="seed"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Seed (for reproducible results)
          </label>
          <input
            type="number"
            id="seed"
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Random"
            readOnly
          />
        </div>

        {/* <!-- Width Input --> */}
        <div>
          <label
            htmlFor="width"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Width
          </label>
          <input
            value={apiParameters?.width}
            onChange={(e) =>
              setApiParameters({ ...apiParameters, width: e.target.value })
            }
            type="number"
            id="width"
            // value="1024"
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* <!-- Height Input --> */}
        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Height
          </label>
          <input
            type="number"
            id="height"
            value={apiParameters?.height}
            onChange={(e) =>
              setApiParameters({ ...apiParameters, height: e.target.value })
            }
            // value="1024"
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        {/* <!-- Aspect Ratio Presets --> */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Aspect Ratio Presets
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors cursor-pointer"
              onClick={() => handleRatioClick("1:1")}
            >
              1:1
            </button>
            <button
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors cursor-pointer"
              onClick={() => handleRatioClick("16:9")}
            >
              16:9
            </button>
            <button
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors cursor-pointer"
              onClick={() => handleRatioClick("4:3")}
            >
              4:3
            </button>
            <button
              className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors cursor-pointer"
              onClick={() => handleRatioClick("3:2")}
            >
              3:2
            </button>
          </div>
        </div>

        {/* <!-- No Logo Toggle --> */}
      </div>
    </div>
  );
}
