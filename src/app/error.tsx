"use client"

export default function Error({ error }: { error: Error }) {
    
  return (
    <main className="flex items-center justify-center h-screen" role="alert" lang="en">
      <p className="text-2xl text-red-500 font-semibold">
        Error fetching data: {error.message}
      </p>
    </main>
  );
}
