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

  };
};
export const Easy = easy();

