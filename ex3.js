const FileSystem = require('fs');
const { mkdir, readdir, writeFile, unlink, rmdir } = require('fs/promises');
const path = require('path');

const users = [
  {
    name: 'name',
    last: 'last'
  },
  {
    name: 'name2',
    last: 'last2'
  },
  {
    name: 'name3',
    last: 'last3'
  },
];

const removeFilesAndFolder = async () => {
  try {
    const files = await readdir(`${__dirname}/users`);
    const IsKeepFolder = false;
    files.forEach(async file => {
      const extentionName = `${__dirname} / users / ${file})`
      IsNotTxtFile = path.extname(extentionName) !== '.txt';
      IsKeepFolder = IsNotTxtFile || IsKeepFolder;
      !IsNotTxtFile && unlink(extentionName);
    });
    !IsKeepFolder && rmdir(`${__dirname}/users`);
    return Promise.resolve();
  }
  catch (err) {
    console.log(err.message);
    return Promise.reject(err);
  }
}

const makeAndRemoveFileAndFolder = async () => {
  try {
    await access(`${__dirname}/users`);
    await removeFilesAndFolder();
  }
  catch (err) {
    await mkdir(`${__dirname}/users`, { recursive: true });
    users.forEach(async ({ name, last }, i) => {
      await writeFile(`${__dirname}/users/${name}-${last}.txt`, `${name}`);
    });
    setTimeout(removeFilesAndFolder, 5000);
  }
}

makeAndRemoveFileAndFolder()