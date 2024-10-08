import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './GlobalStyle';

import Mypage from './component/Mypage/Mypage.js';
import Community from './component/Community/Community.js';
import AddForm  from './component/Community/AddForm.js';
//page
import Login from './pages/Login/Login';
import Agreement from './pages/Agreement/Agreement'
import KeyWord from './pages/Onboarding/KeyWord.js';
import Intro from './pages/Onboarding/Intro';
import MapMain from './pages/map/Main/MapMain';
import MapSearch from './pages/map/search/MapSearch';
import Home from './pages/Main/Home';


function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/key-word" element={<KeyWord />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/main" element={<Home />} />
            <Route path="/map-main" element={<MapMain />} />
            <Route path="/map-search" element={<MapSearch />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/addform" element={<AddForm />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
