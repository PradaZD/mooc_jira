//需求：将对象中值为空的键删除
//在一个函数中，改变传入的对象本身是不好的
export const isFalsy = (value) => value === 0 ? false : !value;
export const cleanObject = (object) => {
  const result = { ...object };//Object.assign({},onject)
  Object.keys(result).forEach(key => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  })
  return result
}