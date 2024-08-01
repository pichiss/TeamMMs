import './learningStyle.css';
import Subnav from '../../component/common/Subnav'
import LearningBarChart from './learningBarChart';
import LearningDonutChart from './learningDonutChart';
import LearningScore from './learningScore';
import LearningAttendance from './learningAttendance';
import SubHead from '../../component/common/Subhead';

export default function Learning() {



    return (
        <>
        <SubHead chara={1}/>
         <section className='w1440 pa55 flex learningWrap'>
            <Subnav tit={'학부모코너'} />
            <div className='learning'>
                <h2 className='subtit'>학습현황</h2>
                <div className='LearningChartWrap'>
                    <h3>학습현황 개요</h3>
                    <div className='flex LearningChart'>
                        <LearningDonutChart />
                        <LearningBarChart />
                    </div>
                    <LearningScore/>
                    <LearningAttendance/>
                </div>
            </div>
        </section>
        </>
    );
}
