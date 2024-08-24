'use component'
import './App.css'
import Timer from "./timer.tsx";

const App = () => {
    const [days, Hours, Minutes, Seconds]  = Timer(new Date("2024-09-01T12:00:00+05:30"));
    return (
        <div style={{ textAlign: "center" }}>
            {Seconds+Minutes+Hours+days > 0 ? (
                <>

                    <h1 style={{ color: "green" }}>
                        We will be coming soon!
                    </h1>
                    <h3>Keep your seatbelts fastened because you don't want to be late.</h3>
                    <div className="time">
                        <div className="days">{days}</div>
                        <div className="hours">{Hours}</div>
                        <div className="minutes">{Minutes}</div>
                        <div className="seconds">{Seconds}</div>
                    </div>
                    <div className="time">
                        <div>Days</div>
                        <div>Hours</div>
                        <div>Minutes</div>
                        <div>Seconds</div>
                    </div>
                </>) : (
                <div className="time">Time Up!!</div>
            )
            }
        </div>
    );
};

export default App;

