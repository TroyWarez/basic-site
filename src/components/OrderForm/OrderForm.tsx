import classes from "./OrderForm.module.css"
import Input from "../Input/Input"
const OrderForm = () => {
    function onChangeSelectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const stateInputElement =  document.getElementById("stateSelect") as HTMLSelectElement;
        const provinceInputElement =  document.getElementById("CanadianProvinces") as HTMLSelectElement;
        const ZipCodeInputElement = document.getElementById("zipCode") as HTMLInputElement;
        if (stateInputElement && ZipCodeInputElement && provinceInputElement) {
          ZipCodeInputElement.value = '';
          stateInputElement.value = '';
          switch (event?.target?.value)
          {
            case 'CA':
              {
                stateInputElement.setAttribute("list", "CanadianProvinces");
                stateInputElement.setAttribute("placeholder", "Province");
                ZipCodeInputElement.setAttribute("placeholder", "Postal Code");
                ZipCodeInputElement.setAttribute("maxLength", "32");
                stateInputElement.style.display = "none";
                provinceInputElement.style.display = "inline";
                break;
              }
            case 'US':
              {
                stateInputElement.setAttribute("list", "US States");
                stateInputElement.setAttribute("placeholder", "State");
                ZipCodeInputElement.setAttribute("placeholder", "ZIP Code");
                ZipCodeInputElement.setAttribute("maxLength", "12");
                stateInputElement.style.display = "inline";
                provinceInputElement.style.display = "none";
                break;
              }
              default:
              {
                stateInputElement.removeAttribute("list");
                stateInputElement.setAttribute("placeholder", "Province");
                ZipCodeInputElement.setAttribute("placeholder", "Postal Code");
                ZipCodeInputElement.setAttribute("maxLength", "12");
                stateInputElement.style.display = "none";
                provinceInputElement.style.display = "none";
                break;
              }
          }
        }
    
      }
    function onInputHandler (event: React.ChangeEvent<HTMLInputElement>) {
      if (event.target.value !== "")
        {
          switch(event.target.placeholder) {
            case "ZIP Code": 
            {
              if(isNaN(Number(event.target.value)))
                {
                  event.target.value = event.target.value.replace(/\D/g, "");
                }
              break;
            }
            case "Postal Code": 
            {
              if(event.target.value !== '')
                {
                  event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
                  if (event.target.value.length === 4 && event.target.value.charCodeAt(event.target.value.length - 1) !== 32)
                  {
                    event.target.value = event.target.value.slice(0, 3) + ' ' + event.target.value.slice(3, event.target.value.length - 1);
                  }
                }
              break;
            }
            case "Phone Number":
              {
                if(isNaN(Number(event.target.value)))
                  {
                    event.target.value = event.target.value.replace(/[A-Za-z:.]/g, "");
                  }

                if (event.target.value.length === 4 && event.target.value.charCodeAt(0) !== 40)
                    {
                      event.target.value = '(' + event.target.value.slice(0, 3) + ') ' + event.target.value.slice(3, event.target.value.length - 1);
                    }

                  if (event.target.value.length === 10 && event.target.value.charCodeAt(event.target.value.length - 1) !== 45)
                      {
                        event.target.value = event.target.value.slice(0, 9) + '-' + event.target.value.slice(9, event.target.value.length);
                      }
                break;
              }
          }
        }
      }
    return (
        <>
        <div className={classes.form}>
            <form action="" method="get">
            <h3 className={classes.heading}>Shipping Address</h3>
            <p className={classes.p}>Please enter your shipping details.</p>
            <div className={classes.inputfirstlast}>
                <input  type="text" name="name" placeholder="First Name" maxLength={50} autoFocus={true} required />

                <input type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required />
            </div>
                <Input type="email" name="email" id="email" required={true} placeholder="Email" maxLength={62}/>

                <input onInput={onInputHandler} className={classes.input} type="text" name="Phone" id="Phone" required placeholder="Phone Number" maxLength={14}/>

                <input className={classes.input} type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <input className={classes.input} type="text" name="City" id="City" required placeholder="City" maxLength={35}/>

                <select className={classes.select} name="country" id="Country" onChange={onChangeSelectHandler} aria-label="Please select your country" defaultValue="Please select your country" required>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="AE">United Arab Emirates</option>
                <option value="CA">Canada</option>
                <option value="MX">Mexico</option>
                <option value="AU">Australia</option>
                <option value="JP">Japan</option>
                <option value="AT">Austria</option>
                <option value="BE">Belgium</option>
                <option value="FR">France</option>
                <option value="BG">Bulgaria</option>
                <option value="HR">Croatia</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="EE">Estonia</option>
                <option value="FI">Finland</option>
                <option value="DE">Germany</option>
                <option value="GR">Greece</option>
                <option value="HU">Hungary</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="LV">Latvia</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MT">Malta</option>
                <option value="NL">Netherlands</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="RO">Romania</option>
                <option value="SK">Slovakia</option>
                <option value="ES">Spain</option>
                <option value="SE">Sweden</option>
                <option value="IS">Iceland</option>
                <option value="LI">Liechtenstein</option>
                <option value="NO">Norway</option>
                <option value="CH">Switzerland</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CV">Cabo Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, The Democratic Republic of The</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'ivoire</option>
                <option value="CU">Cuba</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="GF">French Guiana"</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="JM">Jamaica</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN	">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and The Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia and Montenegro"</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa"</option>
                <option value="GS">South Georgia and The South Sandwich Islands</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-leste</option>
                <option value="TG">Togo</option>
                <option value="TG">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.S</option>
                <option value="WF">Vallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
                </select>

                <input onInput={onInputHandler} className={classes.input}  type="text" id="zipCode" placeholder="ZIP Code" maxLength={12} required/>

                <select className={classes.select} name="state" id="stateSelect" aria-label="Please select your state" required>
                <option value="">Select your state</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="NY">New York</option>
                <option value="PA">Pennsylvania</option>
                <option value="IL">Illinois</option>
                <option value="OH">Ohio</option>
                <option value="GA">Georgia</option>
                <option value="NC">North Carolina</option>
                <option value="MI">Michigan</option>
                <option value="NJ">New Jersey</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="TN">Tennessee</option>
                <option value="MA">Massachusetts</option>
                <option value="IN">Indiana</option>
                <option value="MO">Missouri</option>
                <option value="MD">Maryland</option>
                <option value="WI">Wisconsin</option>
                <option value="CO">Colorado</option>
                <option value="MN">Minnesota</option>
                <option value="SC">South Carolina</option>
                <option value="AL">Alabama</option>
                <option value="LA">Louisiana</option>
                <option value="KY">Kentucky</option>
                <option value="OR">Oregon</option>
                <option value="OK">Oklahoma</option>
                <option value="CT">Connecticut</option>
                <option value="UT">Utah</option>
                <option value="IA">Iowa</option>
                <option value="PR">Puerto Rico</option>
                <option value="NV">Nevada</option>
                <option value="AR">Arkansas</option>
                <option value="KS">Kansas</option>
                <option value="MS">Mississippi</option>
                <option value="NM">New Mexico</option>
                <option value="NE">Nebraska</option>
                <option value="ID">Idaho</option>
                <option value="WV">West Virginia</option>
                <option value="HI">Hawaii</option>
                <option value="NH">New Hampshire</option>
                <option value="ME">Maine</option>
                <option value="MT">Montana</option>
                <option value="RI">Rhode Island</option>
                <option value="DE">Delaware</option>
                <option value="SD">South Dakota</option>
                <option value="ND	">North Dakota</option>
                <option value="WA">Washington</option>
                <option value="AK">Alaska</option>
                <option value="DC">District of Columbia</option>
                <option value="WY">Wyoming</option>
                <option value="GU">Guam</option>
                <option value="VI">U.S. Virgin Islands</option>
                <option value="AS">American Samoa</option>
                <option value="MP">Northern Mariana Islands</option>
                </select>

                <select className={classes.select} id="CanadianProvinces" hidden aria-label="Please select your province">
                <option value="">Select your province</option>
                <option value="ON">Ontario</option>
                <option value="QC">Quebec</option>
                <option value="NS">Nova Scotia</option>
                <option value="NB">New Brunswick</option>
                <option value="NB">Manitoba</option>
                <option value="BC">British Columbia</option>
                <option value="PE">Prince Edward Island</option>
                <option value="AB">Alberta</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="YT">Yukon</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                </select>

                <input type="submit" id={classes.submit} value="Submit Order" />
            </form>
        </div>
        </>
    );
};

export default OrderForm;