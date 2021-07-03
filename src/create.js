import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
const[title,setTitle] = useState('enter blog title here');
const[body,setBody] = useState('');
const[author,setAuthor] = useState('select author name');
const history = useHistory();

const[ispending , setIspending] = useState(false);
const handlesubmit= (e)=>{
    e.preventDefault();
    const blog = {title,body,author};

    setIspending(true);
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
        })
    .then(()=>{
        setIspending(false);
        history.push('/');
    })
    

}

    return ( 
        <div className="create">
            <h2> Add a New Blog</h2>
            <form onSubmit={handlesubmit}>
            <label>Blog title</label>
            <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Blog body</label>
            <textarea required value = {body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <label>Blog author:</label>
            <select value = {author} onChange={(e)=>setAuthor(e.target.value)}>
              <option value="select author name">select author name</option>
             <option value = "mario">mario</option>   
              <option value="lavesh">lavesh</option>
            </select>
            {!ispending && <button>Add Blog</button>}
            {ispending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;

