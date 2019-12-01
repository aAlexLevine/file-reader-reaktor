import React from 'react';

const IntroNotes = () => (
  <div className="intro-container">
    <div className="intro-spacer"></div>
    <div className="intro-content">
      <div>
        This program is designed to read Debian/Ubunutu source control files
        that provide details of installed software packages and their
        dependencies. Control files should be located in /var/lib/dpkg/status.
        Uploaded files are expected to follow strict formatting guidelines
        outlined below. Browse file system to upload and parse a source control
        file or use the provided template by clicking 'Use Mock Data'.
      </div>
      <br />
      <a
        href="https://www.debian.org/doc/debian-policy/ch-controlfields.html#syntax-of-control-files"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Control file syntax</div>
      </a>
      <a
        href="https://gist.github.com/lauripiispanen/29735158335170c27297422a22b48caa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Mock Data</div>
      </a>
      <a
        href="https://gist.github.com/lauripiispanen/29735158335170c27297422a22b48caa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>Github Repo</div>
      </a>
    </div>
  </div>
);

export default IntroNotes;