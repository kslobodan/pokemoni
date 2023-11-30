import { Route, Routes } from 'react-router';

import Pokemons from './pages/Pokemons.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
    </Routes>
  );
}

export default App;
