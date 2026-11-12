export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.debug("[Analytics Telemetry]", event);
  }
}
