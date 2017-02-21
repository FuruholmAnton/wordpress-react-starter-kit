
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     content: PropTypes.string,
  //   })).isRequired,
  // };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>This is React home page</h1>
          
        </div>
      </div>
    );
  }
}

export default (Home);
