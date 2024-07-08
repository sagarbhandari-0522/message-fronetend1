// import React, {useState} from 'react';
// import axios from "axios";
//
// function NumberSumUp(props) {
//     const[startNum, setStartNum] =useState(0)
//     const[endNum, setEndNum]=useState(0)
//     const[result, setResult] = useState(0)
//
//     function start_number_handler(e)
//     {
//         setStartNum(e.currentTarget.value)
//     }
//     function end_number_handler(e)
//     {
//          setEndNum(e.currentTarget.value)
//     }
//     function calc()
//     {
//             let data = {
//               "start":Number(startNum),
//               "end": Number(endNum)
//             };
//             let config = {
//               method: 'post',
//               maxBodyLength: Infinity,
//               url: 'https://message-nu-eight.vercel.app//chat/sum_numbers/',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               data : data
//             };
//
//             axios.request(config)
//             .then((response) => {
//               console.log(JSON.stringify(response.data));
//               setResult(response.data.result)
//
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//
//     }
//
//     return (
//         <div>
//             <p>Start Number: <input type={"number"} id={"startNum"} onChange={start_number_handler}/></p>
//             <p>End Number: <input type={"number"} id={"endNum"} onChange={end_number_handler}/></p>
//             <p><button id={"calbtn"} onClick={calc}>Calculate</button></p>
//             <p>Result: {result}</p>
//
//
//         </div>
//     );
// }
//
// export default NumberSumUp;


import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../consistents";

function NumberSumUp(props) {
    const [startNum, setStartNum] = useState(0)
    const [endNum, setEndNum] = useState(0)
    const [result, setResult] = useState(0)

    function start_num_handler(e) {
        setStartNum(e.target.value)
    }

    function end_num_handler(e) {
        setEndNum(e.target.value)
    }

    function cal() {
        let data = JSON.stringify({
            "start_num": Number(startNum),
            "end_num": Number(endNum)
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'chat/sum_numbers/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setResult(response.data.result)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <p>Start Number: <input type={"number"} id={"startnum"} onChange={start_num_handler}/></p>
            <p>End Number: <input type={"number"} id={"endnum"} onChange={end_num_handler}/></p>
            <p>
                <button id={"calbtn"} onClick={cal}>Calculate</button>
            </p>
            <p>Result: <span id={"result"}>{result}</span></p>
        </div>
    );
}

export default NumberSumUp;
