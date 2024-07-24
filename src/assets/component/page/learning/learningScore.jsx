import './learningStyle.css';


export default function LearningScore() {



    return (
        <div className='scoreWrap'>
            <table className='score'>
                <thead>
                <tr>
                    <th>단원</th>
                    <th>학습제목</th>
                    <th>학습결과</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan={4}>1단원</td>
                    <td>1-1 이상, 이하</td>
                    <td>60 점</td>
                </tr>
                <tr>
                    <td>1-2 초과, 미만</td>
                    <td>75 점</td>
                </tr>
                <tr>
                    <td>1-3 올림, 버림</td>
                    <td>80 점</td>
                </tr>
                <tr>
                    <td>1-4 반올림</td>
                    <td>70 점</td>
                </tr>
                 <tr>
                    <td rowSpan={3}>2단원</td>
                    <td>2-1 분수 X 자연수</td>
                    <td>80 점</td>
                </tr>
                <tr>
                    <td>2-2 자연수 X 분수</td>
                    <td>95 점</td>
                </tr>
                <tr>
                    <td>2-3 분수 X 분수</td>
                    <td>90 점</td>
                </tr>
                <tr>
                    <td rowSpan={4}>3단원</td>
                    <td>3-1 합동</td>
                    <td>70 점</td>
                </tr>
                <tr>
                    <td>3-2 대응점, 대응변, 대응각</td>
                    <td>80 점</td>
                </tr>
                <tr>
                    <td>3-3 선대칭도형과 대칭축</td>
                    <td>75 점</td>
                </tr>
                <tr>
                    <td>3-4 점대칭도형과 대칭의 중심</td>
                    <td> 85 점</td>
                </tr>
                <tr>
                    <td rowSpan={3}>4단원</td>
                    <td>4-1 소수 X 자연수</td>
                    <td>45 점</td>
                </tr>
                <tr>
                    <td>4-2 자연수 X 소수</td>
                    <td>40 점</td>
                </tr>
                <tr>
                    <td>4-3 소수 X 소수</td>
                    <td>35 점</td>
                </tr>
                <tr>
                    <td rowSpan={3}>5단원</td>
                    <td>5-1 직육면체 & 정육면체</td>
                    <td>80 점</td>
                </tr>
                <tr>
                    <td>5-2 직육면체의 성질</td>
                    <td>65 점</td>
                </tr>
                <tr>
                    <td>5-3 겨냥도와 전개도</td>
                    <td>70 점</td>
                </tr>
                <tr>
                    <td rowSpan={2}>6단원</td>
                    <td>6-1 평균의 의미와 활용</td>
                    <td>75 점</td>
                </tr>
                <tr>
                    <td>6-2 가능성을 말이나 수로 나타내기</td>
                    <td>65 점</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}