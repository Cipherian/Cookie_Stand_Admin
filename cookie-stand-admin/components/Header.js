export default function Header() {
  return (
    <header className="h-16 bg-lab-green flex items-center">
      <div className="flex items-center m-5">
        <h1 className="text-5xl font-bold text-left">Cookie Stand Admin</h1>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center justify-end m-5 ">
        <button type="button" className="bg-silver border border-black hover:bg-metal py-2 px-4 rounded-xl">
          Overview
        </button>
      </div>
    </header>
  );
}