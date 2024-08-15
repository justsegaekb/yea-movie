import { useGetMoviesQuery } from '@/entities/movies'
import { Heading } from '@/shared/uiKit/heading'
import { Input } from '@/shared/uiKit/input'
import { useState } from 'react'
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce'

export const Search = () => {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce(value, 1000);
  
  
  useGetMoviesQuery({query: debouncedValue});  
  
  return (
    <>
      <Heading size='medium'>Поиск фильмов</Heading>
      <Input placeholder='Введите название фильма' setValue={setValue}/>
    </>
  )
}
