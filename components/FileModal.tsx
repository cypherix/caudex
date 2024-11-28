'use client'
import { useFileStore } from "@/utils/zustand/barState";
import { useState,ChangeEvent } from "react";
import { Bounce, toast } from "react-toastify";

type FileModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const FileModal: React.FC<FileModalProps> = (props):JSX.Element=>{

    const [createFile,getFileByName] = useFileStore(state => [state.createFile,state.getFileByName])
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    const validateFileName = (name: string) => {
      const maxLength = 255; 
      if (name.trim() === '') {
        setError('Filename cannot be empty.');
        setIsButtonDisabled(true);
      } else if (name.length > maxLength) {
        setError(`Filename cannot exceed ${maxLength} characters.`);
        setIsButtonDisabled(true);
      } else if (!/^[\w,\s-]+\.[A-Za-z0-9]+$/.test(name)) {
        setError('Invalid filename format. Example: file.txt');
        setIsButtonDisabled(true);
      } else {
        setError('');
        setIsButtonDisabled(false);
      }
    };
    
      const handleCreateFile = () => {
        if (!isButtonDisabled) {
          if(getFileByName(fileName)){
            toast.error('File already exists', {
              position: "bottom-left",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
              icon:false
              
            })
            return
          }
          createFile({
            name: fileName,
            content: '',
          })
          toast.info('File created successfully', {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            icon:false
            
          })
          setFileName('');
          props.onClose(); 
        }
      };

    const handleFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setFileName(name);
        validateFileName(name);
      };
    return props.isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Create New File</h2>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter filename"
              value={fileName}
              onChange={handleFileNameChange}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={props.onClose}
                className="mr-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFile}
                disabled={isButtonDisabled}
                className={`px-4 py-2 rounded-md bg-[#000]] ${
                  isButtonDisabled
                    ? 'bg-indigo-300 text-white cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      ) : <div style={{display: 'none'}}></div>;
}