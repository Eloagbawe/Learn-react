import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((item,index) => (
        <ArticleItem article={item} key={index}/>
    ))}
    </div>
  )
}

export default ArticleList