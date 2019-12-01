# File Reader

This program is designed to read Debian/Ubunutu source control files that provide details of installed software packages and their dependencies. Control files should be located in /var/lib/dpkg/status. Uploaded files are expected to follow strict formatting guidelines outlined below. Browse file system to upload and parse a source control file or use the provided template by clicking 'Use Mock Data'.

Demo is available [here](https://github.com/aalexlevine).

[Control file syntax](https://www.debian.org/doc/debian-policy/ch-controlfields.html#syntax-of-control-files)

[Mock Data](https://gist.github.com/lauripiispanen/29735158335170c27297422a22b48caa)

## Development

cd into project folder and install dependencies
  > `cd file-reader-reaktor`

  > `npm install`

start webpack dev-server
  > `npm start`

navigate to `localhost:8080` in your browser
