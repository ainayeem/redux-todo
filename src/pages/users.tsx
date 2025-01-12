import { AddUserModal } from "@/components/module/users/AddUserModal";
import { Button } from "@/components/ui/button";
import { removeUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";

export default function Users() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 mt-20">
        <div className="flex justify-end items-center gap-5">
          <h1 className="mr-auto">Users</h1>
          <AddUserModal />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {users.map((user) => (
            <div
              className="border px-5 py-3 rounded-md flex justify-between items-center"
              key={user.id}
            >
              <h1>{user.name}</h1>
              <Button
                onClick={() => dispatch(removeUser(user.id))}
                variant="link"
                className="p-0 text-red-500"
              >
                <Trash2 />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
