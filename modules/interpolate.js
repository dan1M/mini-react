function prop_access(obj, path) {
  const pathElements = path.split(".");
  let result = obj;
  let actualpath = "";
  for (const pathElement of pathElements) {
    if (Array.isArray(result[pathElement])) {
      return result[pathElement][pathElements.indexOf(pathElement) + 1].type;
    }
    if (pathElements.indexOf(pathElement) !== 0) actualpath += ".";
    actualpath += pathElement;
    if (pathElement == Object.keys(result)[0]) result = result[pathElement];
  }
  return result;
}

export default String.prototype.interpolate = function (object) {
  const regex = /{{\s*([^}]+)\s*}}/g;
  const interpolatedString = this.replace(regex, (match, key) => {
    const value = prop_access(object, key.trim());
    return value !== undefined ? value : match;
  });
  return interpolatedString;
};
