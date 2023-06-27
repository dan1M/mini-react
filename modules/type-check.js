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

export default function type_check(variable, conf) {
  if (typeof conf !== 'object') return;
  for (let key in conf) {
    switch (key) {
      case 'type':
        if (!type_check_v1(variable, conf.type)) return false;
        break;
      case 'value':
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
        break;
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
