import React from 'react';

const OrderForm = () => {
    return (
        <>
            <h1>Shipping</h1>
            <p>Please enter your shipping details.</p>
            <form action="" method="get" className="form-example">
                <input type="text" name="name" id="firstname" placeholder="First Name" maxLength={50} autoFocus={true} required />

                <input type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required />

                <input type="email" name="email" id="email" required placeholder="Email" maxLength={62}/>

                <input type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <input type="text" name="City" id="City" required placeholder="City" maxLength={35}/>

                <input list="country" name="country" placeholder="Country" required />

                <input type="text" name="ZIP/Postal Code" id="ZIP/Postal Code" required placeholder="ZIP/Postal Code" maxLength={10}/>

                <input list="" name="state" placeholder="State/Province/Territory" required/>

                <datalist id="country">
                    <option value="United Kingdom" />
                    <option value="United States" />
                    <option value="Canada" />
                    <option value="-Less Common Countries-" />
                    <option value="Afghanistan" />
                    <option value="Albania" />
                    <option value="Algeria" />
                    <option value="American Samoa" />
                    <option value="Andorra" />
                    <option value="Angola" />
                    <option value="Anguilla" />
                    <option value="Antarctica" />
                    <option value="Antigua and Barbuda" />
                    <option value="Argentina" />
                    <option value="Armenia" />
                    <option value="Aruba" />
                    <option value="Australia" />
                    <option value="Austria" />
                    <option value="Azerbaijan" />
                    <option value="Bahamas" />
                    <option value="Bahrain" />
                    <option value="Bangladesh" />
                    <option value="Barbados" />
                    <option value="Belarus" />
                    <option value="Belgium" />
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
                    <option value="Bulgaria" />
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
                    <option value="Croatia" />
                    <option value="Cuba" />
                    <option value="Cyprus" />
                    <option value="Czech Republic" />
                    <option value="Denmark" />
                    <option value="Djibouti" />
                    <option value="Dominica" />
                    <option value="Dominican Republic" />
                    <option value="Ecuador" />
                    <option value="Egypt" />
                    <option value="El Salvador" />
                    <option value="Equatorial Guinea" />
                    <option value="Eritrea" />
                    <option value="Estonia" />
                    <option value="Ethiopia" />
                    <option value="Falkland Islands (Malvinas)" />
                    <option value="Faroe Islands" />
                    <option value="Fiji" />
                    <option value="Finland" />
                    <option value="France" />
                    <option value="French Guiana" />
                    <option value="French Polynesia" />
                    <option value="French Southern Territories" />
                    <option value="Gabon" />
                    <option value="Gambia" />
                    <option value="Georgia" />
                    <option value="Germany" />
                    <option value="Ghana" />
                    <option value="Gibraltar" />
                    <option value="Greece" />
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
                    <option value="Hungary" />
                    <option value="Iceland" />
                    <option value="India" />
                    <option value="Indonesia" />
                    <option value="Iran, Islamic Republic of" />
                    <option value="Iraq" />
                    <option value="Ireland" />
                    <option value="Israel" />
                    <option value="Italy" />
                    <option value="Jamaica" />
                    <option value="Japan" />
                    <option value="Jordan" />
                    <option value="Kazakhstan" />
                    <option value="Kenya" />
                    <option value="Kiribati" />
                    <option value="Korea, Democratic People's Republic of" />
                    <option value="Korea, Republic of" />
                    <option value="Kuwait" />
                    <option value="Kyrgyzstan" />
                    <option value="Lao People's Democratic Republic" />
                    <option value="Latvia" />
                    <option value="Lebanon" />
                    <option value="Lesotho" />
                    <option value="Liberia" />
                    <option value="Libyan Arab Jamahiriya" />
                    <option value="Liechtenstein" />
                    <option value="Lithuania" />
                    <option value="Luxembourg" />
                    <option value="Macao" />
                    <option value="Macedonia, The Former Yugoslav Republic of" />
                    <option value="Madagascar" />
                    <option value="Malawi" />
                    <option value="Malaysia" />
                    <option value="Maldives" />
                    <option value="Mali" />
                    <option value="Malta" />
                    <option value="Marshall Islands" />
                    <option value="Martinique" />
                    <option value="Mauritania" />
                    <option value="Mauritius" />
                    <option value="Mayotte" />
                    <option value="Mexico" />
                    <option value="Micronesia, Federated States of" />
                    <option value="Moldova, Republic of" />
                    <option value="Monaco" />
                    <option value="Mongolia" />
                    <option value="Montserrat" />
                    <option value="Morocco" />
                    <option value="Mozambique" />
                    <option value="Myanmar" />
                    <option value="Namibia" />
                    <option value="Nauru" />
                    <option value="Nepal" />
                    <option value="Netherlands" />
                    <option value="Netherlands Antilles" />
                    <option value="New Caledonia" />
                    <option value="New Zealand" />
                    <option value="Nicaragua" />
                    <option value="Niger" />
                    <option value="Nigeria" />
                    <option value="Niue" />
                    <option value="Norfolk Island" />
                    <option value="Northern Mariana Islands" />
                    <option value="Norway" />
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
                    <option value="Poland" />
                    <option value="Portugal" />
                    <option value="Puerto Rico" />
                    <option value="Qatar" />
                    <option value="Reunion" />
                    <option value="Romania" />
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
                    <option value="Slovakia" />
                    <option value="Slovenia" />
                    <option value="Solomon Islands" />
                    <option value="Somalia" />
                    <option value="South Africa" />
                    <option value="South Georgia and The South Sandwich Islands" />
                    <option value="Spain" />
                    <option value="Sri Lanka" />
                    <option value="Sudan" />
                    <option value="Suriname" />
                    <option value="Svalbard and Jan Mayen" />
                    <option value="Swaziland" />
                    <option value="Sweden" />
                    <option value="Switzerland" />
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
                    <option value="United Arab Emirates" />
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

                <datalist id="statelist">
						<option value="Alabama"></option>
						<option value="Alaska"></option>
						<option value="Arizona"></option>
						<option value="Arkansas"></option>
						<option value="California"></option>
						<option value="Colorado"></option>
						<option value="Connecticut"></option>
						<option value="Delaware"></option>
						<option value="District of Columbia"></option>
						<option value="Florida"></option>
						<option value="Georgia"></option>
						<option value="Hawaii"></option>
						<option value="Idaho"></option>
						<option value="Illinois"></option>
						<option value="Indiana"></option>
						<option value="Iowa"></option>
						<option value="Kansas"></option>
						<option value="Kentucky"></option>
						<option value="Louisiana"></option>
						<option value="Maine"></option>
						<option value="Maryland"></option>
						<option value="Massachusetts"></option>
						<option value="Michigan"></option>
						<option value="Minnesota"></option>
						<option value="Mississippi"></option>
						<option value="Missouri"></option>
						<option value="Montana"></option>
						<option value="Nebraska"></option>
						<option value="Nevada"></option>
						<option value="New Hampshire"></option>
						<option value="New Jersey"></option>
						<option value="New Mexico"></option>
						<option value="New York"></option>
						<option value="North Carolina"></option>
						<option value="North Dakota"></option>
						<option value="Ohio"></option>
						<option value="Oklahoma"></option>
						<option value="Oregon"></option>
						<option value="Pennsylvania"></option>
						<option value="Rhode Island"></option>
						<option value="South Carolina"></option>
						<option value="South Dakota"></option>
						<option value="Tennessee"></option>
						<option value="Texas"></option>
						<option value="Utah"></option>
						<option value="Vermont"></option>
						<option value="Virginia"></option>
						<option value="Washington"></option>
						<option value="West Virginia"></option>
						<option value="Wisconsin"></option>
						<option value="Wyoming"></option>
				</datalist>

                <datalist id="provinceslist">
                    <option value="Ontario"></option>
                    <option value="Quebec"></option>
                    <option value="Nova Scotia"></option>
                    <option value="New Brunswick"></option>
                    <option value="Manitoba"></option>
                    <option value="British Columbia"></option>
                    <option value="Prince Edward Island"></option>
                    <option value="Alberta"></option>
                    <option value="Newfoundland and Labrador"></option>
                    <option value="-Territories-"></option>
                    <option value="Yukon"></option>
                    <option value="Northwest Territories"></option>
                    <option value="Nunavut"></option>
                </datalist>

                <input type="submit" id="submit" value="Submit Order" />
            </form>
        </>
    );
};

export default OrderForm;
  