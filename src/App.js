
import './App.css';
import AppRouter from './app-router/AppRouter';
import BlogProvider from './contexts/BlogContext'


function App() {
  return (
      <BlogProvider>
        <AppRouter />
      </BlogProvider>

  );
}

export default App;
