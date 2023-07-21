import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunks';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoadingDeletingUser, removeUserError] =
    useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoadingDeletingUser} onClick={handleClick}>
          <GoTrash />
        </Button>
        {removeUserError && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
