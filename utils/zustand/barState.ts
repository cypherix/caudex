import create from "zustand";
import { produce } from "immer";
import { createData, deleteData, updateData } from "./useEditorData";

export type FileType = {
    name: string;
    content: string;
};

interface FileState {
    slug: string;
    files: FileType[];
    activeFile: FileType | null;
    isOpen: boolean;
    setSlug: (slug: string) => void;
    setActiveFile: (fileName: string) => void;
    removeFile: (fileName: string) => void;
    createFile: (file: FileType) => void;
    deleteFile: () => void;
    getFileByName: (fileName: string) => FileType | undefined;
    openModal: () => void;
    closeModal: () => void;
    setFiles: (files: FileType[]) => void;
    updateFileContent: (fileName: string, content: string) => void;
}

const useFileStore = create<FileState>((set, get) => ({
    slug: '',
    files: [],
    activeFile: null,
    isOpen: false,
    setSlug: (slug: string) => set({ slug }),
    setActiveFile: (fileName: string) => set(
        produce((state: FileState) => {
            const file = state.files.find(f => f.name === fileName);
            if (file) {
                state.activeFile = file;
            }
        })
    ),
    removeFile: (fileName: string) => set(
        produce((state: FileState) => {
            if (state.activeFile?.name === fileName) {
                state.activeFile = null;
            }
            state.files = state.files.filter(f => f.name !== fileName);
        })
    ),
    createFile: (file: FileType) => set(
        produce((state: FileState) => {
            if (!state.files.some(f => f.name === file.name)) {
                state.files = [...state.files, { ...file }];
                createData(state.slug, file);
            }
            state.activeFile = state.files.find(f => f.name === file.name) || null;
        })
    ),
    deleteFile: () => set(
        produce((state: FileState) => {
            deleteData(state.slug, state.activeFile?.name || '');
            state.files = state.files.filter(f => f.name !== state.activeFile?.name);
            state.activeFile = null; 
                       
        })
    ),
    getFileByName: (fileName: string) => get().files.find(f => f.name === fileName),
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    setFiles: (files: FileType[]) => set({ files }),
    updateFileContent: (fileName: string, content: string) => set(
        produce((state: FileState) => {
            updateData(state.slug, { name: fileName, content: content });
            const file = state.files.find(f => f.name === fileName);
            if (file) {
                file.content = content;
                if (state.activeFile?.name === fileName) {
                    state.activeFile = file;
                }
            }
        })
    ),
}));

export { useFileStore };