import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePosts = create(
  persist(
    (set) => ({
      posts: [],
      createPost: async (title, description) => {
        const userId = useUser.getState().user.id;
        const newPost = {
          id: Date.now(),
          userId,
          title,
          description,
        };
        set((state) => ({ posts: [newPost, ...state.posts] }));
      },
    }),
    {
      name: "post-storage",
    },
  ),
);

export const useCount = create((set, get) => ({
  count: 0,
  increment: (value = 1) => set((state) => ({ count: state.count + value })),
  decrement: (value = 1) => set((state) => ({ count: state.count - value })),
  reset: () => set({ count: 0 }),
  isEven: () => {
    // const count = get().count;
    const { count } = get();
    if (count % 2 === 0) return true;
    return false;
  },
}));

export const useUser = create((set) => ({
  user: { id: 1, name: "Aniket", email: "test@gmail.com" },
  loading: false,
  fetchUser: async () => {
    set({ loading: true });
    const res = await fetch("");
    const user = await res.json();
    set({ user: user.data, loading: false });
  },
}));
