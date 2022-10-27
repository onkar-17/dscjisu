import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "blogs");

export const getSlugs = (): string[] => {
    const paths = sync(`${POSTS_PATH}/*.mdx`);

    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split(".");
        return slug;
    });
};

export const getAllPosts = () => {
    const posts = getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
    return posts;
};

interface Post {
    content: string;
    meta: PostMeta;
}

export interface PostMeta {
    title: string;
    body: string;
    author: string;
    time: string;
    blogImage: string;
    authorImage: string;
    slug: string;
    tags: string;
    date: string;
    description: string;
}

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);
    // console.log(content);

    return {
        content,
        meta: {
            slug,
            description: data.description ?? "",
            title: data.title ?? slug,
            tags: data.tags ?? "",
            date: (data.date ?? new Date()).toString(),
            body: data.body ?? "",
            author: data.author ?? "",
            time: data.time ?? "",
            blogImage: data.blogImage ?? "",
            authorImage: data.authorImage ?? "",
        },
    };
};