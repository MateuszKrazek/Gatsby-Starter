import React, { ReactElement } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.scss"

type SiteProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const MainLayout: React.FC = ({ children }): ReactElement => {
  const data = useStaticQuery<SiteProps>(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`)

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.header}>
        <Link to={`/`}>
          <h3>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link to={`/about/`}>
          About
      </Link>
        <Link to={`/my-files/`}>
          All files in solution
      </Link>
        <Link to={`/redux/`}>
          Usage of Redux
      </Link>
      </div>
      {children}
    </div>
  )
}

export default MainLayout