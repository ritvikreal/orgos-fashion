import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/blog.css";

import hero from "../assets/images/blog/hero.jpg";

import blogData from "../data/blogData";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

function Blog() {

return(

<>
<Navbar/>

<section className="blog-hero">



<img src={hero} alt=""/>

</section>

<section className="latest-posts">

<h2>
Latest Posts
</h2>

<div className="blog-grid">

{
blogData.map((blog)=>(

<div
className="blog-card"
key={blog.id}
>

<img
src={blog.image}
alt=""
/>

<h3>
{blog.title}
</h3>

<p>
From classic totes to elegant shoulder bags,
discover styles that never go out of fashion.
</p>

<div className="blog-meta">

<span>
<FaRegCalendarAlt/>
Apr 20, 2026
</span>

<span>
<FiClock/>
1 min read
</span>

</div>

</div>

))
}

</div>

</section>

<Footer/>

</>

);

}

export default Blog;