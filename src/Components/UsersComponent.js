import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../Redux/Action/users';

// import Card from './CardComponent';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersData);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
console.log(users);
  return (
    <>
    {/* {users.loading &&  <p>Loging...</p>} */}
     
      {users.length === 0 &&  !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {/* {users.length > 0 && users.map((user) => (
        <Card key={user.id} user={user} />
      ))} */}
    </>
  )
}

export default Users;