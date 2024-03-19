/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cursor from "./components/Cursor";
import { Home, Training, AboutSewp, Procurement, ContractHolders, Storefront } from './pages';
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <main className="bg-stone-200 w-full h-full m-0 p-0">
        <Router>
            <TopNav />
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/training" element={<Training />} />
                <Route path="/storefront" element={<Storefront />} />
                <Route path="/contract-holders" element={<ContractHolders />} />
                <Route path="/about-sewp" element={<AboutSewp />} />
                <Route path="/procurement" element={<Procurement />} />
            </Routes>
        </Router>
        <Cursor />
    </main>
  )
}

export default App