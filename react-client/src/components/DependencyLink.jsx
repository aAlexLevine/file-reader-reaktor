import React from 'react';
import { Link } from 'react-router-dom';

class DependencyLink extends React.Component {
  constructor() {
    super();
    this.state = {
      foundIndex: -1
    };
    this.findIndex = this.findIndex.bind(this);
  }

  componentDidMount() {
    this.findIndex();
  }

  findIndex = () => {
    this.props.itemList.forEach((item, index) => {
      if (item.Package === this.props.name) {
        this.setState({ foundIndex: index });
        return;
      }
    });
  };

  render() {
    const { hasPipe, hasComma, name } = this.props;
    const { foundIndex } = this.state;
    if (foundIndex > -1) {
      return (
        <span>
          <Link to={`/${foundIndex}`}>{name}</Link>
          {hasPipe ? ' | ' : null}
          {hasComma ? ', ' : null}
        </span>
      );
    } else {
      return (
        <span>
          {name}
          {hasPipe ? ' | ' : null}
          {hasComma ? ', ' : null}
        </span>
      );
    }
  }
}

export default DependencyLink;
