/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {Helmet} from "react-helmet"
// import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <script src={withPrefix('js/vendor/jquery/jquery.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/slick/slick.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/scrollLock/jquery-scrollLock.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/instafeed/instafeed.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/countdown/jquery.countdown.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/imagesloaded/imagesloaded.pkgd.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/ez-plus/jquery.ez-plus.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/bootstrap-tabcollapse/bootstrap-tabcollapse.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/isotope/jquery.isotope.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/fancybox/jquery.fancybox.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/cookie/jquery.cookie.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/bootstrap-select/bootstrap-select.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/lazysizes/lazysizes.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/lazysizes/ls.bgset.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/form/jquery.form.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/form/validator.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/slider/slider.js')} type="text/javascript" />
        <script src={withPrefix('js/app.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/bootstrap/bootstrap.bundle.min.js')} type="text/javascript" />
        <script src={withPrefix('js/vendor/tocca/tocca.min.js')} type="text/javascript" />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
