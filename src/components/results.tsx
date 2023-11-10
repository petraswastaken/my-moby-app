import { fetchMoby } from "@/utils/fetch-moby";

export async function Results({ query }: { query: string }) {
  const { results, mobyChapters } = await fetchMoby(query);

  return (
    <div>
      {results.length === 0 ? (
        <p>Type something to get started.</p>
      ) : (
        <p>
          {results.length} result{results.length === 1 && "s"}
        </p>
      )}
      {results.map((result) => {
        const text =
          mobyChapters[result.chapterIndex].paragraphs[result.paragraphIndex];

        const textBeforeOccurance = text.slice(
          result.searchIndex - 25,
          result.searchIndex
        );
        const textOccurance = text.slice(
          result.searchIndex,
          result.searchIndex + query.length
        );
        const textAfterOccurance = text.slice(
          result.searchIndex + query.length,
          result.searchIndex + query.length + 25
        );

        return (
          <div
            className="mt-4 break-all"
            key={JSON.stringify(result)}
            style={{
              fontSize: `${58.5 / results.length}vw`,
            }}
          >
            <p>{mobyChapters[result.chapterIndex].chapter}</p>
            <p>
              ...{textBeforeOccurance}
              <mark>{textOccurance}</mark>
              {textAfterOccurance}...
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
