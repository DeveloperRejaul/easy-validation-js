import { areAllIncluded, getObjectValues } from '../../utils/objHelper';

type Option =  {
  isRequire:boolean,
  error:boolean,
  message:string,
};
  

const main = (data:Object) => {
  return {
    len:function (num:number,  option:Option) {
      const isOk:boolean = Object.keys(data).length === num;
      if (!isOk) {
        const errorMessage = option.message ? option.message : 'length same required';
        if (option.error) throw new Error(errorMessage);
        if (option.isRequire) return option.message ? option.message : 'length same required';
      }
      return this;

    },
    val: function (objValue:string,  option:Option)  {
      const array1:string[] = getObjectValues(data);
      const array2:string[] = objValue.split(' ');
      const isOk:boolean = areAllIncluded(array1, array2);
      if (!isOk) {
        const errorMessage = option.message ? option.message : 'value same required';
        if (option.error) throw new Error(errorMessage);
        if (option.isRequire) return option.message ? option.message : 'value same required';
      }
      return true;
    },
    key:function (keys:string, option:Option) {
      const array1:string[] = Object.keys(data);
      const array2:string[] = keys.split(' ');
      const isOk:boolean = areAllIncluded(array1, array2);
      if (!isOk) {
        const errorMessage = option.message ? option.message : 'key same required';
        if (option.error) throw new Error(errorMessage);
        if (option.isRequire) return option.message ? option.message : 'key same required';
      }
    },
  };
};

export default main;