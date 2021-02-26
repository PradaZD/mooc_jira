//在一个函数中，改变传入的对象是不好的
//!!value就是取布尔值的意思
import { useState, useEffect } from "react";
export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
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

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

//防抖
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
// const debounce = (func, delay) => {
//     let timeout;
//     return () => {
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(function () {
//             func()
//         }, delay)
//     }
// }
// const log = debounce(() => console.log('call'), 5000);
// log()
// log()
// log()
