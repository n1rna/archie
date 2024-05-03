import Link from "next/link";

import ArchitectureIcon from '@mui/icons-material/Architecture';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

export default function Sidebar() {
  return (
    <div className="min-w-16 bg-gray-950 text-gray-400 py-4">
      <div className="flex justify-center mb-6">
        <Link href="#">
          <ArchitectureIcon className="h-8 w-8" />
          <span className="sr-only">Archie</span>
        </Link>
      </div>
      <nav className="space-y-4">
        <Link className="flex justify-center" href="#">
          <HomeIcon className="h-6 w-6" />
        </Link>
        <Link className="flex justify-center" href="#">
          <SearchIcon className="h-6 w-6" />
        </Link>
      </nav>
    </div>
  );
}
