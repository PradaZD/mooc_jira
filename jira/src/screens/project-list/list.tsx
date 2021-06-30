import React from 'react'
import {User} from './serach-panel'
//这里参考API文档来设置
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
}
interface ListProps {
  users: User[];
  list: Project[];
}
const List = ({ users, list }: ListProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project =>
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>

          )
        }
      </tbody>
    </table>
  )
}
export default List