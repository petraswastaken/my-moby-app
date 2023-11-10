import mobyChapters from "../data/moby.json";

type Result = {
  chapterIndex: number;
  paragraphIndex: number;
  searchIndex: number;
};

export async function fetchMoby(query: string) {
  if (query === "") return { results: [], mobyChapters };
  const normalizedQuery = query.toLowerCase();
  const results: Result[] = [];
  mobyChapters.forEach((chapter, chapterIndex) => {
    chapter.paragraphs.forEach((paragraph, paragraphIndex) => {
      const normalizedParagraph = paragraph.toLocaleLowerCase();
      const searchIndex = normalizedParagraph.indexOf(normalizedQuery);
      if (searchIndex !== -1) {
        results.push({
          chapterIndex,
          paragraphIndex,
          searchIndex,
        });
      }
    });
  });

  return { results, mobyChapters };
}
