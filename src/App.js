import "./index.css";
import "typeface-lobster";
import Navigation from "./components/Navigation/Navigation";
import Title from "./components/Title/Title";
import CurrencyConverterPage from "./pages/CurrencyConverterPage/CurrencyConverterPage";
// import ExchangeRatesPage from "./pages/ExchangeRatesPage/ExchangeRatesPage";

const App = () => {
    return (
        <>
            <Navigation />
            <Title />
            <CurrencyConverterPage />
        </>
    );
};

export default App;
