export interface CountryVirusData {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  country: string;
  country_code: string;
  id: number;
  latest: {
    confirmed: number;
    deaths: number;
    recovered: number;
  };
  province: string;
}
