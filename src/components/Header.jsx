export default function Header({ activePage, setActivePage }) {
  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src="./assets/logo.svg" className="h-10" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        <a
          className={`hover:text-zinc-200 font-medium ${
            activePage === "create" && "text-zinc-200 "
          } cursor-pointer transition-all`}
          onClick={() => {
            setActivePage("create");
          }}
        >
          Create Image
        </a>
        <a
          className={`hover:text-zinc-200 font-medium ${
            activePage === "download" && "text-zinc-200 "
          } cursor-pointer transition-all`}
          onClick={() => {
            setActivePage("download");
          }}
        >
          Downloaded
        </a>
      </ul>
    </header>
  );
}
