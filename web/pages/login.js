import { Typography,Card, CardContent, withStyles, TextField, Button } from '@material-ui/core';
import Router, { withRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

const styles = {
  card: {
    margin: 20,
    width: 500
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  title: {
    textAlign: 'center'
  },
  input: {
    margin: 10
  }
}

class CardPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {password: '', error: false};
  }

  render () {
    const {classes} = this.props;
    return (
      <Layout
      config= {{
        title: "Enchiridion"
      }} >
        <div className={classes.container}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  className={classes.title}
                >
                  Login
                </Typography>
                <div className={classes.container}>
                  <TextField
                    id="password-text-field"
                    className={classes.input}
                    label="Site Password"
                    value={this.state.password || ''}
                    type="password"
                    error={this.state.error || ''}
                    helperText={
                      this.state.error ?
                        'Incorrect Password' :
                        ''
                    }
                    onChange={(event) => {
                      this.setState({password: event.target.value});
                    }}
                  />
                  <Button
                    className={classes.input}
                    variant="contained"
                    type="submit"
                    onClick={this.submitLogin.bind(this)}
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
        </div>
      </Layout>
    )
  }

  submitLogin() {
    axios.post('api/authenticate', {
      password: this.state.password
    }).then(() => {
      Router.push('/')
    }, (_err) => {
      this.setState({error: true})
    })
  }
}

export default withRouter(withStyles(styles)(CardPage));
