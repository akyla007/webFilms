import { useQuery } from 'react-query';
import {
  DashboardContainer,
  FilmContainer,
  FilmDiv,
  FilmName,
  FilmPoster,
  PaginationButton,
  PaginationContainer,
  NextIcon,
  PreviousIcon,
} from './styles';
import { ItemFilm } from '../../interface/dashboard';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context';

function Dashboard() {
  const [pagination, setPagination] = useState<number>(1);
  const { searchFilter } = useContext(AuthContext);
  const getMovies = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${searchFilter}&apikey=4aeb089c&page=${pagination}`,
    );

    return await res.json();
  };
  const {
    data = '',
    error,
    isLoading,
  } = useQuery(['omdAPI', searchFilter, pagination], getMovies);
  if (error) return <div>Error on response!</div>;
  if (isLoading) return <div>Loading, please wait!</div>;

  return (
    <DashboardContainer>
      <FilmContainer>
        {data.Search?.map((item: ItemFilm) => (
          <FilmDiv>
            <FilmPoster src={item.Poster} alt="Films Images" />
            <FilmName>{item.Title}</FilmName>
          </FilmDiv>
        ))}
      </FilmContainer>
      <PaginationContainer>
        <PaginationButton onClick={() => setPagination(pagination - 1)}>
          <PreviousIcon />
        </PaginationButton>
        {pagination}
        <PaginationButton onClick={() => setPagination(pagination + 1)}>
          <NextIcon />
        </PaginationButton>
      </PaginationContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
