import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyConverterPage from "../pages/CurrencyConverterPage";
import ExchangeRatesPage from "../pages/ExchangeRatesPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CurrencyConverterPage />} />
                <Route path="/rates" element={<ExchangeRatesPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
