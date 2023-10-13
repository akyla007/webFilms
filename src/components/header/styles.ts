import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;

  top: 0;
  width: 100%;
  height: 4rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px var(--light-yellow) solid;
`;

export const Title = styled.h1`
  color: var(--light-yellow);
`;

export const MenuHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  height: 100%;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  border: none;
  width: auto;
  height: 100%;

  right: 0.5rem;
`;

export const SearchBar = styled.input`
  display: flex;
  position: relative;
  width: 0rem;
  height: 2rem;

  font-size: 1rem;
  border: none;

  color: var(--font-color);
  background: transparent;
  transition: all 1s;

  &:focus {
    width: 10rem;
    outline: none;
    border: 1px solid var(--dark-yellow);
    border-radius: 5px;
  }
`;

export const Icon = styled(SearchIcon)``;
