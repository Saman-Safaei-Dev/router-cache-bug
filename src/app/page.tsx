import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <p className="text-center mb-2">Home Page</p>
      <div className="flex justify-center gap-2 text-blue-500 underline">
        <Link href="/dashboard">To Dashboard</Link>
        <Link href="/dashboard/random-page">To A Random Page</Link>
      </div>
    </div>
  );
}
