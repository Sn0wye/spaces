import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { supabase } from '../lib/supabase';
import { Todo } from '../types/todo';
import { useAuth } from './AuthContext';

type TodoContextProps = {
  children: ReactNode;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newTodoDescription: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export const TodoProvider = ({ children }: TodoContextProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchData();

    const eventListener = supabase
      .from('Todos')
      .on('*', (payload) => {
        fetchData();
      })
      .subscribe();

    return () => {
      eventListener.unsubscribe();
    };
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('Todos')
      .select('*')
      .eq('author', user?.uid);
    if (error) throw new Error(error.message);
    setTodos(data);
  };

  async function addTodo(todo: Todo) {
    const { error } = await supabase.from('Todos').insert([
      {
        id: todo.id,
        description: todo.description,
        isCompleted: todo.isCompleted,
        author: todo.author,
        category: todo.category,
      },
    ]);
    if (error) throw new Error(error.message);
  }

  async function deleteTodo(id: string) {
    const { error } = await supabase.from('Todos').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }

  async function updateTodo(id: string, newTodoDescription: string) {
    const { error } = await supabase
      .from('Todos')
      .update({ description: newTodoDescription })
      .eq('id', id);
    if (error) throw new Error(error.message);
  }

  async function handleCheckTodo(id: string) {
    const { data, error } = await supabase
      .from('Todos')
      .select('*')
      .eq('id', id);
    if (error) throw new Error(error.message);
    if (data?.[0]?.isCompleted) {
      const { error } = await supabase
        .from('Todos')
        .update({ isCompleted: false });
      return;
    }
    if (data?.[0]?.isCompleted === false) {
      const { error } = await supabase
        .from('Todos')
        .update({ isCompleted: true });
      return;
    }
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, handleCheckTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
