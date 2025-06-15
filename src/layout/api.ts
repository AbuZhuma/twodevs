import { create } from 'zustand';

interface ILayoutStore {
      alert: string, 
      allertType: AlertType, 
      setAllert: (sort: string, type: AlertType) => void
}

type AlertType = 'error' | 'warning' | 'info' | 'success';

const useLayoutStore = create<ILayoutStore>()((set) => ({
      alert: "", 
      allertType: "success",
      setAllert: (inn, type) => {
            set({alert: inn})
            set({allertType: type})
      }
}));
export {useLayoutStore}