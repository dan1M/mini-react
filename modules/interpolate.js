function prop_access(obj, path) {
  const pathElements = path.split(".");
  let result = obj;
  for (const pathElement of pathElements) {
    if (result && pathElement in result) {
      result = result[pathElement];
    } else {
      return undefined;
    }
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

/* Test
const machaine = "Type d'animal: {{ type.name }}";
const animal = { type: { name: "chien" } };
console.log(machaine.interpolate(animal));
*/