import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Shell } from './components/shell';
import { AddPeople } from './routes/add-people';
import { ManageRelations } from './routes/manage-relations';
import { Welcome } from './routes/welcome';

export const Router = () => (
  <BrowserRouter>
    <Shell>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/add-people" element={<AddPeople />} />
        <Route path="/manage-relations" element={<ManageRelations />} />
      </Routes>
    </Shell>
  </BrowserRouter>
);
