import React from "react"
import { useState, useEffect } from 'react'
import * as qs from 'qs'
import List from './list'
import SerachPanel from './serach-panel'
import { clearObject, useMount, useDebounce } from '../../utils'

export const ProjectList = () => {
  const [params, setParams] = useState({
    name: '',
    personId: ''
  })

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  //返回的是最后一次的param？
  const debounceParam = useDebounce(params, 500)
  //user只需要在组件加载之后渲染一次，相当于componentDidmount
  useMount(() => {
    fetch('http://localhost:3001/users').then(
      async res => {
        if (res.ok) {
          setUsers(await res.json())
        }
      }
    )
  })
  useEffect(() => {
    fetch(`http://localhost:3001/projects?${qs.stringify(clearObject(debounceParam))}`).then(
      async res => {
        if (res.ok) {
          setList(await res.json())
        }
      })

  }, [debounceParam])
  return (
    <>
      <SerachPanel users={users} params={params} setParams={setParams}></SerachPanel>
      <List users={users} list={list}></List>
    </>
  )
}
