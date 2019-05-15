import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../redux/ducks/ducksExample';

const mapStateToProps = ({ ducksExample }) => ({
  count: ducksExample.count,
  isIncrementing: ducksExample.isIncrementing,
  isDecrementing: ducksExample.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
    },
    dispatch
  );
const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
