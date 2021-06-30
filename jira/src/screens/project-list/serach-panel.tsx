import react from 'react'

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
}
interface SerachPanelProps {
  users: User[],
  params: {
    name: string;
    personId: string;
  }
  setParams: (params: SerachPanelProps['params']) => void;
}
const SerachPanel = ({ users, params, setParams }: SerachPanelProps) => {
  return (
    <form>
      <input
        type="text"
        placeholder="项目名"
        value={params.name}
        onChange={(e) => setParams({
          ...params,
          name: e.target.value
        })}
      />
      <select name="" id=""
        value={params.personId}
        onChange={(e) => setParams({
          ...params,
          personId: e.target.value
        })}
      >
        <option value={''}>负责人</option>
        {
          users.map(user =>
            <option value={user.id} key={user.id}>{user.name}</option>
          )
        }
      </select>
    </form>
  )
}
export default SerachPanel