export interface UsersInterface {
    id: number | null;
    // primary key
    email: string;
    password: string;
  }
  
  export interface ToDoListInterface {
    listId: number | null;
    // primary key
    userId: number | null;
    //foreign key
    title: string;
    todos: string[];
  
    archived: string[];
  }
  export interface newListInterface {
    userId: number | null;
    title: string;
    todos: string[];
  
    archived: string[];
  }
  
  export interface LogInUserInterface {
    email: string;
    password: string;
  }