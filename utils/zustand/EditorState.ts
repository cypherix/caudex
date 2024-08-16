// EditorState.ts
import { create } from "zustand";
import { produce } from "immer";
import DiffMatchPatch from "diff-match-patch";
import io from "socket.io-client";
import axios from "axios";

type EditorState = {
  content: string;
  isLoading: boolean;
  setContent: (content: string) => void;
  initializeSocket: () => void;
  saveToDatabase: () => Promise<void>;
  loadFromDatabase: (fileName: string) => Promise<void>;
};

const dmp = new DiffMatchPatch();

export const useEditorStore = create<EditorState>((set, get) => ({
  content: "",
  isLoading: false,
  setContent: (newContent) => {
    set(
      produce((state) => {
        state.content = newContent;
      })
    );
  },
  initializeSocket: () => {
    const socket = io();

    socket.on('connect', () => {
      console.log('WebSocket connected');
    });

    socket.on('server-update', (data) => {
      set(
        produce((state) => {
          const patches = dmp.patch_fromText(data.patches);
          const [updatedContent] = dmp.patch_apply(patches, state.content);
          state.content = updatedContent;
        })
      );
    });

    set(() => ({ socket }));
  },
  saveToDatabase: async () => {
    const { content } = get();
    const { activeFile } = useFileStore.getState();
    if (activeFile) {
      try {
        await axios.post('/api/save-file', { fileName: activeFile.name, content });
      } catch (error) {
        console.error('Error saving to database:', error);
      }
    }
  },
  loadFromDatabase: async (fileName: string) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`/api/load-file?fileName=${fileName}`);
      set({ content: response.data.content, isLoading: false });
    } catch (error) {
      console.error('Error loading from database:', error);
      set({ isLoading: false });
    }
  },
}));