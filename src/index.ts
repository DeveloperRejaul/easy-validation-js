
type Option =  {
  isRequire:boolean,
  error:boolean,
  message:string,
};
function getObjectValues(obj: { [key: string]: any }): any[] {
  const keys = Object.keys(obj);
  const values = keys.map(key => obj[key]);
  return values;
}

function areAllIncluded(arr1: string[], arr2: string[]): boolean {
  return arr1.every(item => arr2.indexOf(item) !== -1);
}
const main = (data:Object) => {
  return {
    len:function (num:number,  option:Option)  {
      const isOk:boolean = Object.keys(data).length === num;
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'length same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'length same required';
        return errorMessage;
      }
      return this;
    },
    val: function (objValue:string,  option:Option) {
      const array1:string[] = getObjectValues(data);
      const array2:string[] = objValue.split(' ');
      const isOk:boolean = areAllIncluded(array1, array2);
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'value same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'value same required';
        return errorMessage;
      }
      return this;
    },
    key:function (keys:string, option:Option) {
      const array1:string[] = Object.keys(data);
      const array2:string[] = keys.split(' ');
      const isOk:boolean = areAllIncluded(array1, array2);
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'key same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'key same required';
        return errorMessage;
      }
      return this;
    },
  };
};



const easy = () => {
  return {
    isString: (value:string, option:Option) => {
      if (typeof value !== 'string') {
        const errorMessage = option?.message ? option.message : 'string required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'string required';
        return errorMessage;
      }
      return true;
    },
    isNumber:(number:number, option:Option) => {
      if (typeof number !== 'number') {
        const errorMessage = option?.message ? option.message : 'number required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'number required';
        return errorMessage;
      }
      return true;
    },
    isBool:(bool:boolean, option:Option)=>{
      if (typeof bool !== 'boolean') {
        const errorMessage = option?.message ? option.message : 'boolean value required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'boolean value required';
        return errorMessage;
      }
      return true;
    },
    isArray:(arr:[], option:Option)=>{
      if (!Array.isArray(arr)) {
        const errorMessage = option?.message ? option.message : 'Array data required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'Array data required';
        return errorMessage;
      }
      return true;
    },
    isObj:(obj:object, option:Option)=>{
      if (typeof obj  !== 'object' || Array.isArray(obj)) {
        const errorMessage = option?.message ? option.message : 'Object data required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'object data required';
        return errorMessage;
      }
      return main(obj);
    },
  };
};

export const Easy = easy();


