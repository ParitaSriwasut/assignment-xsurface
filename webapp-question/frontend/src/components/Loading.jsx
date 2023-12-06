export default function Loading() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-secondary-500 h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-secondary-white rounded-full animate-bounce delay-[animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-secondary-white rounded-full animate-bounce delay-[animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-secondary-white rounded-full animate-bounce"></div>
    </div>
  );
}
