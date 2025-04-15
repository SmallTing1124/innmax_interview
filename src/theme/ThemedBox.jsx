import { useContext } from 'react';
import { ThemedContext } from './ThemedContext';
function ThemedBox() {
  const { theme } = useContext(ThemedContext);

  return (
    <div className={`wrapper theme-${theme}`}>
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">logo</div>
        </div>
        <nav aria-label="主選單">
          <ul className="SideMenu">
            <li>
              <a href="#" className="nav-link active">
                頁面01
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                頁面02
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="contentWrapper">
        <header className="pageHeader">
          <h1 className="pageTitle">頁面01</h1>
          <p className="userName">Admin</p>
        </header>
        <main className="mainContent">
          <section className="cardGrid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ThemedBox;
