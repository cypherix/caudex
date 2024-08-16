import create from "zustand";
import { produce } from "immer";

export type FileType = {
    name: string;
    content: string;
};



interface FileState {
    files: FileType[];
    activeFile: FileType | null;
    isOpen:boolean;
    setActiveFile: (fileName: string) => void;
    removeFile: (fileName: string) => void;
    createFile: (file: FileType) => void;
    deleteFile: () => void;
    getFileByName: (fileName: string) => FileType | undefined;
    openModal:()=>void;
    closeModal:()=>void;
}


const initialFiles: FileType[] = [
    {
        name: "index.html",
        content: "<h1>Hello, World!</h1>",
    },
    {
        name: "azure-pipelines.yml",
        content: "h1 { color: red; }",
    },
    {
        name: "script.js",
        content: "console.log('Hello, World!');",
    }
];

export const useFileStore = create<FileState>((set, get) => ({
    files: initialFiles,
    activeFile: null,
    isOpen:false,

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
        })
    ),

    createFile: (file: FileType) => set(
        produce((state: FileState) => {
            if (!state.files.some(f => f.name === file.name)) {
                state.files.push(file);
            }
            state.activeFile = file;
        })
    ),
    deleteFile: () => set(
        produce((state: FileState) => {
            state.files = state.files.filter(f => f.name !== state.activeFile?.name);
            state.activeFile = null;            
        })
    ),
    getFileByName: (fileName: string) => get().files.find(f => f.name === fileName),
    openModal:()=>set({isOpen:true}),
    closeModal:()=>set({isOpen:false}),
}));