import WelcomeMessage from "../create-page/WelcomeMessage";
import DownloadedImages from "./DownloadedImages";

export default function DownloadPage() {
  return (
    <main className="relative z-10">
      <WelcomeMessage message="Downloaded" />
      {/* <!-- Display Dowloaded Images --> */}
      <div>
        <DownloadedImages />
      </div>
    </main>
  );
}
