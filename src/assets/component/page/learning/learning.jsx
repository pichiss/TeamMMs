import './learningStyle.css';
import Subnav from '../../common/Subnav'
import LearningBarChart from './learningBarChart';
import LearningDonutChart from './learningDonutChart';
import LearningScore from './learningScore';
import LearningAttendance from './learningAttendance';
import SubHead from '../../common/Subhead';
import monster from '../../../img/monster/monster5_2.png';

export default function Learning() {



    return (
        <>
        <SubHead chara={monster}/>
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
