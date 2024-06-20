
export default function RegionalInput() {
  function ChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const stateInputElement =  document.getElementById("stateInput") as HTMLInputElement;
    const ZipCodeInputElement = document.getElementById("zipCode") as HTMLInputElement;
    if (stateInputElement && ZipCodeInputElement) {
      ZipCodeInputElement.value = '';
      stateInputElement.value = '';
      switch (event?.target?.value)
      {
        case 'CA':
          {
            stateInputElement.setAttribute("list", "CanadaProvinces");
            stateInputElement.setAttribute("placeholder", "Province");
            ZipCodeInputElement.setAttribute("placeholder", "Postal Code");
            break;
          }
        case 'US':
          {
            stateInputElement.setAttribute("list", "US States");
            stateInputElement.setAttribute("placeholder", "State");
            ZipCodeInputElement.setAttribute("placeholder", "ZIP Code");
            break;
          }
          default:
          {
            stateInputElement.removeAttribute("list");
            stateInputElement.setAttribute("placeholder", "Province");
            ZipCodeInputElement.setAttribute("placeholder", "Postal Code");
            break;
          }
      }
    }

  }
  return (
    <>
    <select name="country" id="Country" onChange={ChangeHandler} aria-label="Please select your country" defaultValue="Please select your country" required>
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

    <input type="text" id="zipCode" placeholder="ZIP Code" maxLength={12} required/>

    <input name="state" id="stateInput" placeholder="State" required/>


    <datalist id="US States">
    <option value="California"></option>
    <option value="Texas"></option>
    <option value="Florida"></option>
    <option value="New York"></option>
    <option value="Pennsylvania"></option>
    <option value="Illinois"></option>
    <option value="Ohio"></option>
    <option value="Georgia"></option>
    <option value="North Carolina"></option>
    <option value="Michigan"></option>
    <option value="New Jersey"></option>
    <option value="Virginia"></option>
    <option value="Washington"></option>
    <option value="Tennessee"></option>
    <option value="Massachusetts"></option>
    <option value="Indiana"></option>
    <option value="Missouri"></option>
    <option value="Maryland"></option>
    <option value="Wisconsin"></option>
    <option value="Colorado"></option>
    <option value="Minnesota"></option>
    <option value="South Carolina"></option>
    <option value="Alabama"></option>
    <option value="Louisiana"></option>
    <option value="Kentucky"></option>
    <option value="Oregon"></option>
    <option value="Oklahoma"></option>
    <option value="Connecticut"></option>
    <option value="Utah"></option>
    <option value="Iowa"></option>
    <option value="Puerto Rico"></option>
    <option value="Nevada"></option>
    <option value="Arkansas"></option>
    <option value="Kansas"></option>
    <option value="Mississippi"></option>
    <option value="New Mexico"></option>
    <option value="Nebraska"></option>
    <option value="Idaho"></option>
    <option value="West Virginia"></option>
    <option value="Hawaii"></option>
    <option value="New Hampshire"></option>
    <option value="Maine"></option>
    <option value="Montana"></option>
    <option value="Rhode Island"></option>
    <option value="Delaware"></option>
    <option value="South Dakota"></option>
    <option value="North Dakota"></option>
    <option value="Washington"></option>
    <option value="Alaska"></option>
    <option value="District of Columbia"></option>
    <option value="Wyoming"></option>
    <option value="Guam"></option>
    <option value=" U.S. Virgin Islands"></option>
    <option value="American Samoa"></option>
    <option value="Northern Mariana Islands"></option>
    </datalist>

    <datalist id="CanadaProvinces">
    <option value="Ontario"></option>
    <option value="Quebec"></option>
    <option value="Nova Scotia"></option>
    <option value="New Brunswick"></option>
    <option value="Manitoba"></option>
    <option value="British Columbia"></option>
    <option value="Prince Edward Island"></option>
    <option value="Alberta"></option>
    <option value="Newfoundland and Labrador"></option>
    <option value="Yukon"></option>
    <option value="Northwest Territories"></option>
    <option value="Nunavut"></option>
    </datalist>
    </>
  )
}