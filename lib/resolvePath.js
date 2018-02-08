const resolvePath = (object, path, defaultValue)=> path.split('.').reduce((o,p) => o ? o[p] : defaultValue, object);

module.exports = resolvePath;