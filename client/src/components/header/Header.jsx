import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../assets/buttons/Button.jsx';
import SearchBar from './SearchBar.jsx';
import Login from '../login/Login.jsx';
import { useModalStore } from '../../store/store.js';

const HeaderBox = styled.header`
  padding: 12px;
  width: 100%;
  position: fixed;
  margin-top: -65px;
  z-index: 1000;
  height: 65px;
  background-color: white;
  color: #debe8f;
  display: flex;
  justify-content: space-between;
  box-shadow:
    0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const Logo = styled(Link)`
  display: flex;
  width: 150px;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-family: AritaSans;
  font-weight: 900;
`;

const MenuBox = styled.div`
  display: flex;
  width: 150px;
  justify-content: flex-end;
  align-items: center;
`;

const SearchBox = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModalStore();

  return (
    <>
      <HeaderBox>
        <Logo to="/">
          {/* <img src={images.mainlogo} alt="main logo" width="50" /> */}
          BBANG ORDER
        </Logo>
        <SearchBox>
          <SearchBar />
        </SearchBox>
        <MenuBox>
          <Button onClick={openModal} weight="800">
            로그인
          </Button>
        </MenuBox>
      </HeaderBox>

      {isModalOpen && <Login onClose={closeModal} />}
    </>
  );
};

export default Header;
