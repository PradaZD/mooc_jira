import react from 'react'
// import { useState} from 'react'
const LiSerachPanelst = ({ users,params,setParams}) => {
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
export default LiSerachPanelst