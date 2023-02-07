import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/Button"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location} >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `dev4us`, `typescript`]}
        />
        <img style={{ margin: 0 }} src="./Dev4us.png" alt="Gatsby Scene" />
        <h1>
          E ai pessoal{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Me chamo Pedro, sejam bem vindos ao Dev4us.</p>
        <p>
          Um blog que visa passar conhecimento sobre programação e levá-la para todos!
        </p>
        <p>Bora fazer a diferença?</p>
        <Link to="/blog/">
          <Button marginTop="35px">Ver posts</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
