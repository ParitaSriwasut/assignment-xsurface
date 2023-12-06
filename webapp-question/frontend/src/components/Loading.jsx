export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="h-8 w-8 bg-primary-500 rounded-full animate-bounce animate-delay-300"></div>
      <div className="h-8 w-8 bg-primary-500 rounded-full animate-bounce animate-delay-150"></div>
      <div className="h-8 w-8 bg-primary-500 rounded-full animate-bounce"></div>
    </div>
  );
}
