export default function Navigation() {
    return (
      <nav className="flex flex-row justify-between  items-center my-8">
          <ul className="flex flex-row gap-16">
              <li className="font-bold text-lg hover:text-sixth"><a href="/">Home</a></li>
              <li className="font-bold text-lg hover:text-sixth"><a href="/dashboard">Dashboard</a></li>
              <li className="font-bold text-lg hover:text-sixth"><a href="/work">Work</a></li>
              <li className="font-bold text-lg hover:text-sixth"><a href="/projects">Projects</a></li>
              <li className="font-bold text-lg hover:text-sixth"><a href="/notes">Notes</a></li>
          </ul>
      </nav>
    )
  }
  