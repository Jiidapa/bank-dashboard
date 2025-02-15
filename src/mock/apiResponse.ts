type User = {
  name: string;
  greetingMessage: string;
};

type Account = {
  type: string;
  amount: number;
  currency: string;
  accountNumber: string;
  issuer: string;
  color: string;
  isMainAccount: boolean;
  flags?: string[];
  progress?: number;
};

type RecentTransaction = {
  name: string;
  image: string;
  isBank: boolean;
};

type DebitCard = {
  name: string;
  status: string;
  issuer: string;
  color: string;
  borderColor?: string;
  number?: string;
};

type Banner = {
  title: string;
  description: string;
  image: string;
};

export const user: User = {
  name: "Clare",
  greetingMessage: "Have a nice day Clare",
};

export const account: Account[] = [
  {
    type: "saving-account",
    amount: 62000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    color: "#24c875",
    isMainAccount: true,
  },
  {
    type: "credit-loan",
    amount: 300.1,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    color: "#9366ed",
    isMainAccount: false,
  },
  {
    type: "goal-saving-account",
    amount: 30000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    progress: 24,
    color: "#00a1e2",
    isMainAccount: false,
  },
  {
    type: "credit-loan",
    amount: 30000.0,
    currency: "THB",
    accountNumber: "568-2-81740-9",
    issuer: "TestLab",
    flags: ["Disbursement", "Overdue"],
    color: "#15bbc7",
    isMainAccount: false,
  },
];

export const recentTransactions: RecentTransaction[] = [
  {
    name: "Emily",
    image: "https://dummyimage.com/54x54/999/fff",
    isBank: false,
  },
  {
    name: "Jone Kiersten",
    image: "https://dummyimage.com/54x54/999/fff",
    isBank: false,
  },
];

export const debitCards: DebitCard[] = [
  {
    name: "My Salary",
    status: "in-progress",
    issuer: "TestLab",
    color: "#00a1e2",
  },
  {
    name: "For My Dream",
    status: "in-progress",
    issuer: "TestLab",
    color: "#ff8300",
  },
  {
    name: "My Debit card",
    status: "Active",
    issuer: "TestLab",
    color: "#ffffff",
    borderColor: "#f2f3f7",
    number: "9440 7841 2222 3115",
  },
];

export const banners: Banner[] = [
  {
    title: "Want some money?",
    description: "You can start apply 'Clare'",
    image: "https://dummyimage.com/54x54/999/fff",
  },
];
