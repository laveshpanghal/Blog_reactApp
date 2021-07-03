
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const{ data:blogs,ispending,error}=useFetch('http://localhost:8000/blogs');

  
    return ( 
        <div className="Home">
        {error &&  <div>{error}</div>}
            {
                ispending&&<div className="loading">Loading...</div>
            }  
       {blogs&&<BlogList blogs={blogs} title = "All blogs!!" /> }
        
        </div>
     );
}
 
export default Home;