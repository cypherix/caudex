'use client'
import theme from "@/utils/Theme"
import { Editor, useMonaco }  from "@monaco-editor/react"
import { useEffect } from "react"
type EditorProps = {
    language: string
    content: string
    handleChange ?: (value: string) => void
}
export const HeroEditor:React.FC<EditorProps> = (props):JSX.Element => {
    const monaco = useMonaco();

    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('caudex', theme);
            monaco.editor.setTheme('caudex');
        } 
    }, [monaco]);
    
    return (
        <Editor
        width="100%"
        height="100%"
        language={props.language}
        options={
            {
                fontFamily: 'JetBrains Mono',
                fontSize: 16
            }
        }
        value={props.content}
        />
    )
}

