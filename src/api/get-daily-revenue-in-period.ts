import { api } from "@/lib/axios";

export type GetDailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export async function getDailyRevenueInPeriod() {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    "/metrics/daily-receipt-in-period"
  );

  return [
    {'date': '16/04/2025', 'receipt': 100},
    {'date': '15/04/2025', 'receipt': 80},
    {'date': '14/04/2025', 'receipt': 250},
    {'date': '13/04/2025', 'receipt': 200},
    {'date': '12/04/2025', 'receipt': 60},
    {'date': '11/04/2025', 'receipt': 70},
    {'date': '10/04/2025', 'receipt': 50},
  ];
}
