import { createContext, useContext, useEffect, useState } from "react";

const DownloadImagesContext = createContext();

export default function DownloadImageProvider({ children }) {
  const [downloadImages, setDownloadImages] = useState(
    localStorage.getItem("downloads")
      ? JSON.parse(localStorage.getItem("downloads"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("downloads", JSON.stringify(downloadImages));
  }, [downloadImages]);

  return (
    <DownloadImagesContext.Provider
      value={{ downloadImages, setDownloadImages }}
    >
      {children}
    </DownloadImagesContext.Provider>
  );
}

export function useDownloadImages() {
  return useContext(DownloadImagesContext);
}
