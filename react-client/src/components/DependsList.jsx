import React from 'react';
import DependencyLink from './DependencyLink';

const DependsList = ({ dependencyList, itemList }) => {
  return (
    <>
      {dependencyList.map((dependency, dependsIndex, dependsArr) => {
        const notLastIndex = (dependsIndex < dependsArr.length - 1);
        if (Array.isArray(dependency)) {
          return dependency.map((altName, altIndex, altArr) => {
            let hasPipe, hasComma = false;
            if (notLastIndex) {
              hasComma = true;
            }
            if (altIndex < altArr.length - 1) {
              hasPipe = true;
              hasComma = false;
            }
            return (
              <DependencyLink
                name={altName}
                itemList={itemList}
                dependencyListLength={dependencyList.length}
                hasPipe={hasPipe}
                hasComma={hasComma}
                key={altName + altIndex.toString()}
              />
            );
          });
        } else {
          let hasComma = false;
          if (notLastIndex) {
            hasComma = true;
          }
          return (
            <DependencyLink
              name={dependency}
              itemList={itemList}
              dependencyListLength={dependencyList.length}
              hasComma={hasComma}
              key={dependency + dependsIndex.toString()}
            />
          );
        }
      })}
    </>
  );
};

export default DependsList;
