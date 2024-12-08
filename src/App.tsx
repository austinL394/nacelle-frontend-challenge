import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />         
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
