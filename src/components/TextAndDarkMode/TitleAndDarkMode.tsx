import "./style.css";

const TitleAndDarkMode = () => {
  const handleModeDark = () => {
    const btnDark = document.querySelector(
      ".btn-dark-mode"
    ) as HTMLInputElement;
    document.body.classList.toggle("dark-mode");

    if (document.body.className === "dark-mode") {
      btnDark.innerHTML = `
      <i class="fas fa-sun"></i>
      Light Mode
  `;
    } else {
      btnDark.innerHTML = `
      <i class="fas fa-moon"></i>
      Dark Mode
  `;
    }
  };
  return (
    <nav className="nav-styles">
      <div className="container">
        <h1>Where in the world?</h1>
        <button className="btn-dark-mode" onClick={handleModeDark}>
          <i className="fa-solid fa-moon"></i>
          Dark mode
        </button>
      </div>
    </nav>
  );
};

export default TitleAndDarkMode;
