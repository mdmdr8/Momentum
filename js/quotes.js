const quotes = [
  {
    quote:
      "성공은 자기 암시에서부터 비롯된다. 반드시 성공할 것이라고 믿고 행동해야 비로소 성공에 이를 수 있다.",
  },
  { quote: "자기 자신에게 끊임없이 칭찬하는 모습을 통해 잠재력을 일깨우자." },
  {
    quote:
      "모든 분노에는 다 저마다의 이유가 있겠지만 좋은 이유는 단 하나도 없다.",
  },
  { quote: "돈보다 시간을 아껴라." },
  { quote: "즉시 행동하라." },
  { quote: "성취해야할 목표에 집중하라." },
  { quote: "지난 일에 아파하며 발목 잡히지 말자." },
  //
];

const quote = document.querySelector("#quote span");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
