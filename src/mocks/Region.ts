import Provinces, {
  Districts,
  Regencies,
  Villages,
} from "../interface/IRegion";

const provinces: Provinces[] = [
  {
    id: 1,
    name: "SUMATERA UTARA",
  },
  {
    id: 11,
    name: "ACEH",
  },
];

const regencies: Regencies[] = [
  {
    id: 1101,
    id_province: 11,
    name: "KABUPATEN SIMEULUE",
  },
  {
    id: 1102,
    id_province: 11,
    name: "KABUPATEN ACEH SINGKIL",
  },
];

const districts: Districts[] = [
  {
    id: 1103010,
    id_regency: 1103,
    name: "TRUMON",
  },
  {
    id: 1103011,
    id_regency: 1103,
    name: "TRUMON TIMUR",
  },
];

const village: Villages[] = [
  {
    id: 1103010001,
    id_district: 1103010,
    name: "KUTA PADANG",
  },
  {
    id: 1103010002,
    id_district: 1103010,
    name: "RAKET",
  },
];

export { provinces, regencies, districts, village };
