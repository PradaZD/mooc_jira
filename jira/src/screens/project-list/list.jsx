import React from 'react';

export const List = ({ list, users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list.map(project => {
                    return (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>
                                {/* ?前面的表达式为undefined时，那么就可以设置整个变量为'未知'，不写||就会直接呈现undefined，也不会报错 */}
                                {
                                    users.find(user => user.id === project.personId)?.name || '未知'
                                }
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}