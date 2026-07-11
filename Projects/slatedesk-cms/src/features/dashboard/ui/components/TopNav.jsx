import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Bell } from 'lucide-react';

const TopNav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center bg-(--secondary) w-[30%] rounded-lg px-3 py-2 border-gray-600">
        <Search size={24} />
        <input
          type="search"
          placeholder="Search Workspace..."
          className="outline-none w-full"
        />
      </div>
      <div className="flex gap-4">
        <Bell size={24} />
        <Menu size={24} />
      </div>
    </div>
  );
};

export default TopNav;
