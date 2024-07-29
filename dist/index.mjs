// src/core/object/obj.ts
var obj_default = (data) => {
  return {
    len: (num, option) => {
      const isOk = Object.keys(data).length === num;
      if (!isOk) {
        const errorMessage = (option == null ? void 0 : option.message) ? option.message : "length same required";
        if (option == null ? void 0 : option.error) throw new Error(errorMessage);
        if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "length same required";
        return errorMessage;
      }
      return true;
    },
    val: (objValue, option) => {
      const array1 = Object.values(data);
      const array2 = objValue.split(" ");
      const isOk = array1.every((d) => array2.includes(d));
      if (!isOk) {
        const errorMessage = (option == null ? void 0 : option.message) ? option.message : "value same required";
        if (option == null ? void 0 : option.error) throw new Error(errorMessage);
        if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "value same required";
        return errorMessage;
      }
      return true;
    },
    key: (keys, option) => {
      const array1 = Object.keys(data);
      const array2 = keys.split(" ");
      const isOk = array1.every((d) => array2.includes(d));
      if (!isOk) {
        const errorMessage = (option == null ? void 0 : option.message) ? option.message : "key same required";
        if (option == null ? void 0 : option.error) throw new Error(errorMessage);
        if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "key same required";
        return errorMessage;
      }
      return true;
    },
    keySome: (keys, option) => {
      const array1 = Object.keys(data);
      const array2 = keys.split(" ");
      const isOk = array2.every((d) => array1.includes(d));
      if (!isOk) {
        const errorMessage = (option == null ? void 0 : option.message) ? option.message : "key same required";
        if (option == null ? void 0 : option.error) throw new Error(errorMessage);
        if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "key same required";
        return errorMessage;
      }
      return true;
    },
    valType: (type, option) => {
      const isOk = Object.values(data).every((d) => typeof d === type);
      if (!isOk) {
        const errorMessage = (option == null ? void 0 : option.message) ? option.message : `${type} type required`;
        if (option == null ? void 0 : option.error) throw new Error(errorMessage);
        if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : `${type} type required`;
        return errorMessage;
      }
      return true;
    },
    schema: (schema, option) => {
      for (const key in schema) {
        const expectedType = schema[key];
        const actualValue = data[key];
        if (typeof actualValue !== expectedType || !(key in data)) {
          const errorMessage = (option == null ? void 0 : option.message) ? option.message : "type required";
          if (option == null ? void 0 : option.error) throw new Error(errorMessage);
          if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "type required";
          return errorMessage;
        }
      }
      return true;
    },
    schemaStrict: (schema, option) => {
      for (const key in data) {
        if (key in schema) {
          const expectedType = schema[key];
          const actualValue = data[key];
          if (typeof actualValue !== expectedType) {
            const errorMessage = (option == null ? void 0 : option.message) ? option.message : "type required";
            if (option == null ? void 0 : option.error) throw new Error(errorMessage);
            if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "type required";
            return errorMessage;
          }
        } else {
          const errorMessage = (option == null ? void 0 : option.message) ? option.message : "type required";
          if (option == null ? void 0 : option.error) throw new Error(errorMessage);
          if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "type required";
          return errorMessage;
        }
      }
      for (const key in schema) if (!(key in data)) {
        const errorMessage = (option == null ? void 0 : option.message) ? option.message : "type required";
        if (option == null ? void 0 : option.error) throw new Error(errorMessage);
        if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "type required";
        return errorMessage;
      }
      return true;
    }
  };
};

// src/core/type/type.ts
var type_default = {
  isString: (value, option) => {
    if (typeof value !== "string") {
      const errorMessage = (option == null ? void 0 : option.message) ? option.message : "string required";
      if (option == null ? void 0 : option.error) throw new Error(errorMessage);
      if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "string required";
      return errorMessage;
    }
    return true;
  },
  isNumber: (number, option) => {
    if (typeof number !== "number") {
      const errorMessage = (option == null ? void 0 : option.message) ? option.message : "number required";
      if (option == null ? void 0 : option.error) throw new Error(errorMessage);
      if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "number required";
      return errorMessage;
    }
    return true;
  },
  isBool: (bool, option) => {
    if (typeof bool !== "boolean") {
      const errorMessage = (option == null ? void 0 : option.message) ? option.message : "boolean value required";
      if (option == null ? void 0 : option.error) throw new Error(errorMessage);
      if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "boolean value required";
      return errorMessage;
    }
    return true;
  },
  isArray: (arr, option) => {
    if (!Array.isArray(arr)) {
      const errorMessage = (option == null ? void 0 : option.message) ? option.message : "Array data required";
      if (option == null ? void 0 : option.error) throw new Error(errorMessage);
      if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "Array data required";
      return errorMessage;
    }
    return true;
  },
  isObj: (obj, option) => {
    if (typeof obj !== "object" || Array.isArray(obj)) {
      const errorMessage = (option == null ? void 0 : option.message) ? option.message : "Object data required";
      if (option == null ? void 0 : option.error) throw new Error(errorMessage);
      if (option == null ? void 0 : option.isRequire) return (option == null ? void 0 : option.message) ? option.message : "object data required";
      return errorMessage;
    }
    return obj_default(obj);
  }
};
export {
  type_default as Easy
};
