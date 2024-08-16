import { useAppSelector } from "@/app/appStore"
import { Search } from "@/features/search"
import { MovieCard } from "@/shared/uiKit/movieCard/ui/MovieCard"

export const Main = () => {
  
  const movie = useAppSelector((state) => state.movies.movies[6])  

    
  return (
    <>
      <Search />
      <div style={{display: 'flex', gap: '10px'}}>
        <MovieCard id={movie?.id} poster={movie?.poster} alternativeName={movie?.alternativeName} name={movie?.name} year={movie?.year} rating={movie?.rating}/>
        <MovieCard id={movie?.id} poster={movie?.poster} alternativeName={movie?.alternativeName} name={movie?.name} year={movie?.year} rating={movie?.rating}/>
      </div>
      
    </>
  )
}