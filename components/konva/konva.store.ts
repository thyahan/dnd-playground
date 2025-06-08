import { create } from "zustand";

export type IElement = {
  id: string;
  label: string;
  type: string;
};

type KnovaStore = {
  elements: IElement[];
  addElement: (element: IElement) => void;
  removeElement: (id: string) => void;
};

export const useKonvaStore = create<KnovaStore>(set => ({
  elements: [],
  addElement: element => set(state => ({ elements: [...state.elements, element] })),
  removeElement: id => set(state => ({ elements: state.elements.filter(element => element.id !== id) })),
}));
