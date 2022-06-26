import { AuthProvider } from "./contexts/AuthContext";
import IsAuthenticated from "./helpers/IsAuthenticated";
import { TodoApp } from "./pages/TodoApp";

function App() {
  return (
    <AuthProvider>
      <IsAuthenticated>
        <TodoApp />
      </IsAuthenticated>
    </AuthProvider>
  );
}

export default App;
