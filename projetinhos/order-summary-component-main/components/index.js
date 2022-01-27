const {  useState, useReducer, createContext,useEffect, useContext} = React

function MyApp() {
    return (
                <div className="MainContainer">
        
                    <MyHeader/>
                    <MySection/>
                </div>
    )
}

function MyHeader() {
    return (
        <header>
            <div id="logo"></div>
        </header>
    )
}

function MySection() {
    return (
        <section>
            <h1>Order Summary</h1>
            <p>You can now listen to milions of songs, audiobooks, and podcasts on any device aniwhere you like!</p>
            <MyAside/>
            <button id="ProceedPayment">Proceed to Payment</button>
            <button id="CancelOrder">Cancel Order</button>
        </section>
    )
}

function MyAside(){
    return (
        <aside>
            <div id="icon-music"></div>
            <div id="AnnualPlan">
                <p id="textPlan">Annual Plan</p>
                <p id="valuePlan"><span>$59.99</span>/year</p>
            </div>
            <a href="#" rel="next" target="_self">Change</a>
        </aside>
    )
}

ReactDOM.render(
    <MyApp/>,
    document.querySelector('#app')
)