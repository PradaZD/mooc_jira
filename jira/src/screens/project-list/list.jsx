import React from 'react'

const List = ({ users, list }) => {

  return (
    <table border="1" >
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
              <td index={project.id}>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>

          )
        }
      </tbody>
    </table>
  )
}
export default List