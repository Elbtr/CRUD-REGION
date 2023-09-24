export default interface Provinces {
  id: number;
  name: string;
}
export interface Regencies extends Provinces {
  id_province: number;
}
export interface Districts extends Provinces {
  id_regency: number;
}
export interface Villages extends Provinces {
  id_district: number;
}
