import _obj from 'core/object/obj';
import { Option } from '../../types/types';

  
export default {
  isString: (value:string, option?:Option) => {
    if (typeof value !== 'string') {
      const errorMessage = option?.message ? option.message : 'string required';
      if (option?.error) throw new Error(errorMessage);
      if (option?.isRequire) return option?.message ? option.message : 'string required';
      return errorMessage;
    }
    return true;
  },
  isNumber:(number:number, option?:Option) => {
    if (typeof number !== 'number') {
      const errorMessage = option?.message ? option.message : 'number required';
      if (option?.error) throw new Error(errorMessage);
      if (option?.isRequire) return option?.message ? option.message : 'number required';
      return errorMessage;
    }
    return true;
  },
  isBool:(bool:boolean, option?:Option)=>{
    if (typeof bool !== 'boolean') {
      const errorMessage = option?.message ? option.message : 'boolean value required';
      if (option?.error) throw new Error(errorMessage);
      if (option?.isRequire) return option?.message ? option.message : 'boolean value required';
      return errorMessage;
    }
    return true;
  },
  isArray:(arr:[], option?:Option)=>{
    if (!Array.isArray(arr)) {
      const errorMessage = option?.message ? option.message : 'Array data required';
      if (option?.error) throw new Error(errorMessage);
      if (option?.isRequire) return option?.message ? option.message : 'Array data required';
      return errorMessage;
    }
    return true;
  },
  isObj:(obj:object, option?:Option)=>{
    if (typeof obj  !== 'object' || Array.isArray(obj)) {
      const errorMessage = option?.message ? option.message : 'Object data required';
      if (option?.error) throw new Error(errorMessage);
      if (option?.isRequire) return option?.message ? option.message : 'object data required';
      return errorMessage;
    }
    return _obj(obj);
  },
};



