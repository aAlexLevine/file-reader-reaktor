import React from 'react';
import FileContentItem from './FileContentItem';
import { Link } from 'react-router-dom';

const FileContentList = ({ data }) => {
  if (!data.length) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a, b) => {
                if (a.Package < b.Package) {
                  return -1;
                }
                if (a.Package > b.Package) {
                  return 1;
                }
                return 0;
              })
              .map((item, i) => (
                <tr key={item.Package + i.toString()}>
                  <td>
                    <Link to={`/${i}`}>
                      <FileContentItem idx={i} item={item} />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileContentList;
