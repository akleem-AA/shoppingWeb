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
        console.log("click on cart", data)
        setActive(isActive => !isActive);
    }
    const buttons = (data) => {
        console.log(data)
        switch (data) {
            case "All":
                setData(Api)
                break;

            case "Nature":
                let result = Api.filter((item) => {
                    console.log("item", item)
                    return item.category === "nature"
                })
                setData(result)
                console.log("nuture button")
                setBtnAnimation(btnAnimation => !btnAnimation)
                setProductTitle("Nature List")
                setTitleAnimation(true)
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

    return (
        <>
            <h1 className={titleAnimation ? 'text-center text-warning animate__animated animate__rotateInDownLeft' : "text-center text-success"}>{productTitle ? productTitle : "All List"}</h1>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3 border-left-3'>
                        <button className={btnAnimation ? 'btn btn-warning w-100 mb-4 animate__animated animate__heartBeat' : 'btn btn-warning w-100 mb-4'} onClick={() => buttons("All")}>ALL</button>
                        <button className={btnAnimation ? 'btn btn-warning w-100 mb-4 animate__animated animate__heartBeat' : 'btn btn-warning w-100 mb-4'} onClick={() => buttons("Nature")}>Nature</button>
                        <button className='btn btn-warning w-100 mb-4 animate__animated animate__zoomIn' onClick={() => buttons("Animal")}>Animal</button>
                        <button className='btn btn-warning w-100 mb-4 animate__zoomIn' onClick={() => buttons("Water")}>Water</button>
                        <button className='btn btn-warning w-100 mb-4 animate__zoomIn' onClick={() => buttons("Car")}>Car</button>
                        <button className='btn btn-warning w-100 mb-4 animate__zoomIn' onClick={() => buttons("Bike")}>Bike</button>
                    </div>
                    <div className='col-md-9 '>
                        <div className='row'>
                            {data.map((item, index) => {
                                const { picture, name: title, online: active, description: desc } = item
                                return (<>
                                    {!isActive ? <>
                                        <div className='col-md-4 mb-4' key={index}>
                                            <div className='card'>
                                                <img src={picture} className="card-img-top" alt="..." />
                                                <div className="card-body " onClick={() => cart(item)}>
                                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                                        <h5 className="card-title">{title}</h5>
                                                        <h5 className={active ? "card-title text-success" : "card-title text-danger"}>{active ? "Avtive" : "Offline"}</h5>
                                                    </div>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>

                                    </> : <>
                                        <div className='col-md-4 mb-4' key={index}>
                                            <div className="card" onClick={() => cart(item)}>
                                                {/* <img src={picture} className="card-img-top" alt="..." /> */}
                                                <div className="card-body animate__animated animate__flipInY">
                                                    <p className="card-text">{desc}</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>}
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