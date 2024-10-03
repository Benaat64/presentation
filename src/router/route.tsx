import { Routes, Route } from "react-router-dom";
import App from "../App";
import ProducersPage from "../page/ProducersPage";
import AdvertisersPage from "../page/AdvertisersPage";
import InvestorsPage from "../page/InvestorsPage";
import ContactPage from "@/page/ContactPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/producers" element={<ProducersPage />} />
      <Route path="/advertisers" element={<AdvertisersPage />} />
      <Route path="/investors" element={<InvestorsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoutes;
