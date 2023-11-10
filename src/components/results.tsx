import { fetchMoby } from "@/utils/fetch-moby";

export async function Results({ query }: { query: string }) {
  const { results, mobyChapters } = await fetchMoby(query);

  return (
    <div>
      <p>
        {results.length} result{results.length === 1 && "s"}
      </p>
      {results.map((result) => {
        const text =
          mobyChapters[result.chapterIndex].paragraphs[result.paragraphIndex];

        const textBeforeOccurance = text.slice(0, result.searchIndex);
        const textOccurance = text.slice(
          result.searchIndex,
          result.searchIndex + query.length
        );
        const textAfterOccurance = text.slice(
          result.searchIndex + query.length
        );

        return (
          <div
            className="mt-4"
            key={JSON.stringify(result)}
            style={{
              fontSize: `${58.5 / results.length}vw`,
            }}
          >
            <p>{mobyChapters[result.chapterIndex].chapter}</p>
            <p>
              {textBeforeOccurance}
              <mark>{textOccurance}</mark>
              {textAfterOccurance}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
