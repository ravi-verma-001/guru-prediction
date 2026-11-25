export interface ResultImage {
  id: string;
  src: string;
  caption: string;
  date: string;
}

// Replace src paths with your actual result screenshots in /public/results/
// Add or remove entries as needed.
export const RESULT_IMAGES: ResultImage[] = [
  {
    id: "1",
    src: "/results/result-1.jpg",
    caption: "Community Update – Sample",
    date: "Replace with actual date",
  },
  {
    id: "2",
    src: "/results/result-2.jpg",
    caption: "Prediction Post – Sample",
    date: "Replace with actual date",
  },
  {
    id: "3",
    src: "/results/result-3.jpg",
    caption: "Result Screenshot – Sample",
    date: "Replace with actual date",
  },
  {
    id: "4",
    src: "/results/result-4.jpg",
    caption: "Round Update – Sample",
    date: "Replace with actual date",
  },
  {
    id: "5",
    src: "/results/result-5.jpg",
    caption: "Telegram Post – Sample",
    date: "Replace with actual date",
  },
  {
    id: "6",
    src: "/results/result-6.jpg",
    caption: "Community Screenshot – Sample",
    date: "Replace with actual date",
  },
];
