import React, { useEffect, useState } from 'react'
import GroupItem from '../group-item/GroupItem'
import groupService from '../../../../services/group.service'

function GroupList() {

  const [group, setGroups] = useState([])

  useEffect(() => {

    async function fetchGroups() {
      const groups = await groupService.list()
      setGroups(groups)

    }

    fetchGroups();

  }, [])

  return (
    <ul>
      {group.map((group) => (
        <GroupItem key={group.id} group={group}/>
      ))}
    </ul>
)
}

export default GroupList;