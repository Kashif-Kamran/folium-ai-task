/**
 * Metadata common to Alpha Vantage API responses
 */
export interface MetaDataTypeApiResponse {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string; // date or datetime string
  "4. Output Size": string;
  "5. Time Zone": string;
  // optional field for intraday endpoint
  "4. Interval": string;
  [key: string]: string | undefined;
}

/**
 * Single time-series data point in API
 */
export interface TimeSeriesInstanceApiResponse {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

/**
 * Response shape for real-time (intraday) stock price API
 */
export interface RealTimeStockPriceApiResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string; // Updated to match "4. Interval"
    "5. Output Size": string; // Adjusted numbering
    "6. Time Zone": string; // Adjusted numbering
  };
  /**
   * Map of timestamp to data point (5-minute interval)
   */
  "Time Series (5min)": Record<string, TimeSeriesInstanceApiResponse>;
}

/**
 * Response shape for historical (daily) data API
 */
export interface HistoricalDataApiResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  /**
   * Map of date (YYYY-MM-DD) to data point
   */
  "Time Series (Daily)": Record<string, TimeSeriesInstanceApiResponse>;
}
