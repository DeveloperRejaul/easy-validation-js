const easy = () => {
  return {
    isString: (value: string) => {
      if (typeof value === "string") return true;
      return "its not a string data";
    },
  };
};
