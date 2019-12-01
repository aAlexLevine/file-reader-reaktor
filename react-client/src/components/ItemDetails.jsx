import React from 'react';
import DependsList from './DependsList';
import DependencyLink from './DependencyLink';
import { Link, Redirect } from 'react-router-dom';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reverseDependencyList: [],
      dependencyList: [],
      redirectToList: false
    };
    this.findReverseDependencies = this.findReverseDependencies.bind(this);
    this.formatDependsList = this.formatDependsList.bind(this);
    this.updateItemContent = this.updateItemContent.bind(this);
    this.updateDependencyList = this.updateDependencyList.bind(this);
  }

  componentDidMount() {
    const { itemList } = this.props;
    if (!itemList.length) {
      this.setState({ redirect: true });
    } else {
      this.updateItemContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.updateItemContent();
    }
  }

  updateItemContent() {
    const {
      itemList,
      match: {
        params: { id }
      }
    } = this.props;
    const name = itemList[id].Package;
    const dependsRaw = itemList[id].Depends;
    this.findReverseDependencies(name);
    this.updateDependencyList(dependsRaw);
  }

  findReverseDependencies(name) {
    const { itemList } = this.props;
    const reverseDependsList = [];
    itemList.forEach(item => {
      if (item.Depends) {
        const searchableDepends = this.formatDependsList(item.Depends);
        const searchableNames = searchableDepends.flat();
        if (searchableNames.includes(name))
          reverseDependsList.push(item.Package);
      }
    });
    this.setState({ reverseDependencyList: reverseDependsList });
  }

  updateDependencyList(dependsRaw) {
    const dependencyList = this.formatDependsList(dependsRaw);
    this.setState({ dependencyList });
  }

  formatDependsList(dependsRaw) {
    let dependencyList = [];
    const removeVersion = nameAndVersionStr => {
      return nameAndVersionStr.trim().split(' ')[0];
    };
    if (dependsRaw) {
      dependencyList = dependsRaw.split(', ').map(dependency => {
        if (dependency.includes('|')) {
          return dependency.split('|').map(removeVersion);
        } else {
          return removeVersion(dependency);
        }
      });
    }
    return dependencyList;
  }

  render() {
    const {
      itemList,
      history,
      match: {
        params: { id }
      }
    } = this.props;
    const item = itemList[id];
    const {
      redirectToList,
      reverseDependencyList,
      dependencyList
    } = this.state;
    if (!item || redirectToList) {
      return <Redirect to="/" />;
    }
    return (
      <div className="itemDetails-container">
        <div className="goBack-container">
          <Link to="/">
            <p
              className="goBack-text"
              onClick={() => this.setState({ redirectToList: true })}
            >
              &#10094; Back to List
            </p>
          </Link>
        </div>
        <div className="itemDetails-content">
          <pre>
            <strong>Package:</strong> {item.Package}
          </pre>
          <pre>
            <strong>Description:</strong> {item.Description}
          </pre>

          {/* This package depends on: */}
          {item.Depends ? (
            <pre>
              <strong>Depends:&nbsp;</strong>
              <DependsList
                dependencyList={dependencyList}
                itemList={itemList}
              />
            </pre>
          ) : null}

          {/* This package is listed as a dependency on: */}
          {reverseDependencyList.length ? (
            <>
              <pre>
                <strong>Reverse Dependencies:&nbsp;</strong>
                {reverseDependencyList.map((dependency, index, arr) => {
                  let hasComma = false;
                  if (index < arr.length - 1) {
                    hasComma = true;
                  }
                  return (
                    <DependencyLink
                      name={dependency}
                      itemList={itemList}
                      hasComma={hasComma}
                      key={dependency + index.toString()}
                    />
                  );
                })}
              </pre>
            </>
          ) : null}
          <div className="previous-container">
            <p className="previous-text" onClick={() => history.goBack()}>
              &#10094; Previous
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
