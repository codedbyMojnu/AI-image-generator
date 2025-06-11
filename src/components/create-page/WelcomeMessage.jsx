export default function WelcomeMessage({ message }) {
  return (
    <h2 className="text-4xl font-bold mb-8">
      {message} <span className="text-2xl">👋</span>
    </h2>
  );
}
