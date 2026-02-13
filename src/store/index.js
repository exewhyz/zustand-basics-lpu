import { create } from "zustand";

export const useCount = create((set, get) => ({
  count: 0,
  increment: (value = 1) => set((state) => ({ count: state.count + value })),
  decrement: (value = 1) => set((state) => ({ count : state.count - value})),
  reset : set({count : 0}),
  isEven: ()=> {
    // const count = get().count;
    const { count } = get();
    if(count % 2 === 0) return true;
    return false;
  }
}));

export const useUser = create((set,get)=>(
    {
        user: { id: 1, name: "Aniket", email : "test@gmail.com" },
        loading: false,
        fetchUser : async () => {
            set({ loading : true})
            const res = await fetch("");
            const user = await res.json();
            set({ user : user.data ,loading : false})
        }
    }
))
