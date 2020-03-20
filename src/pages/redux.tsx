import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { IState } from "../state/createStore"
import SEO from "../components/seo"

const Counter = ({ count, increment }: any) => (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
)

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }: IState) => {
    return { count }
}

const mapDispatchToProps = (dispatch: any) => {
    return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)


export default () => (
    <Layout>
        <SEO title="Gatsby Redux" description="Counter based on Redux" lang="en" />
        <h1>Redux counter</h1>
        <ConnectedCounter />
    </Layout>
)