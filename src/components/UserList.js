import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state) => {
    console.log(state.users);
    return state.users;
  })


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handlerUserAdd = () => {
    dispatch(addUser());
  }
if (isLoading) {
    return <Skeleton time={6} className="h-10 w-full"/>
}
if (error) {
    return <div>Error: {error.message}</div>
}

const renderedUser = data.map((user) => {
    return <div key={user.id} className='mb-2 border rounded'>
        <div className='flex p-2 justify-center items-center cursor-pointer'>
            {user.name}
        </div>
    </div>
});
  return <div>
    <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>User</h1>
        <Button onClick={handlerUserAdd}>
            + Add User
        </Button>
    </div>
    {renderedUser}
    </div>;
}

export default UsersList;