import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <header className="flex justify-between items-center mb-32">
            <Link 
                href="/"
                className="text-2xl"
            >
                Kendo Club at UC Davis
            </Link>
                <div>
                <Link 
                    href="/aboutus"
                    className="text-slate-300 px-2 py-1 rounded ml-4
                    hover:bg-slate-700 focus-within:bg-slate-700"
                >
                    About Us
                </Link>

                <Link 
                    href="/beginner"
                    className="text-slate-300 px-2 py-1 rounded ml-4
                    hover:bg-slate-700 focus-within:bg-slate-700"
                >
                    How to Join
                </Link>

                <Link 
                    href="/practice_schedule"
                    className="text-slate-300 px-2 py-1 rounded ml-4
                    hover:bg-slate-700 focus-within:bg-slate-700"
                >
                    Practice Schedule
                </Link>
                </div>
            </header>
        </>
    );
}