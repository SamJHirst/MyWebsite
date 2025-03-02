import './App.css';

function App() {
    return (
        <div className="placeholder-container" aria-label="Coming Soon">
            <p className="placeholder-text" aria-hidden="true">
                <div>
                    <span>C</span>
                    <span>o</span>
                    <span>m</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                </div>
                <div>
                    <span>S</span>
                    <span>o</span>
                    <span>o</span>
                    <span>n</span>
                    <span>!</span>
                </div>
                <div className="aurora">
                    <div className="aurora-item"></div>
                    <div className="aurora-item"></div>
                    <div className="aurora-item"></div>
                    <div className="aurora-item"></div>
                </div>
            </p>
        </div>
    );
}

export default App;
