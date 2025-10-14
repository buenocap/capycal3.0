export default function Header() {
  function handleLoginStatus(e) {
    e.preventDefault();
    localStorage.setItem(
      "loginStatus",
      JSON.stringify(!JSON.parse(localStorage.getItem("loginStatus")))
    );
  }

  return (
    <header>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/home">Calendar</a>
          </li>
          <li>
            <a
              href="/login"
              onClick={(e) => {
                handleLoginStatus(e);
              }}
            >
              {JSON.parse(localStorage.getItem("loginStatus"))
                ? "Logout"
                : "Login"}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
