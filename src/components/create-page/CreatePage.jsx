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
  const [message, setMessage] = useState("");
  const { images, setImages } = useImages("");

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
    setMessage("");

    if (apiParameters?.model == "gptimage") {
      setMessage(`This selected Model  is for Paid User Only`);
    } else {
      if (apiParameters?.promptText.trim() === "") {
        setMessage("খালি প্রোম্পট রাখলে ছবি জেনারেট হবে না");
        return;
      }
      setMessage("ইমেজ জেনারেট হচ্ছে...");

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
          setApiParameters({
            promptText: "",
            model: "flux",
            height: "",
            width: "",
          });
          clearTimeout(timeoutId);
        }
      }
      setMessage("ইমেজ জেনারেট শেষ হলো");
    }
  }

  return (
    <main className="relative z-10">
      <WelcomeMessage message=" Let's create a masterpiece, Alvian!" />
      {message && !images[0].src && (
        <p className="text-sm text-center text-red-500 mb-2 bg-white p-2 animate-bounce">
          নিচের দিক যান এবং নির্দেশনাগুলো ফলো করুন👇👇
        </p>
      )}
      <InputPrompt
        onSubmitted={handleSubmit}
        apiParameters={apiParameters}
        setApiParameters={setApiParameters}
      />
      <p className="text-xs text-red-500 mt-[-20px] mb-2 ml-2">
        একবার রিকুয়েস্ট দিলে, সেই অনুরোধ শেষ না হওয়া পর্যন্ত নতুন রিকুয়েস্ট দিলে
        কাজ হবে না। সেই অনুরোধ শেষ হলেই কেবল নতুন রিকুয়েস্ট দিন। প্রত্যেক
        রিকুয়েস্টে আমরা আপনাকে ৯ টি ছবি জেনারেট করে দেখাই।
      </p>
      <AdvancedOptions
        models={models}
        setApiParameters={setApiParameters}
        apiParameters={apiParameters}
      />
      <h3 className="text-zinc-200 mb-4 font-bold text-2xl text-center">
        Result: <span className="text-gray-600">You can generate 9 images</span>
      </h3>
      {message && (
        <p className="text-center border border-b-2 rounded-2xl p-2">
          {message}
        </p>
      )}
      <DisplayImages />
    </main>
  );
}
