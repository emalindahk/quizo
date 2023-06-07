export const formatQuestions = (questions) => {
  const triviaQuestions = new Map();

  const regex =
    /(\d+)\.\s(.+)\?\s*\n(?:a\)\s(.+)\s*\n)?(?:b\)\s(.+)\s*\n)?(?:c\)\s(.+)\s*\n)?(?:d\)\s(.+)\s*\n)?Answer:\s[a-d]\)\s(.+)/gi;

  let match;
  while ((match = regex.exec(questions)) !== null) {
    const question = match[2];
    const optionA = match[3];
    const optionB = match[4];
    const optionC = match[5];
    const optionD = match[6];
    const answer = match[7];

    triviaQuestions.set(question, {
      options: [optionA, optionB, optionC, optionD],
      answer,
    });
  }
  return triviaQuestions;
};
