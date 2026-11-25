export interface PredictionEntry {
  id: string;
  roundId: string;
  color: "green" | "red" | "violet";
  prediction: string;
  status: "demo" | "pending";
  resultStatus: string;
}

// ⚠️ ALL DATA BELOW IS SAMPLE/DEMO CONTENT FOR ILLUSTRATION PURPOSES ONLY
// These are NOT real predictions and do NOT represent past or future results.
export const DEMO_PREDICTIONS: PredictionEntry[] = [
  {
    id: "1",
    roundId: "Round #1842",
    color: "green",
    prediction: "Green",
    status: "demo",
    resultStatus: "Sample",
  },
  {
    id: "2",
    roundId: "Round #1843",
    color: "red",
    prediction: "Red",
    status: "demo",
    resultStatus: "Sample",
  },
  {
    id: "3",
    roundId: "Round #1844",
    color: "violet",
    prediction: "Violet",
    status: "demo",
    resultStatus: "Sample",
  },
  {
    id: "4",
    roundId: "Round #1845",
    color: "green",
    prediction: "Green",
    status: "demo",
    resultStatus: "Sample",
  },
  {
    id: "5",
    roundId: "Round #1846",
    color: "red",
    prediction: "Red",
    status: "demo",
    resultStatus: "Sample",
  },
  {
    id: "6",
    roundId: "Round #1847",
    color: "violet",
    prediction: "Violet",
    status: "demo",
    resultStatus: "Sample",
  },
];
