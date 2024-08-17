export enum Caregories {
  "movie" = 1,
  "tv-series" = 2,
  "anime" = 3,
  "cartoon" = 4,
  "animated-series" = 5,
}

export type Url = "url" | "previewUrl";

interface RequestParams {
  page?: number;
  limit?: number;
  type?: Caregories;
  query?: string;
}
export type ParamsType = RequestParams | null;

export interface IMovie {
  id: number;
  name: string | null;
  alternativeName: string | null;
  enName: string | null;
  type: Caregories;
  typeNumber: Caregories;
  year: number;
  description: string | null;
  rating: Record<string, number | null>;
  votes: Record<string, number | null>;
  poster: Record<Url, string>;
  backdrop: Record<Url, string | null>;
  genres: Record<"name", string>[];
}

export interface MoviesApiResonse {
  docs: Partial<IMovie[]>;
  limit: number;
  page: number;
  pages: number;
  total: number;
  query: string;
}

