import { useState } from "react";
import CreatePage from "./components/create-page/CreatePage";
import DownloadPage from "./components/dowload-page/DownloadPage";
import Glow from "./components/Glow";
import Header from "./components/Header";
import ImagesProvider from "./context/ImagesContext";

export default function App() {
  const [activePage, setActivePage] = useState("create");
  return (
    <ImagesProvider>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header setActivePage={setActivePage} />
        <Glow />
        {activePage == "create" && <CreatePage />}
        {activePage == "download" && <DownloadPage />}
      </div>
    </ImagesProvider>
  );
}
