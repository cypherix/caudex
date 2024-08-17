import { PageModel, connectMongo } from "../middlewares/mongo";
import * as DMP from 'diff-match-patch';

// Ensure MongoDB connection is established before handling requests
connectMongo();

// Handle GET requests
export const GET = async (req: Request, { params }: { params: { UrlSlug: string } }) => {
    try {
        const UrlSlug = params.UrlSlug;
        console.log(`Received GET request for slug: ${UrlSlug}`);

        // Find the page with the given slug
        let data = await PageModel.findOne({ slug: UrlSlug });
        if (!data) {
            // If the page doesn't exist, create it
            data = await PageModel.create({ slug: UrlSlug, files: [] });
            console.log(`Created new page for slug: ${UrlSlug}`);
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error('Error handling GET request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

// Handle POST requests
// Handle POST requests for creating a new file
export const POST = async (req: Request, { params }: { params: { UrlSlug: string } }) => {
    try {
        const UrlSlug = params.UrlSlug;
        const { name, content } = await req.json();

        console.log(`Received POST request for creating a new file in slug: ${UrlSlug} with name: ${name} `);

        // Find the page with the given slug
        const page = await PageModel.findOne({ slug: UrlSlug });
        if (!page) {
            return new Response(JSON.stringify({ error: 'Page not found' }), { status: 404 });
        }

        // Check if the file already exists
        if (page.files.some((f: any) => f.name === name)) {
            return new Response(JSON.stringify({ error: 'File already exists' }), { status: 400 });
        }

        // Create the new file
        page.files.push({ name: name, content: content });
        await page.save();

        console.log(`Created new file: ${name} in page: ${UrlSlug}`);
        return new Response(JSON.stringify({ success: true }), { status: 201 });
    } catch (error) {
        console.error('Error handling POST request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

// Handle PATCH requests for updating the file content
export const PATCH = async (req: Request, { params }: { params: { UrlSlug: string } }) => {
    try {
        const UrlSlug = params.UrlSlug;
        const { fileName, patch } = await req.json();

        console.log(`Received PATCH request for updating file content in slug: ${UrlSlug}, file: ${fileName}`);

        // Find the page with the given slug
        const page = await PageModel.findOne({ slug: UrlSlug });
        if (!page) {
            return new Response(JSON.stringify({ error: 'Page not found' }), { status: 404 });
        }

        // Find the file within the page
        const file = page.files.find((f: any) => f.name === fileName);
        if (!file) {
            return new Response(JSON.stringify({ error: 'File not found' }), { status: 404 });
        }

        // Apply the patch to the file content
        const dmp = new DMP.diff_match_patch();
        const patches = dmp.patch_fromText(patch);
        const [newContent, success] = dmp.patch_apply(patches, file.content);

        if (!success) {
            return new Response(JSON.stringify({ error: 'Patch application failed' }), { status: 400 });
        }

        file.content = newContent;
        await page.save();

        console.log(`Updated content for file: ${fileName} in page: ${UrlSlug}`);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error handling PATCH request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

// Handle DELETE requests for deleting a file
export const DELETE = async (req: Request, { params }: { params: { UrlSlug: string } }) => {
    try {
        const UrlSlug = params.UrlSlug;
        const { fileName } = await req.json();

        console.log(`Received DELETE request for removing file in slug: ${UrlSlug}, file: ${fileName}`);

        // Find the page with the given slug
        const page = await PageModel.findOne({ slug: UrlSlug });
        if (!page) {
            return new Response(JSON.stringify({ error: 'Page not found' }), { status: 404 });
        }

        // Find the file within the page
        const fileIndex = page.files.findIndex((f: any) => f.name === fileName);
        if (fileIndex === -1) {
            return new Response(JSON.stringify({ error: 'File not found' }), { status: 404 });
        }

        // Remove the file from the list
        page.files.splice(fileIndex, 1);
        await page.save();

        console.log(`Deleted file: ${fileName} in page: ${UrlSlug}`);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error handling DELETE request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

