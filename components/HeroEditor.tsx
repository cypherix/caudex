'use client'
import React, { useEffect, useState, useCallback } from "react"
import { editor } from "monaco-editor"
import { Editor, useMonaco } from "@monaco-editor/react"
import * as DMP from 'diff-match-patch'
import { useFileStore } from "@/utils/zustand/barState"
import { getLanguageByFilename } from "@/utils/Icon/mapping"
import theme from "@/utils/Theme"

export const HeroEditor: React.FC = () => {
    const { activeFile, updateFileContent } = useFileStore(state => ({
        activeFile: state.activeFile,
        updateFileContent: state.updateFileContent,
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

    const handleEditorChange = (value: string | undefined) => {
        if (activeFile && value !== undefined) {
            const dmp = new DMP.diff_match_patch();
            
            const patches = dmp.patch_make(activeFile.content, value);
            const patchText = dmp.patch_toText(patches);   

            updateFileContent(activeFile.name, value, patchText);            
        }
    };

    return (
        <div className="bg-[#000] w-full h-full flex justify-center items-center text-[#FFFFFF]">
            {activeFile? (
                <div className="w-full h-full">
                    <Editor
                        width="100%"
                        height="100%"
                        language={lang? lang : undefined }
                        theme={isThemeApplied ? 'caudex' : 'vs-dark'}
                        options={editorOptions}
                        value={activeFile.content}
                        onMount={handleEditorDidMount}
                        onChange={handleEditorChange}
                        loading={<div style={{ color: 'white' , textAlign: 'center',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>Loading editor...</div>}
                    />
                </div>
            ) : (
                <div>Select Some File or Create a New File</div>
            )}
        </div>
    )
}
