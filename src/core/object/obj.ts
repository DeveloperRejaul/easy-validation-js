import { Option } from '../../types/types';

export default (data:object) => {
  return {
    len: (num: number, option?: Option)=> {
      const isOk:boolean = Object.keys(data).length === num;
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'length same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'length same required';
        return errorMessage;
      }
      return true;
      
    },
    val: (objValue:string,  option?:Option) =>{
      const array1:string[] = Object.values(data);
      const array2:string[] = objValue.split(' ');
      const isOk:boolean = array1.every(d=>array2.includes(d));
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'value same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'value same required';
        return errorMessage;
      }
      return true;
    },
    key: (keys:string, option?:Option)=> {
      const array1:string[] = Object.keys(data);
      const array2:string[] = keys.split(' ');
      const isOk:boolean = array1.every(d=>array2.includes(d));
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'key same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'key same required';
        return errorMessage;
      }
      return true;
    },
    keySome: (keys:string, option?:Option) =>{
      const array1:string[] = Object.keys(data);
      const array2:string[] = keys.split(' ');
      const isOk = array2.every(d=>array1.includes(d));
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'key same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'key same required';
        return errorMessage;
      }
      return true;
    },
    valType: (type:string, option?:Option) =>{
      const isOk =  Object.values(data).every(d=> typeof d === type );
      if (!isOk) {
        const errorMessage = option?.message ? option.message : `${type} type required`;
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : `${type} type required`;
        return errorMessage;
      }
      return true;
    },
    schema:(schema:Record<string, string >, option?:Option)=>{
      for (const key in schema) {
        const expectedType = schema[key];
        const actualValue = data[key as keyof object];
        if (typeof actualValue !== expectedType || !(key in data)) {
          const errorMessage = option?.message ? option.message : 'type required';
          if (option?.error) throw new Error(errorMessage);
          if (option?.isRequire) return option?.message ? option.message : 'type required';
          return errorMessage;
        }
      }
      return true;
    },
    schemaStrict:(schema:Record<string, string >, option?:Option)=>{
      for (const key in data) {
        if (key in schema) {
          const expectedType = schema[key];
          const actualValue = data[key as keyof object];
          if (typeof actualValue !== expectedType) {
            const errorMessage = option?.message ? option.message : 'type required';
            if (option?.error) throw new Error(errorMessage);
            if (option?.isRequire) return option?.message ? option.message : 'type required';
            return errorMessage;
          }
        } else  {
          const errorMessage = option?.message ? option.message : 'type required';
          if (option?.error) throw new Error(errorMessage);
          if (option?.isRequire) return option?.message ? option.message : 'type required';
          return errorMessage;
        }
      }
      for (const key in schema) if (!(key in data))  {
        const errorMessage = option?.message ? option.message : 'type required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'type required';
        return errorMessage;
      }
      return true;
    },
  };
};