import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="*" element={<Navigate to="/notifications" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
