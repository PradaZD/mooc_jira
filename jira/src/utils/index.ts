import { AnyARecord } from 'dns'
import { useState, useEffect } from "react"

export const isFalsy = (value:any) => value === 0 ? false : !value
//URL中的参数可能存在值是无效值（比如null,undefined,'',NAN这些），此时我们需要做判断
//如果有参数属性值是无效值，那么就把这个参数属性名删除，可以避免无效搜索
export const clearObject = (obj:object) => {
  // const result=Object.assign({},obj)
  const result = { ...obj }
  Object.keys(result).forEach(key => {
    //@ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key]
    }

  })
  return result
}
//自定义属性，处理页面加载完成后只执行一次的函数
export const useMount = (callback:()=>void) => {
  // hooks只能在组件或者其他hooks中运行，不能在普通函数中运行
  useEffect(() => {
    callback()
  }, [])
}
//防抖自定义hooks
export const useDebounce = (value:any, delay?:number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    //useEffect中return后面的代码什么时候运行？一般是在上次useEffect运行完之后再运行，不是当前useEffect中运行 
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}