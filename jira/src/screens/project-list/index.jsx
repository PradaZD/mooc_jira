import { React, useEffect, useState } from 'react';
import 'whatwg-fetch';
import qs from 'qs';
import { SearchPanel } from './search-panel';
import { List } from './List';
import { cleanObject } from '../../utils';
const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [param]);
  //初始化users;
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
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
