import { useContext, useRef } from 'react';
import {
  Header,
  Title,
  SearchBar,
  MenuHeaderContainer,
  SearchContainer,
  Icon,
} from './styles';
import { AuthContext } from '../../context';

function HeaderContent() {
  const { setSearchFilter } = useContext(AuthContext);
  const inputRef = useRef(null);

  const focusSearchBar = () => {
    inputRef.current.focus();
  };

  return (
    <Header>
      <Title>WebFilms</Title>
      <MenuHeaderContainer>
        <SearchContainer>
          <Icon fontSize="medium" onClick={focusSearchBar} />
          <SearchBar
            type="search"
            onChange={(e) => setSearchFilter(e.target.value)}
            ref={inputRef}
          ></SearchBar>
        </SearchContainer>
      </MenuHeaderContainer>
    </Header>
  );
}

export default HeaderContent;
