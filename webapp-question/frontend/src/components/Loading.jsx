export default function Loading() {
  return (
    <div className="flex space-x-2 items-center justify-center h-screen bg-white">
      <div className="h-9 w-9 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-9 w-9 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-9 w-9 bg-primary-500 rounded-full animate-bounce"></div>
    </div>
  );
}
