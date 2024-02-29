const FileSystem = require('fs');
const { mkdir, readdir, writeFile, unlink, rmdir } = require('fs/promises');


//#region create dir
// FileSystem.mkdir("./test", { recursive: true }, (err, path) => {
//   if (err) console.log(err.message);
//   console.log("FileSystem made a directory!:", path);
// });
//#endregion

//#region Access dir
// FileSystem.access("./test", (err) => {
//   if (err) {
//     console.log(err.message);
//     throw err;
//   }
// })
//#endregion

//#region Write to a file
// FileSystem.writeFile(`${__dirname}/test/testing.txt`,
//   `${__dirname}/test/testing.txt\nsome text..`,
//   (err) => {
//     if (err) console.log(err.message);
//     console.log("FileSystem wrote to a file");
//   });
//#endregion

//#region Delete a file
// FileSystem.unlink(`${__dirname}/test/testing.txt`, (err) => {
//   if (err) console.log(err.message);
//   console.log("FileSystem removed a file");
// })
//#endregion

//#region Delete a dir
// FileSystem.rmdir("./test", { recursive: true }, (err) => {
//   if (err) console.log(err.message);
//   console.log('FileSystem removed a directory')
// })
//#endregion


(async () => {
  // try {
  //   await mkdir('./test', { recursive: true });
  //   for (let i = 0; i < 3; i++) {
  //     await writeFile(`${__dirname}/test/testing-${i}.txt`, `file number ${i}`);
  //     console.log(`FileSystem wrote a file! testing-${i}.txt`);
  //   }
  //   const files = await readdir(`${__dirname}/test`);
  //   console.log(files);
  // } catch (error) {
  //   console.log(error.message);
  // }

  // readdir(`${__dirname}/test`).then(files =>
  //   files.forEach(file => unlink(`${__dirname}/test/${file}`)))
  //   .then(() => rmdir(`${__dirname}/test`))
  // console.log('removed directory')
})();
