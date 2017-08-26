import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';


const modifyPersonMutation = gql`
  mutation modifyPerson {
    modifyPerson
}`;


class App extends Component {
  runMutation() {
    const start = new Date().getTime()
    console.log("start", start)
    const mutation = this.props.client.mutate({mutation: modifyPersonMutation, variables: {}})
    mutation.then(() => {const now = new Date().getTime(); console.log("done", now); console.log("total time", now - start, "ms")})
  }

  render() {
    const { data: { loading } } = this.props;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) :
        <button onClick={this.runMutation.bind(this)}>Run mutation</button>
        }
      </main>
    );
  }
}

export default graphql(
  gql`{
    people {
      id
      name
    }
  }`,
)(App)
