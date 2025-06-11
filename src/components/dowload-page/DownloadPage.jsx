import DisplayImages from "../create-page/DiplayImages";
import WelcomeMessage from "../create-page/WelcomeMessage";

export default function DownloadPage() {
  return (
    <main className="relative z-10">
      <WelcomeMessage message="Downloaded" />
      {/* <!-- Display Dowloaded Images --> */}
      <div>
        <DisplayImages />
      </div>
    </main>
  );
}
