import react, { useState, useEffect } from 'react';
import * as qs from 'qs';
import { SearchPanel } from './search-panel';
import { List } from './list';
import { cleanObject } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  //name=${param.name}&personId=${param.personId}
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
          console.log(response);
        }
      }
    );
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
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
