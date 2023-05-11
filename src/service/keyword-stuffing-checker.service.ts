export const checkStuffing = async (keywords: any[], content: any) => {
  let highlighted = content;
  let count: any = {};
  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "gi");
    highlighted = highlighted.replace(
      regex,
      `<span style="background-color: yellow;">${keyword}</span>`
    );

    const matches = content.match(regex);
    count[keyword] = matches ? matches.length : 0;
  });

  return { highlighted, count };
};
