import { useEffect } from 'react';
import { FileType, useFileStore } from '@/utils/zustand/barState';

export const useEditorData = (slug:string) => {
    const setFiles = useFileStore(state => state.setFiles);
    useEffect(() => {
        if (slug) {
            fetch(`/api/${slug}`)
                .then(res => res.json())
                .then(data => {
                    setFiles(data.files);
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
        const response = await fetch(`/api/${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(file),
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
export const updateData = async (slug: string, name:string,patch:string) => {
    try {
        const response = await fetch(`/api/${slug}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, patch }),
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
        const response = await fetch(`/api/${slug}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fileName }),
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