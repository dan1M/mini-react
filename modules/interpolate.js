Object.prototype.prop_access = function (path) {
  const pathElements = path.split(".");
  let result = this;
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
    const value = object.prop_access(key.trim());
    return value !== undefined ? value : match;
  });
  return interpolatedString;
};

/* Test
const machaine = "Type d'animal: {{ type.name }}";
const animal = { type: { name: "chien" } };
console.log(machaine.interpolate(animal));
*/