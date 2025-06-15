import axios from "axios";
import { api } from "../../shared/api";
import { create } from 'zustand';

export type INews = {
      title: string, 
      version: number[], 
      date: string, 
      author: string, 
      description: string, 
      changelog: string[]
}

interface INewsStore {
      news: INews[], 
      getNews: () => void
}

const useNewsStore = create<INewsStore>()((set) => ({
      news: [], 
      getNews: async() => {
            try {
                  const news:{data:INews[]} = await axios.get(`${api}/news/`)
                  set({news: news.data})
            } catch (error) {
                  console.log(error);
            }
      }
}));
export {useNewsStore}