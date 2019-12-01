import React from 'react';
import ItemDetails from './ItemDetails';
import './FileContent.css';
import { Route, Switch } from 'react-router-dom';
import FileContentList from './FileContentList';
import ErrorBoundary from './ErrorBoundary';
import IntroNotes from './IntroNotes';

const FileContent = ({ data }) => (
  <div className="fileContent-container ">
    <ErrorBoundary>
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return data.length ? (
              <FileContentList {...props} data={data} />
            ) : (
              <IntroNotes />
            );
          }}
        />
        <Route
          path="/:id"
          render={props => <ItemDetails {...props} itemList={data} />}
        />
      </Switch>
    </ErrorBoundary>
  </div>
);

export default FileContent;
