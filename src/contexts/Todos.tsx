import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { off, onValue, push, ref, remove, update } from 'firebase/database';
import { Todo } from '../types/todo';
import { useAuth, User } from './Auth';
import { database } from '../lib/firebase';

type TodoContextProps = {
  children: ReactNode;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newTodoDescription: string) => void;
  handleCheckTodo: (id: string, isChecked: boolean) => void;
};

type FirebaseTodos = Record<
  string,
  {
    id: string;
    description: string;
    isCompleted: boolean;
    author: string;
  }
>;

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export const TodoProvider = ({ children }: TodoContextProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const todoRef = ref(database, `todos/${user.uid}`);

    //Firebase Realtime Event Listener
    onValue(todoRef, (room) => {
      const todosDatabase = room.val();
      const firebaseTodos: FirebaseTodos = todosDatabase.todos ?? {};

      const parsedTodos = Object.entries(firebaseTodos).map(([key, value]) => {
        return {
          id: key,
          description: value.description,
          isCompleted: value.isCompleted,
          author: value.author,
        };
      });

      setTodos(parsedTodos);
    });

    return () => off(todoRef);
  }, [user]);

  async function addTodo(todo: Todo) {
    if (!user) return;
    const todoRef = ref(database, `todos/${user.uid}/todos`);

    await push(todoRef, todo);
  }

  async function deleteTodo(id: string) {
    if (!user) return;
    const todoPath = ref(database, `todos/${user.uid}/todos/${id}`);

    await remove(todoPath);
  }

  async function updateTodo(id: string, newTodoDescription: string) {
    if (!user) return;
    const todoPath = ref(database, `todos/${user.uid}/todos/${id}`);

    await update(todoPath, { description: newTodoDescription });
  }

  async function handleCheckTodo(id: string, isCompleted: boolean) {
    if (!user) return;
    const todoPath = ref(database, `todos/${user.uid}/todos/${id}`);

    if (isCompleted) {
      await update(todoPath, { isCompleted: false });
    } else {
      await update(todoPath, { isCompleted: true });
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        handleCheckTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
