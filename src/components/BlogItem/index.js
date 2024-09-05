// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li className="list-item">
      <div className="title-date">
        <h1 className="blog-title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="horizontal-line"/>
    </li>
  )
}

export default BlogItem
