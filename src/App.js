import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";

function App() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [adres, setAdres] = useState("")
    const [deliveryFrequency, toggleDeliveryFrequency] = useState("kies jouw dag");
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState("dag");
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    const [basis, setBasis] = useState(0)
    const [medium, setMedium] = useState(0)
    const [large, setLarge] = useState(0)
    const [sap, setSap] = useState(0)

    function reset() {
        setBasis(0)
        setMedium(0)
        setLarge(0)
        setSap(0)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    firstname: ${firstName}, 
    lastname: ${lastName}, 
    Zipcode: ${zipCode}, 
    Adres: ${adres}, 
    deliveryFrequency: ${deliveryFrequency},
    remark: ${remark},
    AgreeTerms: ${agreeTerms}
    `);
        console.log(`
        FruitBowl order - fruitbowl-basis: ${basis}, 
        fruitbowl-medium: ${medium}, fruitbowl-large: ${large}
        fruitbowl-sap: ${sap}`);
    }

    return (
        <>
            <div className="container">
                <header>
                    <h1>Fruitschaal bezorg service</h1>
                </header>
                <body>
                <main>
                    <article>
                        <Counter
                            className="counter-text"
                            buttonClass="counter-button"
                            bowlName="Fruitschaal basis"
                            type="button"
                            countValue={basis}
                            decrement={() => setBasis(basis => basis-1)}
                            increment={() => setBasis(basis => basis+1)}
                            isDisabled={(basis === 0)}
                        />
                    </article>
                    <article>
                        <Counter
                            className="counter-text"
                            buttonClass="counter-button"
                            bowlName="Fruitschaal medium"
                            type="button"
                            countValue={medium}
                            decrement={() => setMedium(medium => medium-1)}
                            increment={() => setMedium(medium => medium+1)}
                            isDisabled={(medium === 0)}
                        />
                    </article>
                    <article>
                        <Counter
                            className="counter-text"
                            buttonClass="counter-button"
                            bowlName="Fruitschaal large"
                            type="button"
                            countValue={large}
                            decrement={() => setLarge(large => large-1)}
                            increment={() => setLarge(large => large+1)}
                            isDisabled={(large === 0)}
                        />
                    </article>
                    <article>
                        <Counter
                            className="counter-text"
                            buttonClass="counter-button"
                            bowlName="Fruitschaal met sap"
                            type="button"
                            countValue={sap}
                            decrement={() => setSap(sap => sap-1)}
                            increment={() => setSap(sap => sap+1)}
                            isDisabled={(sap === 0)}
                        />
                    </article>
                    <section>
                        <button id="reset-btn"
                                onClick={() => reset()}
                                type="button"
                                className="reset-btn">
                            RESET
                        </button>
                    </section>
                </main>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p id="id-firstname">
                            Voornaam</p>
                        <input onChange={(e) => setFirstName(e.target.value)}
                               value={firstName}
                               type="text"
                               name="firstname"
                               className="form-field"/>
                    </label>
                    <label>
                        <p id="id-lastname">
                            Achternaam</p>
                        <input onChange={(event) => setLastName(event.target.value)}
                               value={lastName}
                               type="text"
                               name="lastname"
                               className="form-field"/>
                    </label>
                    <label>
                        <p id="id-zipCode">
                            Postcode</p>
                        <input
                               type="text"
                               name="zipCode"
                               className="form-field"
                               onChange={(event) => setZipCode(event.target.value)}
                               value={zipCode}/>
                    </label>
                    <label>
                        <p id="id-adres">
                            Adres</p>
                        <input
                               type="text"
                               name="adres"
                               className="form-field"
                               onChange={(event) => setAdres(event.target.value)}
                               value={adres}/>
                    </label>
                    <label id="id-dropdown">
                        <h5 id="titel-drop-down"> Bezorg frequentie </h5>
                        <select
                            value={deliveryFrequency}
                            onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                        >
                            <option> Kies jouw optie</option>
                            <option value="every-day"> Iedere dag</option>
                            <option value="each-week"> Om de week</option>
                            <option value='every-month'> Iedere maand</option>
                        </select>
                    </label>
                    <label>
                        <input type="radio"
                               name="day"
                               value="daytime"
                               checked={deliveryTimeslot === 'daytime'}
                               onChange={(e) => toggleDeliveryTimeslot(e.target.value)}/>
                        <label className="white-text">overdag</label>
                        <input type="radio"
                               id="select-avond"
                               name="night"
                               value="nighttime"
                               checked={deliveryTimeslot === 'nighttime'}
                               onChange={(e) => toggleDeliveryTimeslot(e.target.value)}/>/>
                        <label className="white-text">'s Avonds</label>
                    </label>
                    <label>
                        <textarea id="box-remarks"
                                  name="remarks"
                                  rows="9"
                                  cols="51"
                                  value={remark}
                                  onChange={(e) => setRemark(e.target.value)}>
                        Opmerkingen
                        </textarea>
                    </label>
                    <section>
                        <div id="checkbox">
                            <input  type="checkbox"
                                    name="agree"
                                    id="agree-field"
                                    value={agreeTerms}
                                    onChange={(e) => toggleAgreeTerms(e.target.checked)}/>
                            <label For="agree-field" className="white-text">
                                Ik ga akkoord met de algemene voorwaarden
                            </label>
                        </div>
                        <button id="send-btn"
                                onClick={handleSubmit}
                                type="button"
                                className="verzenden"
                                value="submit">
                            VERZEND
                        </button>
                    </section>
                </form>
                </body>
            </div>
                <footer className="footer-text">
                    <a href="https://www.w3schools.com">@Algemene voorwaarden</a>
                </footer>
        </>

    );
}

export default App;
