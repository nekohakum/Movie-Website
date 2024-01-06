import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import "./blog.css";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const fetchData = () => {
        fetch("http://localhost:5800/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((e) => console.log(e));
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section className="blogs">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Our Blog</h4>
                </div>
                <div className="row mt-5">
                    {blogs &&
                        blogs.length > 0 &&
                        blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
