class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }
  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error('Can only use Md files'));
    }
    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.log(error);
        return callbackO(error);
      }
      return callback(null, contents);
    });
  }
}

module.exports = FS_Proxy;
