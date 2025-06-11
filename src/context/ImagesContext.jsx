import { createContext, useContext, useState } from "react";

const ImagesContext = createContext();

export default function ImagesProvider({ children }) {
  const [images, setImages] = useState(() =>
    Array(9)
      .fill(null)
      .map(() => ({
        src: "",
        seed: 0,
        loading: "",
        error: "",
      }))
  );
  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {children}
    </ImagesContext.Provider>
  );
}

export function useImages() {
  return useContext(ImagesContext);
}
