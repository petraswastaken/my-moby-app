import { Results } from "@/components/results";
import Search from "@/components/search";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || "";

  return (
    <main className="min-h-screen">
      <Search placeholder="Search..." />
      <Results query={query} />
    </main>
  );
}
