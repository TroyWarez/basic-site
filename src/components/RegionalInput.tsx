import { ChangeEvent } from "react";


export default function RegionalInput() {
  function ChangeHandler(event : ChangeEvent) {
    const stateInputElement = document.getElementById("stateInput");
    if (stateInputElement) {
      switch (event?.target?.value)
      {
        case "Canada":
          {
            stateInputElement.setAttribute("list", "CanadaProvinces");
            break;
          }
        case "United States":
          {
            stateInputElement.setAttribute("list", "US States");
            break;
          }
          default:
          {
            stateInputElement.removeAttribute("list");
            break;
          }
      }
    }

  }
  return (
    <>
    <label htmlFor="Country"> Country </label>
    <input list="country" name="country" id="Country" onChange={ChangeHandler} required />
    <datalist id="country"> 
    <option value="United States" />
    <option value="United Kingdom" />
    <option value="United Arab Emirates" />
    <option value="Canada" />
    <option value="Mexico" />
    <option value="Australia" />
    <option value="Japan" />
    <option value="Austria" /> 
    <option value="Belgium" />
    <option value="France" />
    <option value="Bulgaria" />
    <option value="Croatia" />
    <option value="Republic of Cyprus" />
    <option value="Czech Republic" />
    <option value="Denmark" />
    <option value="Estonia" />
    <option value="Finland" />
    <option value="Germany" />
    <option value="Greece" />
    <option value="Hungary" />
    <option value="Ireland" />
    <option value="Israel" />
    <option value="Italy" />
    <option value="Latvia" />
    <option value="Lithuania" />
    <option value="Luxembourg" />
    <option value="Malta" />
    <option value="Netherlands" />
    <option value="Poland" />
    <option value="Portugal" />
    <option value="Romania" />
    <option value="Slovakia" />
    <option value="Spain" />
    <option value="Sweden" />
    <option value="Iceland" />
    <option value="Liechtenstein" />
    <option value="Norway" />
    <option value="Switzerland" />
    <option value="Albania" />
    <option value="Algeria" />
    <option value="American Samoa" />
    <option value="Andorra" />
    <option value="Angola" />
    <option value="Anguilla" />
    <option value="Antigua and Barbuda" />
    <option value="Argentina" />
    <option value="Armenia" />
    <option value="Aruba" />
    <option value="Azerbaijan" />
    <option value="Bahamas" />
    <option value="Bahrain" />
    <option value="Bangladesh" />
    <option value="Barbados" />
    <option value="Belarus" />
    <option value="Belize" />
    <option value="Benin" />
    <option value="Bermuda" />
    <option value="Bhutan" />
    <option value="Bolivia" />
    <option value="Bosnia and Herzegovina" />
    <option value="Botswana" />
    <option value="Bouvet Island" />
    <option value="Brazil" />
    <option value="British Indian Ocean Territory" />
    <option value="Brunei Darussalam" />
    <option value="Burkina Faso" />
    <option value="Burundi" />
    <option value="Cambodia" />
    <option value="Cameroon" />
    <option value="Cape Verde" />
    <option value="Cayman Islands" />
    <option value="Central African Republic" />
    <option value="Chad" />
    <option value="Chile" />
    <option value="China" />
    <option value="Christmas Island" />
    <option value="Cocos (Keeling) Islands" />
    <option value="Colombia" />
    <option value="Comoros" />
    <option value="Congo" />
    <option value="Congo, The Democratic Republic of The" />
    <option value="Cook Islands" />
    <option value="Costa Rica" />
    <option value="Cote D'ivoire" />
    <option value="Cuba" />
    <option value="Djibouti" />
    <option value="Dominica" />
    <option value="Dominican Republic" />
    <option value="Ecuador" />
    <option value="Egypt" />
    <option value="El Salvador" />
    <option value="Equatorial Guinea" />
    <option value="Eritrea" />
    <option value="Ethiopia" />
    <option value="Falkland Islands (Malvinas)" />
    <option value="Faroe Islands" />
    <option value="Fiji" />
    <option value="French Guiana" />
    <option value="French Polynesia" />
    <option value="French Southern Territories" />
    <option value="Gabon" />
    <option value="Gambia" />
    <option value="Georgia" />
    <option value="Ghana" />
    <option value="Gibraltar" />
    <option value="Greenland" />
    <option value="Grenada" />
    <option value="Guadeloupe" />
    <option value="Guam" />
    <option value="Guatemala" />
    <option value="Guinea" />
    <option value="Guinea-bissau" />
    <option value="Guyana" />
    <option value="Haiti" />
    <option value="Heard Island and Mcdonald Islands" />
    <option value="Holy See (Vatican City State)" />
    <option value="Honduras" />
    <option value="Hong Kong" />
    <option value="India" />
    <option value="Indonesia" />
    <option value="Iran, Islamic Republic of" />
    <option value="Iraq" />
    <option value="Jamaica" />
    <option value="Jordan" />
    <option value="Kazakhstan" />
    <option value="Kenya" />
    <option value="Kiribati" />
    <option value="Korea, Democratic People's Republic of" />
    <option value="Korea, Republic of" />
    <option value="Kuwait" />
    <option value="Kyrgyzstan" />
    <option value="Lao People's Democratic Republic" />
    <option value="Lebanon" />
    <option value="Lesotho" />
    <option value="Liberia" />
    <option value="Libyan Arab Jamahiriya" />
    <option value="Macao" />
    <option value="Macedonia, The Former Yugoslav Republic of" />
    <option value="Madagascar" />
    <option value="Malawi" />
    <option value="Malaysia" />
    <option value="Maldives" />
    <option value="Mali" />
    <option value="Marshall Islands" />
    <option value="Martinique" />
    <option value="Mauritania" />
    <option value="Mauritius" />
    <option value="Mayotte" />
    <option value="Micronesia, Federated States of" />
    <option value="Moldova, Republic of" />
    <option value="Monaco" />
    <option value="Mongolia" />
    <option value="Montserrat" />
    <option value="Morocco" />
    <option value="Mozambique" />
    <option value="Myanmar" />
    <option value="Netherlands Antilles" />
    <option value="Namibia" />
    <option value="Nauru" />
    <option value="Nepal" />
    <option value="New Caledonia" />
    <option value="New Zealand" />
    <option value="Nicaragua" />
    <option value="Niger" />
    <option value="Nigeria" />
    <option value="Niue" />
    <option value="Norfolk Island" />
    <option value="Northern Mariana Islands" />
    <option value="Oman" />
    <option value="Pakistan" />
    <option value="Palau" />
    <option value="Palestinian Territory, Occupied" />
    <option value="Panama" />
    <option value="Papua New Guinea" />
    <option value="Paraguay" />
    <option value="Peru" />
    <option value="Philippines" />
    <option value="Pitcairn" />
    <option value="Puerto Rico" />
    <option value="Qatar" />
    <option value="Reunion" />
    <option value="Russian Federation" />
    <option value="Rwanda" />
    <option value="Saint Helena" />
    <option value="Saint Kitts and Nevis" />
    <option value="Saint Lucia" />
    <option value="Saint Pierre and Miquelon" />
    <option value="Saint Vincent and The Grenadines" />
    <option value="Samoa" />
    <option value="San Marino" />
    <option value="Sao Tome and Principe" />
    <option value="Saudi Arabia" />
    <option value="Senegal" />
    <option value="Serbia and Montenegro" />
    <option value="Seychelles" />
    <option value="Sierra Leone" />
    <option value="Singapore" />
    <option value="Solomon Islands" />
    <option value="Somalia" />
    <option value="South Africa" />
    <option value="South Georgia and The South Sandwich Islands" />
    <option value="Sri Lanka" />
    <option value="Sudan" />
    <option value="Suriname" />
    <option value="Svalbard and Jan Mayen" />
    <option value="Swaziland" />
    <option value="Syrian Arab Republic" />
    <option value="Taiwan, Province of China" />
    <option value="Tajikistan" />
    <option value="Tanzania, United Republic of" />
    <option value="Thailand" />
    <option value="Timor-leste" />
    <option value="Togo" />
    <option value="Tokelau" />
    <option value="Tonga" />
    <option value="Trinidad and Tobago" />
    <option value="Tunisia" />
    <option value="Turkey" />
    <option value="Turkmenistan" />
    <option value="Turks and Caicos Islands" />
    <option value="Tuvalu" />
    <option value="Uganda" />
    <option value="Ukraine" />
    <option value="United States Minor Outlying Islands" />
    <option value="Uruguay" />
    <option value="Uzbekistan" />
    <option value="Vanuatu" />
    <option value="Venezuela" />
    <option value="Viet Nam" />
    <option value="Virgin Islands, British" />
    <option value="Virgin Islands, U.S" />
    <option value="Wallis and Futuna" />
    <option value="Western Sahara" />
    <option value="Yemen" />
    <option value="Zambia" />
    <option value="Zimbabwe" />
    </datalist>

    <label htmlFor="ZIP Code"> ZIP / Postal Code </label>
    <input type="text" name="ZIP Code" id="ZIP Code" maxLength={12} required/>


    <label htmlFor="stateInput"> State / province </label>
    <input name="state" id="stateInput" required/>


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