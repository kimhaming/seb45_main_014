import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/header/Header.jsx';
import { createGlobalStyle } from 'styled-components';
import GmarketSans from './assets/fonts/GmarketSansTTFMedium.ttf';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/Loading.jsx';
import ScrollButton from './assets/buttons/ScrollButton.jsx';
import AuthGoogle from './components/login/AuthGoogle.jsx';

const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const MainPage = lazy(() => import('./pages/main/MainPage.jsx'));
const MyPage = lazy(() => import('./pages/MyPage.jsx'));
const Store = lazy(() => import('./pages/Store.jsx'));
const SearchResult = lazy(() => import('./pages/search/SearchResult.jsx'));
const Cart = lazy(() => import('./pages/cart/Cart.jsx'));

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/mypage';

  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="w-full mx-auto min-h-screen">
        <ScrollButton />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/stores/:id" element={<Store />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth/google" element={<AuthGoogle />} />
          </Routes>
        </Suspense>
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSans';
    src: url(${GmarketSans}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    font-family: 'GmarketSans', sans-serif;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    padding-top: 65px;
  }
  ul, li {
    list-style-type: none;
  }
  `;
