import { React, useState, useEffect } from 'react';
import 'whatwg-fetch';
import * as qs from 'qs';
import { cleanObject, useMount, useDebounce } from '../../Utils';
import { SearchPanel } from "./serach-panel";
import { List } from './list';
/* 
  入口文件
*/
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 2000);
  
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])
  //只需要在页面渲染的时候触发一次，但凡只触发一次 第二个参数就可以写空数组
  useMount(() => {
    fetch(`${apiUrl}/users`).
      then(async response => {
        if (response.ok) {
          setUsers(await response.json())
        }
      })
  })
  return (
    <div style={{ marginTop: 5, marginLeft: 5 }}>
      <SearchPanel param={param} users={users} setParam={setParam}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
