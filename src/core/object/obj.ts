type Option =  {
  isRequire:boolean,
  error:boolean,
  message:string,
};
  
export const main = (data:Object) => {
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
      const array1:string[] = Object.values(data);
      const array2:string[] = objValue.split(' ');
      const isOk:boolean = array1.every(d=>array2.includes(d));
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
      const isOk:boolean = array1.every(d=>array2.includes(d));
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'key same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'key same required';
        return errorMessage;
      }
      return this;
    },
    keySome:function (keys:string, option:Option) {
      const array1:string[] = Object.keys(data);
      const array2:string[] = keys.split(' ');
      const isOk = array2.every(d=>array1.includes(d));
      if (!isOk) {
        const errorMessage = option?.message ? option.message : 'key same required';
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : 'key same required';
        return errorMessage;
      }
      return this;
    },
    valType:function (type:string, option:Option) {
      const isOk =  Object.values(data).every(d=> typeof d === type );
      if (!isOk) {
        const errorMessage = option?.message ? option.message : `${type} type required`;
        if (option?.error) throw new Error(errorMessage);
        if (option?.isRequire) return option?.message ? option.message : `${type} type required`;
        return errorMessage;
      }
      return this;
    },
    schema:function () {},
  };
};