import { useEffect, useState } from 'react';
import 'whatwg-fetch';
import qs from 'qs';
import { SearchPanel } from './search-panel';
import { List } from './List';
import { cleanObject, useMount, useDebounce } from '../../utils';
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 2000);

  //unkonw表示一个变量可以是任何变量，但是unknow不能被赋值给任何值，并且也不能从unknown身上获取任何方法
  // let value: unknown;
  // value = null;
  // value = undefined;
  // value = {};
  // value.getName()

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);
  //初始化users;
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel
        param={param}
        users={users}
        setParam={setParam}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
