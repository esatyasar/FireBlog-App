import './App.css';
import AppRouter from './app-router/AppRouter';
import BlogProvider from './contexts/BlogContext'
import { ToastContainer } from "react-toastify";

function App() {
  return (
      <BlogProvider>
        <AppRouter />
        <ToastContainer />
      </BlogProvider>
  );
}
export default App;
