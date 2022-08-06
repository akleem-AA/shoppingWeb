import React, { useState } from 'react'
import 'animate.css';
import Api from '../Api';

const Cart = () => {
    const [isActive, setActive] = useState(false)
    const [btnAnimation, setBtnAnimation] = useState(false)
    const [productTitle, setProductTitle] = useState("")
    const [titleAnimation, setTitleAnimation] = useState(false)
    const [data, setData] = useState(Api)

    const cart = (data) => {
        console.log("click on cart")
        setActive(isActive => !isActive);
    }
    const buttons = (data) => {
        console.log(data)
        switch (data) {
            case "Nature":
                console.log("nuture button")
                setBtnAnimation(btnAnimation => !btnAnimation)
                setProductTitle("Nature List")
                setTitleAnimation(!titleAnimation)
                break;
            case "Animal":
                setProductTitle("Animal List")
                setTitleAnimation(!titleAnimation)
                break;
            case "Water":
                setProductTitle("WaterFall List")
                setTitleAnimation(!titleAnimation)
                break;
            case "Car":
                setProductTitle("Car List")
                setTitleAnimation(!titleAnimation)
                break;
            case "Bike":
                setProductTitle("Bike List")
                setTitleAnimation(!titleAnimation)
        }
    }
    const animal = () => {
        setActive(isActive => !isActive);
    }
    const water = () => {
        setActive(isActive => !isActive);
    }
    const cars = () => {
        setActive(isActive => !isActive);
    }
    const bike = () => {
        setActive(isActive => !isActive);
    }
    return (
        <>
            <h1 className={titleAnimation ? 'text-center text-warning animate__animated animate__heartBeat' : "text-center text-success"}>{productTitle ? productTitle : "All List"}</h1>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3 border-left-3'>
                        <button className={btnAnimation ? 'btn btn-warning w-100 mb-4 animate__animated animate__heartBeat' : 'btn btn-warning w-100 mb-4'} onClick={() => buttons("Nature")}>Nature</button>
                        <button className='btn btn-warning w-100 mb-4 animate__animated animate__zoomIn' onClick={() => buttons("Animal")}>Animal</button>
                        <button className='btn btn-warning w-100 mb-4 animate__zoomIn' onClick={() => buttons("Water")}>Water</button>
                        <button className='btn btn-warning w-100 mb-4 animate__zoomIn' onClick={() => buttons("Car")}>Car</button>
                        <button className='btn btn-warning w-100 mb-4 animate__zoomIn' onClick={() => buttons("Bike")}>Bike</button>
                    </div>
                    <div className='col-md-9 '>
                        <div className='row'>
                            {data.map((item) => {
                                const { picture, name: title, online: active, } = item
                                return (<>
                                    <div className='col-md-4 mb-4'>
                                        <div className={isActive ? " animate__animated animate__fadeInTopLeft card" : "card"} onClick={cart}>
                                            <img src={picture} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })

                            }

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart