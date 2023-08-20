type Option =  {
  isRequire:boolean,
  error:boolean,
  message:string,
};

const easy = () => {
  return {
    isString: (value:string, option:Option) => {
      if (typeof value !== 'string') {
        const errorMessage = option.message ? option.message : 'string required';
        if (option.error) throw new Error(errorMessage);
        if (option.isRequire) return option.message ? option.message : 'string required';
      }
    },
    isNumber:(number:number, option:Option) => {
      if (typeof number !== 'number') {
        const errorMessage = option?.message ? option.message : 'number required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option.message ? option.message : 'number required';
        return errorMessage;
      }
    },
    isBool:(bool:boolean, option:Option)=>{
      if (typeof bool !== 'boolean') {
        const errorMessage = option?.message ? option.message : 'boolean value required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option.message ? option.message : 'boolean value required';
        return errorMessage;
      }
    },
    isArray:(arr:[], option:Option)=>{
      if (!Array.isArray(arr)) {
        const errorMessage = option?.message ? option.message : 'Array data required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option.message ? option.message : 'Array data required';
        return errorMessage;
      }
    },
    isObj:(obj:object, option:Option)=>{
      if (typeof obj  !== 'object' || Array.isArray(obj)) {
        const errorMessage = option?.message ? option.message : 'Object data required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option.message ? option.message : 'object data required';
        return errorMessage;
      }
    },
  };
};
export const Easy = easy();



