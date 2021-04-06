import { useState, useEffect } from 'react';
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

//Custom Hook
//1、组件加载的时候只执行一次
export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

//防抖hook
//什么是hook的先天优势？
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  //每次在value变化以后，都设置一个定时器
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次在上一个useEffect处理完再运行
    return () => { clearTimeout(timeout) };
  }, [value, delay])
  return debounceValue;
}