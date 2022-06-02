import bannerStyles from '../styles/Banner.module.css'

const Banner = (props) => {
  return (
    <div className={bannerStyles.container}>
        <h1 className={bannerStyles.title}>
        <span className={bannerStyles.title1}>Coffee</span> 
        <span className={bannerStyles.title2}>Connoisseur</span>
        </h1>
        <p className={bannerStyles.subTitle}>Discover your local coffee shops!</p>
        <button className={bannerStyles.button} onClick={props.clickHandler}>{props.buttonText}</button>
    </div>
  )
}

export default Banner