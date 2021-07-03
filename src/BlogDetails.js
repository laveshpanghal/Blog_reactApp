import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const history=useHistory();
    const {id} = useParams();
    const {error,ispending,data:blog} = useFetch('http://localhost:8000/blogs/' + id);
    const handleDelete= ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
         })
    .then(()=>{
        history.push('/')
    })

        }
    
    return ( 
        <div className="blog-details">
            {ispending&& <div>Loading...</div>}
            {error&&<div>{error}</div>} 
            
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>

            
            )}
        </div>

     );
}
 
export default BlogDetails;