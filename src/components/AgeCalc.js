import { useState } from 'react'

export default function AgeCalc() {

    const [input, setInput] = useState("");
    const [age, setAge] = useState(0);

    const handleChange = (event) => {
        let temp = event.target.value;
        let len = temp.length;
        if (len !== 0) {
            let ch = temp[len - 1];
            if (!((ch >= "0" && ch <= "9") || ch === "-")) return;
            console.log("s");
        }
        setInput(event.target.value);
    }

    const CalcAge = () => {
        let a = 2023 - input.substring(6);
        setAge(a);
    }

    return (
        <div className="mt-5 mx-auto">
            <div className="h1 text-center fw-bolder mb-3">Age Calculator</div>
            <div className="h5 text-center fw-bolder mb-3">Enter your date of birth</div>
            <div className="input-group w-25 mx-auto">
                <input className="form-control w-25" onChange={handleChange} value={input} type="text" placeholder="dd-mm-yyyy" />
                <i className="input-group-text fa-regular fa-calendar"></i>
            </div>
            <div className="mx-auto"><button onClick={CalcAge} className="btn btn-primary">Calculate Age</button></div>
            <div>You are {age} years old</div>
        </div>
    )
}