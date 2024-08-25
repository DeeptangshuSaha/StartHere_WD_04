import {useEffect, useRef, useState} from "react";

const Timer=(a: string | Date) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState([]);

    const getTimeRemaining = (e: string | Date) => {
        const total =
            Date.parse(e as string) - Date.parse(Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: string | Date) => {
        const { total, days, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            const les = [days, hours, minutes, seconds];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setTimer(les);
        }
    };

    const clearTimer = (e: string | Date) => {
        setTimer([]);
        if (Ref.current) clearInterval(Ref.current);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        Ref.current = setInterval(() => {
            startTimer(e);
        }, 1000);
    };

    const getDeadTime = () => {
        //return new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000); //return new Date(Date.parse(new Date()) + (days) * (hours) * (minutes) * (seconds) * 1000);
        return new Date(Date.parse(a as string));
    };
    useEffect(() => {
        clearTimer(getDeadTime());
    },[]);
    return timer;
}
export default Timer;
