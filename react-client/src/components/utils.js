const convertTextToJS = data => {
  const packagesText = data.split('\n\n');
  
  const multiLineReducer = (acc, curr) => {
    if (curr[0] === ' ') {
      const lastIndex = acc.length - 1;
      const continuationLine = acc[lastIndex].concat('\n', curr);
      acc[lastIndex] = continuationLine;
    } else {
      acc.push(curr);
    }
    return acc;
  };

  const fieldAndValueReducer = (acc, curr) => {
    const splitPoint = curr.indexOf(':');
    const field = curr.slice(0, splitPoint);
    const value = curr.slice(splitPoint + 1).trim();
    acc[field] = value;
    return acc;
  };

  const packagesFormatted = packagesText.map(pkg => {
    const packageText = pkg.split('\n');
    const packageWithMultiLines = packageText.reduce(multiLineReducer, []);
    const packageObject = packageWithMultiLines.reduce(fieldAndValueReducer, {});
    return packageObject
  });

  return packagesFormatted
};

export default convertTextToJS;
