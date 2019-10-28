import React from 'react'
import BaseApp, {Container} from 'next/app';
import Router from 'next/router';
import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import cookies from 'next-cookies'
import { validateJwt } from '../util/validate-jwt';

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

  }

  static async getInitialProps (props) {
    const {Component, ctx} = props;
    const {res} = ctx;
    const myCookies = cookies(ctx);
    const {pathname} = ctx;
    const unauthenticatedRoutes = ['/login']
    if (res && !unauthenticatedRoutes.includes(pathname)) {
      if (!myCookies.access_token) {
        this.redirectPage(res, '/login');
      }
      else {
        try {
          await validateJwt(myCookies.access_token);
        }
        catch (err) {
          this.redirectPage(res, '/login');
        }
      }
    }
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  static redirectPage(res, path) {
    if (res) {
      res.writeHead(302, {
        Location: path
      })
      res.end();
      return {};
    }
  }
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default App
