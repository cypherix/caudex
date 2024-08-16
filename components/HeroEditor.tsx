'use client'
import { editor } from "monaco-editor"
import { getLanguageByFilename } from "@/utils/Icon/mapping"
import theme from "@/utils/Theme"
import { useFileStore } from "@/utils/zustand/barState"
import { useEditorStore } from "@/utils/zustand/EditorState"
import { Editor, useMonaco } from "@monaco-editor/react"
import { useEffect, useState, useCallback } from "react"
import DiffMatchPatch from "diff-match-patch";

export const HeroEditor: React.FC = (): JSX.Element => {
    const { activeFile} = useFileStore(state => ({
        activeFile: state.activeFile,
    }))
    const monaco = useMonaco();
    const [isThemeApplied, setIsThemeApplied] = useState(false);

    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('caudex', theme);
            monaco.editor.setTheme('caudex');
            setIsThemeApplied(true);
            monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                noSemanticValidation: true,
                noSyntaxValidation: false,
            });

            
        }
        
    }, [monaco]);

    
    const lang = getLanguageByFilename(activeFile?.name || "")

    const editorOptions: editor.IStandaloneEditorConstructionOptions = {
        minimap: { enabled: false },
        lineNumbersMinChars: 3,
        fontFamily: 'Fira Code',
        fontSize: 16,
        wrappingIndent: 'same',
        cursorStyle: 'line',
        colorDecorators: true,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        bracketPairColorization: { enabled: true },
        matchBrackets: "always",
        tabSize: 2,
        wordWrap: "on",
        lineNumbers: "on",
        glyphMargin: true,
        folding: true,
        
    };

    const handleEditorDidMount = useCallback((editor: any, monaco: any) => {
        console.log('Editor mounted', editor);
        editor.focus();
    }, []);


    return (
        <div className="bg-[#000] w-[85vw] h-[92vh] flex justify-center items-center text-[#FFFFFF]">
            
            {activeFile?.content ? (
                <div className="w-full h-full">
                    <Editor
                    width="100%"
                    height="100%"
                    language={lang}
                    theme={isThemeApplied ? 'caudex' : 'vs-dark'}
                    options={editorOptions}
                    value={activeFile.content}
                    onMount={handleEditorDidMount}
                    loading={<div style={{ color: 'white' , textAlign: 'center',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>Loading editor...</div>}
                />
                </div>
            ) : (
                <div>Select Some File or Create a New File</div>
            )}
        </div>
    )
}