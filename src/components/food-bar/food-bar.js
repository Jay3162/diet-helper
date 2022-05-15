import React, {useState} from "react";
import style from './food-bar.module.css'

export default function FoodBar() {
    const [food, setFood] = useState('');
    const [allFood, setAllFood] = useState([])
    const [calories, setCalories] = useState(0)
    const [allCalories, setAllCalories] = useState([])
    let arr = []

    const handleChange = (target) => {
        const value = target.target.value;
        setFood(value)
    }

    const handleCalories = (e) => {
        const value = e.target.value;
        setCalories(value)
    }

    const handleFood = (e) => {
        e.preventDefault()
        if (allFood === undefined) {
            setAllFood([])
        }
        if (allCalories === undefined) {
            setAllCalories([])
        }
        setAllFood((prev) => ([...prev, food]))
        setAllCalories((cal) => ([...cal, calories]))
        console.log(calories, calories.length)
    }
    

    const handleDelete = (e) => {
        e.preventDefault()
        for (let i = 0; i < allFood.length; i++) {
            if (allFood[i] !== e.target.value) {
                arr.push(allFood[i])
            }
        }
        setAllFood(arr)
    }


    return (
        <div className={style["container"]}>
            <form onSubmit={handleFood}>
                <input className={style["bar"]} required onChange={handleChange}/>
                <input className={style["mid-bar"]} onChange={handleCalories}/>
                <button className={style["add"]}>add</button>
                {allFood ? <div className="foodlist">
                    {allFood.map((item, index) => 
                        <div key={index} className={style["fooditem"]}>
                            <p value={index}>{item}</p>
                            {allCalories ? (<div key={index}>
                                {allCalories.map((obj, ind) => <div key={ind}>
                                    <p value={ind}>{obj}</p>
                                </div>)}
                            </div>) : (<div></div>)}
                            <button className={style["del-btn"]} value={item} onClick={handleDelete}>x</button>
                        </div>
                    )}
                </div> : <div></div>}
            </form>    
        </div>
    )
}