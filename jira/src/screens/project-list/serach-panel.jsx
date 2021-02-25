import { useState } from 'react';
export default SerachPanel = () => {
    const [params, setParams] = useState({
        projectName: '',
        parentId: ''
    })
    const [users, setUsers] = useState([]);
    return (
        <form >
            <input type="text"
                placeholder="项目名"
                value={params.projectName}
                onChange={e => setParams({
                    ...params,
                    projectName: e.target.value
                })}
            />
            <select
                value={params.parentId}
                onChange={e => setParams({
                    ...params,
                    parentId: e.target.value
                })}
            >
                <option value='负责人'></option>
                {users.map(user => <option value={user.id}>{user.name}</option>)}
            </select>
        </form>
    )
}