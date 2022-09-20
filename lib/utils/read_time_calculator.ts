export const readTimeCalculator = (text: string) => {
  const WORDS_PER_MINUTE = 200;
  const regex = /\w+/g;
  const wordCount = (text || "").match(regex)?.length ?? 0;

  return Math.ceil(wordCount / WORDS_PER_MINUTE);
};
