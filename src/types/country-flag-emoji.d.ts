declare module "country-flag-emoji" {
  export interface CountryFlag {
    emoji: string;
    unicode: string;
    name: string;
    code: string;
  }

  export function get(countryCode: string): CountryFlag;
  export function list(): CountryFlag[];
}
