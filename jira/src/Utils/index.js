//在一个函数中，改变传入的对象是不好的
//!!value就是取布尔值的意思
export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  console.log(result);
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      //null,undefined,NaN,0,''这些转成布尔值都是false
      delete result[key];
    }
  });
  // console.log(result);
  return result;
};
//返回的是一个对象，这个对象里没有属性是无效的（比如说空字符串 undefined等等）
//这样在使用循环或者map映射的时候就不会出现undefined
