import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        console.log("User data:", tg.initDataUnsafe.user);
    } else {
        console.warn("Telegram WebApp API недоступний");
    }
}, [])

    return (
        <div>
            <h1>Welcome to Telegram Mini App</h1>
            <button onClick={() => window.Telegram.WebApp.close()}>
                Close App
            </button>
        </div>
    );
};

export default App;
