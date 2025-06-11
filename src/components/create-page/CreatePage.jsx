import { useEffect, useState } from "react";
import { useImages } from "../../context/ImagesContext";
import getRandomNumber from "../../utils/getRandomNumber";
import AdvancedOptions from "./AdvancedOptions";
import DisplayImages from "./DiplayImages";
import InputPrompt from "./InputPrompt";
import WelcomeMessage from "./WelcomeMessage";

export default function CreatePage() {
  const [apiParameters, setApiParameters] = useState({
    promptText: "",
    model: "flux",
    height: "",
    width: "",
  });
  const [models, setModels] = useState([]);
  const { images, setImages } = useImages("");

  console.log(apiParameters, "All Parameterss");

  // Find models from polination api
  useEffect(() => {
    let ignore = false;
    async function fetchModel() {
      try {
        const response = await fetch("https://image.pollinations.ai/models");
        if (!response.ok) {
          console.log("Failted to Fetch Models");
          return;
        }
        const data = await response.json();
        if (!ignore) {
          setModels((model) => [...model, data]);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchModel();
    return () => (ignore = true);
  }, []);

  // Function handle prompt submit
  async function handleSubmit() {
    console.log("fetching start");
    setImages(() =>
      Array(9)
        .fill(null)
        .map(() => ({
          src: "",
          seed: 0,
          loading: "Generating...",
          error: "",
        }))
    );
    for (let i = 0; i < 9; i++) {
      const seed = getRandomNumber();
      const url = `https://image.pollinations.ai/prompt/${apiParameters?.promptText}?width=${apiParameters?.width}&height=${apiParameters?.height}&seed=${seed}&model=${apiParameters?.model}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 16000);

      try {
        const response = await fetch(url, {
          signal: controller.signal, // ✅ অনুরোধ বাতিল করার জন্য
        });
        if (!response.ok) {
          console.log("Fetching data failed");
          setImages((previous) => {
            const newImages = [...previous];
            newImages[i] = {
              src: "",
              seed,
              loading: "",
              error: "Image Generated Fail",
            };
            return newImages;
          });
        }
        const data = await response.blob();
        const imageURL = URL.createObjectURL(data);

        setImages((previous) => {
          const newImages = [...previous];
          newImages[i] = { src: imageURL, seed, loading: "", error: "" };
          return newImages;
        });

        // set to images state
      } catch (err) {
        setImages((previous) => {
          const newImages = [...previous];
          newImages[i] = {
            src: "",
            seed,
            loading: "",
            error: err.message,
          };
          return newImages;
        });
      } finally {
        clearTimeout(timeoutId);
      }
    }
  }

  return (
    <main className="relative z-10">
      <WelcomeMessage message=" Let's create a masterpiece, Alvian!" />
      <InputPrompt
        onSubmitted={handleSubmit}
        apiParameters={apiParameters}
        setApiParameters={setApiParameters}
      />
      <AdvancedOptions
        models={models}
        setApiParameters={setApiParameters}
        apiParameters={apiParameters}
      />
      <DisplayImages />
    </main>
  );
}
