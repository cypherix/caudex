import { useEffect } from 'react';
import { FileType, useFileStore } from '@/utils/zustand/barState';

export const useEditorData = (slug:string) => {
    const setFiles = useFileStore(state => state.setFiles);
    useEffect(() => {
        if (slug) {
            fetch(`https://n46jyjcsjhhvmihuptct3zddxi0veysb.lambda-url.eu-north-1.on.aws`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ slug }),
                }
            )
                .then(res => res.json())
                .then(data => {
                    setFiles(data.files);
                    console.log(data.files);
                })
                .catch(error => {
                    console.error('Error fetching editor data:', error);
                });
        }
    }, [slug, setFiles]);

    return { slug };
};

export const createData = async (slug: string, file: FileType) => {
    try {
        const response = await fetch(`https://ujp6tfgopfbqj3uo2ejbuhklga0rlwhr.lambda-url.eu-north-1.on.aws/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug, name: file.name, content: file.content }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to create file');
        }

        return await response.json();
    } catch (error: any) {
        console.error('Error creating file:', error);
        return { success: false, error: error.message };
    }
};

// Function to update a file by sending a PATCH request to the backend API
export const updateData = async (slug: string, name?:string ,patch?:string) => {
    console.log(slug, name, patch);
    
    try {
        const response = await fetch(`https://vzb3jxyxsrnh36qfvvuz4cucwq0olsck.lambda-url.eu-north-1.on.aws`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug, name, patch }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to update file');
        }

        return await response.json();
    } catch (error: any) {
        console.error('Error updating file:', error);
        return { success: false, error: error.message };
    }
};

// Function to delete a file by sending a DELETE request to the backend API
export const deleteData = async (slug: string, fileName: string) => {
    try {
        const response = await fetch(`https://equoaql4aqximoypdsxex262mi0evdly.lambda-url.eu-north-1.on.aws`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({slug, name: fileName }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to delete file');
        }

        return await response.json();
    } catch (error: any) {
        console.error('Error deleting file:', error);
        return { success: false, error: error.message };
    }
};