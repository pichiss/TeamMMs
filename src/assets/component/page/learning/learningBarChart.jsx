import { useState, useEffect } from 'react';
import './learningStyle.css';
import {
    BarChart,
    Bar,
    XAxis,
} from "recharts";

export default function LearningBarChart() {

    const [bar, setBar] = useState(true)

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setBar(false);
        }
        else {
            setBar(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // unmount 시 실행되는 cleanup 함수
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const data = [
        {
            name: "1단원",
            pv: 3000,
        },
        {
            name: "2단원",
            pv: 1000,
        },
        {
            name: "3단원",
            pv: 2000,
        },
        {
            name: "4단원",
            pv: 7000,
        },
        {
            name: "5단원",
            pv: 4000,
        },
        {
            name: "6단원",
            pv: 4000,
        },
    ];


    return (
        <div className='barWrap'>
            <h4>단원별 오답률</h4>
            {bar ?
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={50}
                >
                    <XAxis dataKey="name" />
                    <Bar dataKey="pv" fill="#FFA9A9" background={{ fill: "#efefef" }} />
                </BarChart>
                :
                <BarChart
                    width={300}
                    height={300}
                    data={data}
                    barSize={30}
                >
                    <XAxis dataKey="name" />
                    <Bar dataKey="pv" fill="#FFA9A9" background={{ fill: "#efefef" }} />
                </BarChart>
            }
        </div>
    );
}
