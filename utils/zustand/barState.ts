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
    isShareOpen: boolean;
    isSyncing: boolean;
    isMenuOpen: boolean;
    setSlug: (slug: string) => void;
    setActiveFile: (fileName: string) => void;
    removeFile: (fileName: string) => void;
    createFile: (file: FileType) => Promise<void>;
    deleteFile: () => Promise<void>;
    getFileByName: (fileName: string) => FileType | undefined;
    openMenu: () => void;
    closeMenu: () => void;
    openModal: () => void;
    closeModal: () => void;
    openShareModal: () => void;
    closeShareModal: () => void;
    setFiles: (files: FileType[]) => void;
    updateFileContent: (fileName: string, content: string, patch: string) => Promise<void>;
}

const useFileStore = create<FileState>((set, get) => ({
    slug: '',
    files: [],
    activeFile: null,
    isOpen: false,
    isShareOpen: false,
    isSyncing: false,
    isMenuOpen: false,
    setSlug: (slug: string) => set({ slug }),
    setActiveFile: (fileName: string) => set(
        produce((state: FileState) => {
            state.isMenuOpen = false;
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
        })
    ),
    createFile: async (file: FileType) => {
        set({ isSyncing: true });
        try {
            await createData(get().slug, file);
            set(
                produce((state: FileState) => {
                    if (!state.files.some(f => f.name === file.name)) {
                        state.files = [...state.files, { ...file }];
                    }
                    state.activeFile = state.files.find(f => f.name === file.name) || null;
                })
            );
        } catch (error) {
            console.error('Error creating file:', error);
        } finally {
            set({ isSyncing: false });
        }
    },
    
    deleteFile: async () => {
        set({ isSyncing: true });
        try {
            await deleteData(get().slug, get().activeFile?.name || '');
            set(
                produce((state: FileState) => {
                    state.files = state.files.filter(f => f.name !== state.activeFile?.name);
                    state.activeFile = null;
                })
            );
        } catch (error) {
            console.error('Error deleting file:', error);
        } finally {
            set({ isSyncing: false });
        }
    },
    getFileByName: (fileName: string) => get().files.find(f => f.name === fileName),
    openModal: () => set({ isOpen: true }),
    openShareModal: () => set({ isShareOpen: true }),
    closeShareModal: () => set({ isShareOpen: false }),
    closeModal: () => set({ isOpen: false }),
    setFiles: (files: FileType[]) => set({ files }),
    openMenu() {
        set({ isMenuOpen: true });
    },
    closeMenu() {
        set({ isMenuOpen: false });
    },
    updateFileContent: async (fileName: string, content: string, patch: string) => {
        set({ isSyncing: true });
        try {
            await updateData(get().slug, fileName, patch);
            set(
                produce((state: FileState) => {
                    const file = state.files.find(f => f.name === fileName);
                    if (file) {
                        file.content = content;
                        if (state.activeFile?.name === fileName) {
                            state.activeFile = file;
                        }
                    }
                })
            );
        } catch (error) {
            console.error('Error updating file content:', error);
        } finally {
            set({ isSyncing: false });
        }
    },
}));

export { useFileStore };