import { AuthProvider } from "./Contexts/AuthContext";
import IsAuthenticated from "./Helpers/IsAuthenticated";
import { TodoApp } from "./Pages/TodoApp";

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
