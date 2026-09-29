
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg"></span>

        <p className="text-base-content/60">
          Loading chat...
        </p>
      </div>
    </div>
  );
}
