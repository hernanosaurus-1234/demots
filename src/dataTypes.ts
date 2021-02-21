export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export const emptyMovie: Movie = {
  id: "",
  title: "",
  overview: "",
  poster_path: "",
};
