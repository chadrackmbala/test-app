import { useLoaderData } from "react-router-dom"

export default function MyBlog() {

    const posts = useLoaderData();
    console.log(posts);


    return <>
        <h1>My Blog</h1>
    </>
}