import DownloadIcon from "../../Icons/downloadIcon";

export default function Image({ loading, error, src, seed }) {
  return (
    <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
      {src ? (
        <>
          <div className="absolute bottom-2 right-2 p-1">
            <DownloadIcon />
          </div>
          <img src={src} alt={seed} className="w-full h-48 object-cover" />
        </>
      ) : (
        <div className="flex justify-center items-center h-48 text-white">
          {error && (
            <p className="bg-white text-lg text-red-500 p-5">
              Failed to Generted Image <br />
              {error}
            </p>
          )}
          {loading && (
            <p className="bg-white text-lg text-green-500 p-5">{loading}</p>
          )}
        </div>
      )}
    </div>
  );
}
