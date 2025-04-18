interface MetaDataTypeApiResponse {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}

interface TimeSeriseInstanceApiReponse {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface RealTimeStockPriceApiResponse {
  "Meta Data": MetaDataTypeApiResponse;
  "Time Series (5min)": Map<string, TimeSeriseInstanceApiReponse>;
}

export interface HistoricalDataApiResponse {
  "Meta Data": MetaDataTypeApiResponse;
  "Time Series (Daily)": Map<string, TimeSeriseInstanceApiReponse>;
}
