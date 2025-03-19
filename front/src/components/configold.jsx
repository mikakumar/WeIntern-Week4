'use client';

import { useState } from "react";

import DatePicker from "react-datepicker";


const Configold = () =>{

    const [symbol, setSymbol] = useState('');
    const [currency, setCurrency] = useState('');
    const [gdate, setDate] = useState('');

    const formatDateFn = (date) => {
        const selectedDate = new Date(date)
        const fdate = selectedDate.getFullYear() + '-' + parseInt(selectedDate.getMonth()+1) + '-' + selectedDate.getDate();
        setDate(fdate);
   } 

    return(
    <>
    <div className="text-white">
        <form action="">
        <label htmlFor="symbol">Choose material:</label>

            <select name="symbol" id="symbol" onChange={(e)=>setSymbol(e.target.value)}>
            <option value="XAU">XAU - Gold</option>
            <option value="XAG">XAG - Silver</option>
            <option value="XPT">XPT - Platinum</option>
            <option value="XPD">XPD - Palladium</option>
            </select>
        
        <label htmlFor="currency">Choose currency:</label>

        <select name="currency" id="currency" onChange={(e)=>setCurrency(e.target.value)}>
            <option value="USD">USD - United States Dollar</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="GBP">GBP - Great British Pound</option>
            <option value="EUR">EUR - European Euro</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="CNY">CNY - Chinese/Yuan Renminbi</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="THB">THB - Thai Bhat</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="BTC">BTC - Bitcoin</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="CZK">CZK - Czech Krona</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="AED">AED - UAE Dirham</option>
            <option value="KWD">KWD - Kuwaiti Dinar</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="OMR">OMR - Omani Rial</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="JOD">JOD - Jordanian Dinar</option>
            <option value="XAG">XAG - Gold/Silver Ratio</option>
        </select>

        <DatePicker 
        selected={gdate}
        className="text-white"
        dateFormat="yyyy-MM-dd"
        onChange={date=>formatDateFn(date)}
        />
            <input type="submit" value="Submit"/>
        </form>
    </div>
    </>)
}

export default Configold;