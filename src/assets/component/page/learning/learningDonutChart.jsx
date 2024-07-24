import './learningStyle.css';
import {
    Chart,
    Interval,
    Coordinate,
    Legend,
    View,
    Annotation,
} from "bizcharts";


export default function LearningDonutChart() {

    function Ring({ data = [], content = {}, intervalConfig = {} }) {
        return (
            <Chart placeholder={false} height={200} padding="auto" autoFit>
                <Legend visible={false} />
                {/* 绘制图形 */}
                <View
                    data={data}
                    scale={{
                        percent: {
                            formatter: (val) => {
                                return (val * 100).toFixed(2) + "%";
                            },
                        },
                    }}
                >
                    <Coordinate type="theta" innerRadius={0.5} />
                    <Interval
                        position="percent"
                        adjust="stack"
                        // color="type"
                        // color={["type", ["rgba(100, 100, 255, 0.6)", "#eee"]]}
                        color={["type", ["#60BBAC", "#EFEFEF"]]}
                        size={34} //그래프 굵기
                        // style={{ fillOpacity: 0.6 }}
                        // label={['type', {offset: 40}]}
                        {...intervalConfig}
                    />
                    <Annotation.Text
                        position={["50%", "52%"]}
                        content={content.percent}
                        style={{
                            lineHeight: "240px",
                            fontSize: "20",
                            fill: "#222222",
                            textAlign: "center",
                        }}
                    />
                </View>
            </Chart>
        );
    }

    const myData = [
        { type: "진도율1", percent: 0.5 },
        { type: "진도율2", percent: 0.5 },
    ];
    const myContent = {
        percent: "50%",
    };

    function Ring2({ data = [], content = {}, intervalConfig = {} }) {
        return (
            <Chart placeholder={false} height={200} padding="auto" autoFit>
                <Legend visible={false} />
                {/* 绘制图形 */}
                <View
                    data={data}
                    scale={{
                        percent: {
                            formatter: (val) => {
                                return (val * 100).toFixed(2) + "%";
                            },
                        },
                    }}
                >
                    <Coordinate type="theta" innerRadius={0.5} />
                    <Interval
                        position="percent"
                        adjust="stack"
                        // color="type"
                        // color={["type", ["rgba(100, 100, 255, 0.6)", "#eee"]]}
                        color={["type", ["#DEE47E", "#EFEFEF"]]}
                        size={34} //그래프 굵기
                        // style={{ fillOpacity: 0.6 }}
                        // label={['type', {offset: 40}]}
                        {...intervalConfig}
                    />
                    <Annotation.Text
                        position={["50%", "52%"]}
                        content={content.percent}
                        style={{
                            lineHeight: "240px",
                            fontSize: "20",
                            fill: "#222222",
                            textAlign: "center",
                        }}
                    />
                </View>
            </Chart>
        );
    }
    const myData2 = [
        { type: "출석률1", percent: 0.5 },
        { type: "출석률2", percent: 0.5 },
    ];
    const myContent2 = {
        percent: "50%",
    };


    return (
        <div className='flex donutWrap'>
            <div className='progress'>
                <h4>진도율</h4>
                <Ring data={myData} content={myContent} />
            </div>
            <div className='attendanceRate'>
                <h4>출석률</h4>
                <Ring2 data={myData2} content={myContent2} />
            </div>
        </div>
    );
}
