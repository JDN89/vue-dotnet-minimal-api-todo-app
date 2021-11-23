import { acceptHMRUpdate, defineStore } from "pinia";
import { ToDoListInterface, newListInterface } from "../types/interfaces";

interface TodoStateInterface {
  toDoLists: ToDoListInterface[];
}

export const useTodoStore = defineStore("todo", {
  state: (): TodoStateInterface => ({
    toDoLists: [
      {
        listId: 1,
        userId: 1,
        title: "beestenboos Toon",
        todos: ["2 katten", "1 hond", "1000 luizen"],
        archived: [],
      },
      {
        listId: 2,
        userId: 1,
        title: "lawaai",
        todos: ["gitaar", "drum", "saxofoon"],
        archived: ["anula", "monika", "blond meken"],
      },
    ],
  }),
  actions: {
    async add(newToDoList: newListInterface) {
      console.log(newToDoList);
    },
  },
  getters: {
    getLists: (state) => state.toDoLists,
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot));
