import LockClosedSolidLogo from "../../assets/svg/lock-closed-solid.svg?react";
import UserSolidLogo from "../../assets/svg/user-solid.svg?react";

function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-radial from-green-600 from-50% to-green-800 py-4">
      <div className="flex h-max w-max flex-col items-center justify-center">
        <span className="text-2xl text-white">GRP-SYPG</span>
        <span className="text-4xl text-white">Inventory Management System</span>
        <div className="mt-6 flex w-full flex-col items-center rounded-lg bg-white">
          <div className="h-12 w-full rounded-t-lg bg-gray-100" />
          <div className="my-8 flex w-full flex-col items-start gap-y-8 px-8">
            <span className="w-full text-green-700">
              Please login to your account
            </span>
            <div className="flex h-fit w-full items-center border border-gray-400">
              <div className="flex items-center justify-center border-r border-r-gray-400 bg-gray-100 px-4 py-2">
                <UserSolidLogo className="size-6 fill-gray-400 stroke-gray-400" />
              </div>
              <input className="mx-6 w-full" type="email"></input>
            </div>
            <div className="flex h-fit w-full items-center border border-gray-400">
              <div className="flex items-center justify-center border-r border-r-gray-400 bg-gray-100 px-4 py-2">
                <LockClosedSolidLogo className="size-6 fill-gray-400 stroke-gray-400" />
              </div>
              <input className="mx-6 w-full" type="password"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
