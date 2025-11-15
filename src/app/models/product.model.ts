export interface Product {
  name: string;
  fullPrice: string;
  price: string;
  discount: string;
  img: string;
  images?: string[];
  description?: string;
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  genre?: string;
  reviews?: number;
  tags?: string[];
  countryCompatibility?: string;
  installation?: string;
  platforms?: string[];
}
