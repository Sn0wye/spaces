import { AuthProvider } from './contexts/AuthContext';
import { TodoProvider } from './contexts/Todos';
import IsAuthenticated from './helpers/IsAuthenticated';
import { TodoApp } from './pages/TodoApp';

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <IsAuthenticated>
          <TodoApp />
        </IsAuthenticated>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
