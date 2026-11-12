export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(ratio: number): string {
  return `${Math.round(ratio * 100)}%`;
}

export function formatNumber(val: number): string {
  return new Intl.NumberFormat("en-US").format(val);
}
