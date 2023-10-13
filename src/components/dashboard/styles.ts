import styled from 'styled-components';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
export const FilmContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 28rem;
  width: 100%;
  flex-wrap: wrap;

  overflow-y: auto;
  padding: 10px;
  gap: 1rem;
  border: 1px solid red;

  &::-webkit-scrollbar {
    appearance: none;
  }
`;
export const FilmDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: auto;
  overflow: hidden;
  padding: 10px;

  border: 1px solid red;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.5s ease-in-out;

  &:hover {
    width: 35rem;
  }
`;
export const FilmPoster = styled.img`
  width: 20rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 5px;
`;

export const FilmName = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  padding: 5px;
  width: 100%;
  height: 7rem;

  ${FilmDiv}:hover & {
    display: flex;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  gap:1rem;
`;

export const PaginationButton = styled.button.attrs({ type: 'submit' })`
  display: flex;
  width: auto;
  height: auto;
  background: transparent;
  border: none;
`;

export const NextIcon = styled(NavigateNext).attrs({ fontSize: 'large' })`
  background: transparent;
  border: none;
  color: #fff;

  &:hover {
    color: var(--dark-yellow);
  }
`;
export const PreviousIcon = styled(NavigateBefore).attrs({ fontSize: 'large' })`
  background: transparent;
  border: none;
  color: #fff;

  &:hover {
    color: var(--dark-yellow);
  }
`;
