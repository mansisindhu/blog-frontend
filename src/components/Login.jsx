const Login = () => {
    return <div className="flex flex-col gap-2 max-w-[500px] m-auto mt-[100px]">
    <h3 className="text-lg font-bold">Please Login</h3>
    <input className="border-black border rounded-sm" type="text" id="username" placeholder="ENTER USERNAME" />
    <input className="border-black border rounded-sm" type="text" id="password" placeholder="ENTER PASSWORD" />
    <button className="bg-black text-white p-2">Login</button>
</div>
}

export default Login