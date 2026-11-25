export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "What is Guru Prediction?",
    answer:
      "Guru Prediction is a Telegram-based community that shares color trading prediction updates, result screenshots, and informational insights. We are a community for sharing information and updates — not a financial advisory service.",
  },
  {
    id: "2",
    question: "Where can I receive prediction updates?",
    answer:
      "All prediction updates, results, and community posts are shared exclusively through our official Telegram channel. Click any 'Join Telegram' button on this page to access the community.",
  },
  {
    id: "3",
    question: "How can I join the Telegram channel?",
    answer:
      "Simply click the 'Join Telegram Now' button anywhere on this page. You will be redirected to our official Telegram channel where you can join for free.",
  },
  {
    id: "4",
    question: "Are predictions guaranteed?",
    answer:
      "No. Predictions are NOT guaranteed. Color trading involves significant financial risk, and no prediction service can guarantee outcomes. All information shared is for educational and informational purposes only. You may lose money. Please participate responsibly.",
  },
  {
    id: "5",
    question: "Can I win every round?",
    answer:
      "No. Winning every round is not possible, and no one can guarantee that. Color trading outcomes are unpredictable, and losses are common. Never invest money you cannot afford to lose. Our community shares informational updates — not guaranteed winning strategies.",
  },
];
