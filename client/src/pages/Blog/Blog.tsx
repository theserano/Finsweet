import "./blog.scss";
import "../../styles/generic.scss";



const Blog = () => {
  return (
    <div className="blog">

        <header className="blog_header container mx-auto">
            <p className="paragraph_small text-center">21 DEC 2023</p>
            <h2 className="heading_two"> Is climate change happening faster than expected?</h2>
            <p className="paragraph_samll text-center">Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit.</p>
            <img className="blog_header_image" src="https://res.cloudinary.com/dfltu5jw4/image/upload/v1710437340/Image_xykxp2.png" alt="stuff" />
        </header>

        <div className="blog_details container mx-auto my-20">
            <h2 className="heading_two">Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque</h2>
            <p className="paragraph_small">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
            <p className="paragraph_small">Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
            <p className="paragraph_small mb-12">Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
            <h4 className="heading_three">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
            <ul className="mb-12 list-disc pl-12">
                <li>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.</li>
                <li>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</li>
                <li>Mauris morbi sed dignissim a in nec aliquam fringilla et.</li>
                <li>Consectetur feugiat quis hac enim nullam in enim.</li>
            </ul>
            <h4 className="heading_three">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
            <p className="paragraph_small">Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
            <p className="paragraph_small">Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</p>
        </div>

    </div>
  )
}

export default Blog