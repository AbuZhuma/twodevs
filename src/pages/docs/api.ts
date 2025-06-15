import { create } from 'zustand';

interface INewsStore {
      selected: string,
      select: (sel: string) => void
}

const useDocsStore = create<INewsStore>()((set) => ({
      selected: "siroca-crm", 
      select: (sel) => {
            set({selected: sel})
      }
}));
export {useDocsStore}