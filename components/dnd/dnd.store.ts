import { create } from "zustand";

type Item = {
  id: string;
  position: {
    x: number;
    y: number;
  };
};

type Store = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, item: Item) => void;
};

export const useDnDStore = create<Store>(set => ({
  items: [],
  addItem: item => set(state => ({ items: [...state.items, item] })),
  removeItem: id => set(state => ({ items: state.items.filter(item => item.id !== id) })),
  updateItem: (id, item) => set(state => ({ items: state.items.map(i => (i.id === id ? item : i)) })),
}));
