import headerStyles from '../styles/Header.module.css'

const Header = () => {
//   const x = -5;  
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Tech</span>
            News
        </h1>
        <p className={headerStyles.description}>Keep up to date with the latest tech news</p>

        {/* <style jsx>
            {`
            .title {
                color: ${x > 0 ? 'green' : 'steelblue'}
            }
            `}
        </style> */}
    </div>
  )
}

export default Header