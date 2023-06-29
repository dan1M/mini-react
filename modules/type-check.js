function type_check_v1(variable, type) {
  if (type === 'object')
    return (
      typeof variable === 'object' &&
      !Array.isArray(variable) &&
      variable !== null
    );
  if (type === 'array') return Array.isArray(variable);
  if (type === 'null') return variable === null;
  return typeof variable === type;
}
// example :
export default function type_check(variable, conf) {
  if (typeof conf !== 'object') return;
  for (let key in conf) {
    switch (key) {
      // check type of variable
      case 'type':
        // check if type is an array
        if (type_check_v1(conf.type, 'array')) {
          let found = false;
          conf.type.forEach((el) => {
            if (type_check_v1(variable, el)) {
              found = true;
            }
          });
          if (!found) return false;
        }
        if (!type_check_v1(variable, conf.type)) return false;
        break;
      // check value of variable
      case 'value':
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
        break;
      // check value of variable is in enum
      case 'enum':
        let found = false;
        if (conf.enum.includes(variable)) {
          found = true;
        }
        if (typeof variable == 'object') {
          found = false;
          conf.enum.forEach((el) => {
            if (typeof el == 'object') {
              if (JSON.stringify(el) == JSON.stringify(variable)) {
                found = true;
              }
            }
          });
        }

        if (!found) return false;
        break;
      // check props of variable
      case 'properties':
        if (typeof variable !== 'object') return false;
        for (let prop in conf.properties) {
          if (!type_check(variable[prop], conf.properties[prop])) return false;
        }
        break;
    }
  }

  return true;
}
