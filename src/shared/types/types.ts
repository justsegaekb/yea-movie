export type CategoriesType =
  | "movie"
  | "tv-series"
  | "anime"
  | "cartoon"
  | "animated-series"
  | "";

export interface CategoriesTypeResponse {
  name: CategoriesType;
  slug: CategoriesType;
}

export type Url = "url" | "previewUrl";

interface RequestParams {
  page?: number;
  limit?: number;
  type?: CategoriesType;
  query?: string;
  field?: string;
}
export type ParamsType = RequestParams | null;

export interface Actors {
  id?: number;
  enName: string | null;
  photo: string | undefined;
  description: string | null;
}
export interface IMovie {
  id: number;
  name: string | null;
  alternativeName: string | null;
  enName: string | null;
  type: CategoriesType;
  typeNumber: CategoriesType;
  year: number;
  description: string | null;
  rating: Record<string, number | null>;
  votes: Record<string, number | null>;
  poster: Record<Url, string>;
  backdrop: Record<Url, string | null>;
  genres: Record<"name", string>[];
  persons: Actors[];
}

export interface MoviesApiResonse {
  docs?: IMovie[];
  limit?: number;
  page?: number;
  pages?: number;
  total?: number;
  query?: string;
}
