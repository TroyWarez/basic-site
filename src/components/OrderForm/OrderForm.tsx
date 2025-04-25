import classes from "./OrderForm.module.css"
import CheckoutClasses from "../CheckoutCart/CheckoutCart.module.css"
import FormInput from "../FormInput/FormInput.tsx"
import SelectMenu from "../SelectMenu/SelectMenu.tsx";
import SelectMenuOption from "../../models/selectMenuOption.tsx";
import CheckoutFooter from "../../components/CheckoutFooter/CheckoutFooter";
const OrderForm = (): JSX.Element => {
    const onChangeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const stateInputElement =  document.getElementsByName("stateSelect")[0];
        const provinceInputElement =  document.getElementsByName("canadianProvincesSelect")[0];
        const ZipCodeInputElement = document.getElementById("zipCode") as HTMLInputElement;
        if (stateInputElement && ZipCodeInputElement && provinceInputElement) {
          ZipCodeInputElement.value = '';
          switch (event?.target?.value)
          {
            case 'CA':
              {
                ZipCodeInputElement.setAttribute("placeholder", "Postal Code");
                ZipCodeInputElement.setAttribute("name", "Postal Code");
                ZipCodeInputElement.setAttribute("maxLength", "32");
                ZipCodeInputElement.setAttribute("inputMode", "text");
                stateInputElement.style.display = "none";
                provinceInputElement.style.display = "inline";
                break;
              }
            case 'US':
              {
                ZipCodeInputElement.setAttribute("placeholder", "ZIP Code");
                ZipCodeInputElement.setAttribute("name", "Postal Code");
                ZipCodeInputElement.setAttribute("maxLength", "12");
                ZipCodeInputElement.setAttribute("inputMode", "text");
                stateInputElement.style.display = "inline";
                provinceInputElement.style.display = "none";
                break;
              }
              default:
              {
                stateInputElement.removeAttribute("list");
                ZipCodeInputElement.setAttribute("placeholder", "");
                ZipCodeInputElement.setAttribute("maxLength", "12");
                stateInputElement.style.display = "none";
                provinceInputElement.style.display = "none";
                break;
              }
          }
        }
    
      }
      const luhnCheck = (input : string) => { // Wikipedia code
        const number = input;
        const digits = number.replace(/\D/g, "").split("").map(Number);
        let sum = 0;
        let isSecond = false;
        for (let i = digits.length - 1; i >= 0; i--) {
          let digit = digits[i];
          if (isSecond) {
            digit *= 2;
            if (digit > 9) {
              digit -= 9;
            }
          }
          sum += digit;
          isSecond = !isSecond;
        }
        return sum % 10 === 0;
      }
    const onInputHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "")
          {
            switch(event.target.inputMode) {
              case "numeric":
                  {
                    if(isNaN(Number(event.target.value)))
                      {
                        event.target.value = event.target.value.replace(/\D/g, "");
                      }
                    break;
                  }
                case "tel":
                    {
                      event.target.value = event.target.value.replace(/[^\d!@$%^`~+\-().\s#*]/g, "");
                      
                      if(event.target.value !== '' && event.target.value.length < 14) {
                        if(event.target.value.length > 2 && (event.target.value.length < 11))
                        {
                          if( event.target.value.length > 2 && event.target.value[0] !== '(' && event.target.value[3] !== ')' ||
                            event.target.value[0] !== '(' && event.target.value[4] !== ')' ) 
                          {
                            event.target.value = `(${event.target.value.slice(0, 3)}) ${event.target.value.slice(3, event.target.value.length)}`;
                          }
                          if ( event.target.value.length > 5 && event.target.value[0] === '(' && event.target.value[4] === ')' && event.target.value[5] !== ' ')
                          {
                            event.target.value = `${event.target.value.slice(0, 5)} ${event.target.value.slice(5, event.target.value.length)}`;
                          }
                          if( event.target.value.length > 9 && event.target.value[0] === '(' && event.target.value[4] === ')' && event.target.value[5] === ' ' && event.target.value[9] !== '-')
                          {
                            event.target.value = `${event.target.value.slice(0, 9)}-${event.target.value.slice(9, event.target.value.length)}`;
                          }
                        }

                      }
                      else if (event.target.value.length > 14)
                      {
                        if(isNaN(Number(event.target.value)))
                          {
                            event.target.value = event.target.value.replace(/\D/g, "");
                          }
                      }
                      break;
                  }
            }
            switch(event.target.name) {
              case "Postal Code": 
              {
                event.target.value.toUpperCase();
                if(event.target.value !== '')
                  {
                    event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
                    if (event.target.value.length > 3 && event.target.value[3] !== ' ')
                    {
                      event.target.value = `${event.target.value.slice(0, 3)} ${event.target.value.slice(3, event.target.value.length)}`;
                    }
                  }
                break;
              }
            case "Card number":
                {
                  if(!luhnCheck(event.target.value) && event.target.value.length === 16)
                  {
                    event.target.classList.add(classes["input-error"]);
                  }
                  else if (event.target.classList.length > 0)
                  {
                    event.target.classList.remove(classes["input-error"]);
                  }
                  
                  if( event.target.value.length > 4 && event.target.value[4] !== ' ') 
                  {
                    event.target.value = `${event.target.value.slice(0, 4)} ${event.target.value.slice(4, event.target.value.length)}`;
                  }
                  if( event.target.value.length > 9 && event.target.value[9] !== ' ') 
                    {
                      event.target.value = `${event.target.value.slice(0, 9)} ${event.target.value.slice(9, event.target.value.length)}`;
                    }
                  if( event.target.value.length > 14 && event.target.value[14] !== ' ') 
                  {
                    event.target.value = `${event.target.value.slice(0, 14)} ${event.target.value.slice(14, event.target.value.length)}`;
                  }
                  break;
                }
              case "Expiration date (MM / YY)": 
                {
                  event.target.value.toUpperCase();
                  if(event.target.value !== '')
                    {
                      event.target.value = event.target.value.toUpperCase().replace(/([^A-Z0-9:./()\-\s])/g, "");
                      if (event.target.value.length > 3 && event.target.value[3] !== ' ')
                      {
                        event.target.value = `${event.target.value.slice(0, 2)}/${event.target.value.slice(2, event.target.value.length)}`;
                      }
                    }
                  break;
                }
          }
        }
        }
    const onBlur = (event : React.FocusEvent<HTMLInputElement>) => {
      event.currentTarget.classList.add(classes["input-error"]);
    }
    const onFocus = (event : React.FocusEvent<HTMLInputElement>) => {
    }
    const StateList: SelectMenuOption[] = [
      {value:'CA', displayValue:'California'},
      {value:'TX', displayValue:'Texas'},
      {value:'FL', displayValue:'Florida'},
      {value:'NY', displayValue:'New York'},
      {value:'PA', displayValue:'Pennsylvania'},
      {value:'IL', displayValue:'Illinois'},
      {value:'OH', displayValue:'Ohio'},
      {value:'GA', displayValue:'Georgia'},
      {value:'NC', displayValue:'North Carolina'},
      {value:'MI', displayValue:'Michigan'},
      {value:'NJ', displayValue:'New Jersey'},
      {value:'VA', displayValue:'Virginia'},
      {value:'TN', displayValue:'Tennessee'},
      {value:'MA', displayValue:'Massachusetts'},
      {value:'IN', displayValue:'Indiana'},
      {value:'MO', displayValue:'Missouri'},
      {value:'MD', displayValue:'Maryland'},
      {value:'WI', displayValue:'Wisconsin'},
      {value:'CO', displayValue:'Colorado'},
      {value:'MN', displayValue:'Minnesota'},
      {value:'SC', displayValue:'South Carolina'},
      {value:'AL', displayValue:'Alabama'},
      {value:'LA', displayValue:'Louisiana'},
      {value:'KY', displayValue:'Kentucky'},
      {value:'OR', displayValue:'Oregon'},
      {value:'OK', displayValue:'Oklahoma'},
      {value:'CT', displayValue:'Connecticut'},
      {value:'UT', displayValue:'Utah'},
      {value:'IA', displayValue:'Iowa'},
      {value:'PR', displayValue:'Puerto Rico'},
      {value:'NV', displayValue:'Nevada'},
      {value:'AR', displayValue:'Arkansas'},
      {value:'KS', displayValue:'Kansas'},
      {value:'MS', displayValue:'Mississippi'},
      {value:'NM', displayValue:'New Mexico'},
      {value:'NE', displayValue:'Nebraska'},
      {value:'ID', displayValue:'Idaho'},
      {value:'WV', displayValue:'West Virginia'},
      {value:'HI', displayValue:'Hawaii'},
      {value:'NH', displayValue:'New Hampshire'},
      {value:'ME', displayValue:'Maine'},
      {value:'MT', displayValue:'Montana'},
      {value:'RI', displayValue:'Rhode Island'},
      {value:'DE', displayValue:'Delaware'},
      {value:'SD', displayValue:'South Dakota'},
      {value:'ND', displayValue:'North Dakota'},
      {value:'WA', displayValue:'Washington'},
      {value:'AK', displayValue:'Alaska'},
      {value:'DC', displayValue:'District of Columbia'},
      {value:'WY', displayValue:'Wyoming'},
      {value:'GU', displayValue:'Guam'},
      {value:'VI', displayValue:'U.S. Virgin Islands'},
      {value:'AS', displayValue:'American Samoa'},
      {value:'MP', displayValue:'Northern Mariana Islands'},
      ];
      
      const CountryList: SelectMenuOption[] = [
      {value: "US", displayValue: 'United States'},
      {value: "GB", displayValue: 'United Kingdom'},
      {value: "AE", displayValue: 'United Arab Emirates'},
      {value: "CA", displayValue: 'Canada'},
      {value: "MX", displayValue: 'Mexico'},
      {value: "AU", displayValue: 'Australia'},
      {value: "JP", displayValue: 'Japan'},
      {value: "AT", displayValue: 'Austria'},
      {value: "BE", displayValue: 'Belgium'},
      {value: "FR", displayValue: 'France'},
      {value: "BG", displayValue: 'Bulgaria'},
      {value: "HR", displayValue: 'Croatia'},
      {value: "CY", displayValue: 'Cyprus'},
      {value: "CZ", displayValue: 'Czech Republic'},
      {value: "DK", displayValue: 'Denmark'},
      {value: "EE", displayValue: 'Estonia'},
      {value: "FI", displayValue: 'Finland'},
      {value: "DE", displayValue: 'Germany'},
      {value: "GR", displayValue: 'Greece'},
      {value: "HU", displayValue: 'Hungary'},
      {value: "IE", displayValue: 'Ireland'},
      {value: "IL", displayValue: 'Israel'},
      {value: "IT", displayValue: 'Italy'},
      {value: "LV", displayValue: 'Latvia'},
      {value: "LT", displayValue: 'Lithuania'},
      {value: "LU", displayValue: 'Luxembourg'},
      {value: "MT", displayValue: 'Malta'},
      {value: "NL", displayValue: 'Netherlands'},
      {value: "PL", displayValue: 'Poland'},
      {value: "PT", displayValue: 'Portugal'},
      {value: "RO", displayValue: 'Romania'},
      {value: "SK", displayValue: 'Slovakia'},
      {value: "ES", displayValue: 'Spain'},
      {value: "SE", displayValue: 'Sweden'},
      {value: "IS", displayValue: 'Iceland'},
      {value: "LI", displayValue: 'Liechtenstein'},
      {value: "NO", displayValue: 'Norway'},
      {value: "CH", displayValue: 'Switzerland'},
      {value: "AL", displayValue: 'Albania'},
      {value: "DZ", displayValue: 'Algeria'},
      {value: "AS", displayValue: 'American Samoa'},
      {value: "AD", displayValue: 'Andorra'},
      {value: "AO", displayValue: 'Angola'},
      {value: "AI", displayValue: 'Anguilla'},
      {value: "AG", displayValue: 'Antigua and Barbuda'},
      {value: "AR", displayValue: 'Argentina'},
      {value: "AM", displayValue: 'Armenia'},
      {value: "AW", displayValue: 'Aruba'},
      {value: "AZ", displayValue: 'Azerbaijan'},
      {value: "BS", displayValue: 'Bahamas'},
      {value: "BH", displayValue: 'Bahrain'},
      {value: "BD", displayValue: 'Bangladesh'},
      {value: "BB", displayValue: 'Barbados'},
      {value: "BY", displayValue: 'Belarus'},
      {value: "BZ", displayValue: 'Belize'},
      {value: "BJ", displayValue: 'Benin'},
      {value: "BM", displayValue: 'Bermuda'},
      {value: "BT", displayValue: 'Bhutan'},
      {value: "BO", displayValue: 'Bolivia'},
      {value: "BA", displayValue: 'Bosnia and Herzegovina'},
      {value: "BW", displayValue: 'Botswana'},
      {value: "BV", displayValue: 'Bouvet Island'},
      {value: "BR", displayValue: 'Brazil'},
      {value: "IO", displayValue: 'British Indian Ocean Territory'},
      {value: "BN", displayValue: 'Brunei Darussalam'},
      {value: "BF", displayValue: 'Burkina Faso'},
      {value: "BI", displayValue: 'Burundi'},
      {value: "KH", displayValue: 'Cambodia'},
      {value: "CM", displayValue: 'Cameroon'},
      {value: "CV", displayValue: 'Cabo Verde'},
      {value: "KY", displayValue: 'Cayman Islands'},
      {value: "CF", displayValue: 'Central African Republic'},
      {value: "TD", displayValue: 'Chad'},
      {value: "CL", displayValue: 'Chile'},
      {value: "CN", displayValue: 'China'},
      {value: "CX", displayValue: 'Christmas Island'},
      {value: "CC", displayValue: 'Cocos (Keeling) Islands'},
      {value: "CO", displayValue: 'Colombia'},
      {value: "KM", displayValue: 'Comoros'},
      {value: "CG", displayValue: 'Congo'},
      {value: "CD", displayValue: 'Congo, The Democratic Republic of The'},
      {value: "CK", displayValue: 'Cook Islands'},
      {value: "CR", displayValue: 'Costa Rica'},
      {value: "CI", displayValue: 'Cote D\'ivoire'},
      {value: "CU", displayValue: 'Cuba'},
      {value: "DJ", displayValue: 'Djibouti'},
      {value: "DM", displayValue: 'Dominica'},
      {value: "DO", displayValue: 'Dominican Republic'},
      {value: "EC", displayValue: 'Ecuador'},
      {value: "EG", displayValue: 'Egypt'},
      {value: "SV", displayValue: 'El Salvador'},
      {value: "GQ", displayValue: 'Equatorial Guinea'},
      {value: "ER", displayValue: 'Eritrea'},
      {value: "ET", displayValue: 'Ethiopia'},
      {value: "FK", displayValue: 'Falkland Islands (Malvinas)'},
      {value: "FO", displayValue: 'Faroe Islands'},
      {value: "FJ", displayValue: 'Fiji'},
      {value: "GF", displayValue: 'French Guiana"'},
      {value: "PF", displayValue: 'French Polynesia'},
      {value: "TF", displayValue: 'French Southern Territories'},
      {value: "GA", displayValue: 'Gabon'},
      {value: "GM", displayValue: 'Gambia'},
      {value: "GE", displayValue: 'Georgia'},
      {value: "GH", displayValue: 'Ghana'},
      {value: "GI", displayValue: 'Gibraltar'},
      {value: "GL", displayValue: 'Greenland'},
      {value: "GD", displayValue: 'Grenada'},
      {value: "GP", displayValue: 'Guadeloupe'},
      {value: "GU", displayValue: 'Guam'},
      {value: "GT", displayValue: 'Guatemala'},
      {value: "GN", displayValue: 'Guinea'},
      {value: "GW", displayValue: 'Guinea-bissau'},
      {value: "GY", displayValue: 'Guyana'},
      {value: "HT", displayValue: 'Haiti'},
      {value: "HM", displayValue: 'Heard Island and Mcdonald Islands'},
      {value: "VA", displayValue: 'Holy See (Vatican City State)'},
      {value: "HN", displayValue: 'Honduras'},
      {value: "HK", displayValue: 'Hong Kong'},
      {value: "IN", displayValue: 'India'},
      {value: "ID", displayValue: 'Indonesia'},
      {value: "IR", displayValue: 'Iran, Islamic Republic of'},
      {value: "IQ", displayValue: 'Iraq'},
      {value: "JM", displayValue: 'Jamaica'},
      {value: "JO", displayValue: 'Jordan'},
      {value: "KZ", displayValue: 'Kazakhstan'},
      {value: "KE", displayValue: 'Kenya'},
      {value: "KI", displayValue: 'Kiribati'},
      {value: "KP", displayValue: 'Korea, Democratic People\'s Republic of'},
      {value: "KR", displayValue: 'Korea, Republic of'},
      {value: "KW", displayValue: 'Kuwait'},
      {value: "KG", displayValue: 'Kyrgyzstan'},
      {value: "LA", displayValue: 'Lao People\'s Democratic Republic'},
      {value: "LB", displayValue: 'Lebanon'},
      {value: "LS", displayValue: 'Lesotho'},
      {value: "LR", displayValue: 'Liberia'},
      {value: "LY", displayValue: 'Libya'},
      {value: "MO", displayValue: 'Macao'},
      {value: "MK", displayValue: 'Macedonia, The Former Yugoslav Republic of'},
      {value: "MG", displayValue: 'Madagascar'},
      {value: "MW", displayValue: 'Malawi'},
      {value: "MY", displayValue: 'Malaysia'},
      {value: "MV", displayValue: 'Maldives'},
      {value: "ML", displayValue: 'Mali'},
      {value: "MH", displayValue: 'Marshall Islands'},
      {value: "MQ", displayValue: 'Martinique'},
      {value: "MR", displayValue: 'Mauritania'},
      {value: "MU", displayValue: 'Mauritius'},
      {value: "YT", displayValue: 'Mayotte'},
      {value: "FM", displayValue: 'Micronesia, Federated States of'},
      {value: "MD", displayValue: 'Moldova, Republic of'},
      {value: "MC", displayValue: 'Monaco'},
      {value: "MN	", displayValue: 'Mongolia'},
      {value: "MS", displayValue: 'Montserrat'},
      {value: "MA", displayValue: 'Morocco'},
      {value: "MZ", displayValue: 'Mozambique'},
      {value: "MM", displayValue: 'Myanmar'},
      {value: "NA", displayValue: 'Namibia'},
      {value: "NR", displayValue: 'Nauru'},
      {value: "Nepal", displayValue: 'Nepal'},
      {value: "NC", displayValue: 'New Caledonia'},
      {value: "NZ", displayValue: 'New Zealand'},
      {value: "NI", displayValue: 'Nicaragua'},
      {value: "NE", displayValue: 'Niger'},
      {value: "NG", displayValue: 'Nigeria'},
      {value: "NU", displayValue: 'Niue'},
      {value: "NF", displayValue: 'Norfolk Island'},
      {value: "MP", displayValue: 'Northern Mariana Islands'},
      {value: "OM", displayValue: 'Oman'},
      {value: "PK", displayValue: 'Pakistan'},
      {value: "PW", displayValue: 'Palau'},
      {value: "PA", displayValue: 'Panama'},
      {value: "PG", displayValue: 'Papua New Guinea'},
      {value: "PY", displayValue: 'Paraguay'},
      {value: "PE", displayValue: 'Peru'},
      {value: "PH", displayValue: 'Philippines'},
      {value: "PN", displayValue: 'Pitcairn'},
      {value: "PR", displayValue: 'Puerto Rico'},
      {value: "QA", displayValue: 'Qatar'},
      {value: "RE", displayValue: 'Reunion'},
      {value: "RU", displayValue: 'Russian Federation'},
      {value: "RW", displayValue: 'Rwanda'},
      {value: "SH", displayValue: 'Saint Helena'},
      {value: "KN", displayValue: 'Saint Kitts and Nevis'},
      {value: "LC", displayValue: 'Saint Lucia'},
      {value: "PM", displayValue: 'Saint Pierre and Miquelon'},
      {value: "VC", displayValue: 'Saint Vincent and The Grenadines'},
      {value: "WS", displayValue: 'Samoa'},
      {value: "SM", displayValue: 'San Marino'},
      {value: "ST", displayValue: 'Sao Tome and Principe'},
      {value: "SA", displayValue: 'Saudi Arabia'},
      {value: "SN", displayValue: 'Senegal'},
      {value: "RS", displayValue: 'Serbia and Montenegro"'},
      {value: "SC", displayValue: 'Seychelles'},
      {value: "SL", displayValue: 'Sierra Leone'},
      {value: "SG", displayValue: 'Singapore'},
      {value: "SB", displayValue: 'Solomon Islands'},
      {value: "SO", displayValue: 'Somalia'},
      {value: "ZA", displayValue: 'South Africa"'},
      {value: "GS", displayValue: 'South Georgia and The South Sandwich Islands'},
      {value: "LK", displayValue: 'Sri Lanka'},
      {value: "SD", displayValue: 'Sudan'},
      {value: "SR", displayValue: 'Suriname'},
      {value: "SJ", displayValue: 'Svalbard and Jan Mayen'},
      {value: "SY", displayValue: 'Syrian Arab Republic'},
      {value: "TW", displayValue: 'Taiwan, Province of China'},
      {value: "TJ", displayValue: 'Tajikistan'},
      {value: "TZ", displayValue: 'Tanzania, United Republic of'},
      {value: "TH", displayValue: 'Thailand'},
      {value: "TL", displayValue: 'Timor-leste'},
      {value: "TG", displayValue: 'Togo'},
      {value: "TK", displayValue: 'Tokelau'},
      {value: "TO", displayValue: 'Tonga'},
      {value: "TT", displayValue: 'Trinidad and Tobago'},
      {value: "TN", displayValue: 'Tunisia'},
      {value: "TR", displayValue: 'Turkey'},
      {value: "TM", displayValue: 'Turkmenistan'},
      {value: "TC", displayValue: 'Turks and Caicos Islands'},
      {value: "TV", displayValue: 'Tuvalu'},
      {value: "UG", displayValue: 'Uganda'},
      {value: "UA", displayValue: 'Ukraine'},
      {value: "UM", displayValue: 'United States Minor Outlying Islands'},
      {value: "UY", displayValue: 'Uruguay'},
      {value: "UZ", displayValue: 'Uzbekistan'},
      {value: "VU", displayValue: 'Vanuatu'},
      {value: "VE", displayValue: 'Venezuela'},
      {value: "VN", displayValue: 'Viet Nam'},
      {value: "VG", displayValue: 'Virgin Islands, British'},
      {value: "VI", displayValue: 'Virgin Islands, U.S'},
      {value: "WF", displayValue: 'Vallis and Futuna'},
      {value: "EH", displayValue: 'Western Sahara'},
      {value: "YE", displayValue: 'Yemen'},
      {value: "ZM", displayValue: 'Zambia'},
      {value: "ZW", displayValue: 'Zimbabwe'},
      ];
      
      const ProvinceList: SelectMenuOption[] = [
      {value: "ON", displayValue: 'Ontario'},
      {value: "QC", displayValue: 'Quebec'},
      {value: "NS", displayValue: 'Nova Scotia'},
      {value: "NB", displayValue: 'New Brunswick'},
      {value: "MB", displayValue: 'Manitoba'},
      {value: "BC", displayValue: 'British Columbia'},
      {value: "PE", displayValue: 'Prince Edward Island'},
      {value: "AB", displayValue: 'Alberta'},
      {value: "NL", displayValue: 'Newfoundland and Labrador'},
      {value: "YT", displayValue: 'Yukon'},
      {value: "NT", displayValue: 'Northwest Territories'},
      {value: "NU", displayValue: 'Nunavut'},
      ];
    return (
        <form className={classes.form} autoComplete="off">
            <div className={CheckoutClasses.CheckoutCartTitle}>
            <h2 className={CheckoutClasses.p}>Delivery Address</h2>
        </div>
            <h3 className={classes.heading}>Shipping Address</h3>
            <p className={classes.p}><span>Please enter your shipping details.</span></p>
            <SelectMenu onChange={onChangeSelectHandler} options={CountryList.map((country) => ({
                  value: country.value,
                  displayValue: country.displayValue,
                  }))} name="country" aria-label="Please select your country" required placeholder="Please select your country" title="Country menu, please select your country"/>
            <div>
                <FormInput className={classes.inputfirstlast} type="text" name="name" placeholder="First Name" maxLength={50} onFocus={onFocus} autoFocus={true} required autoComplete="given-name" />

                <FormInput className={classes.inputfirstlast} type="text" name="name" id="lastname" placeholder="Last Name" maxLength={50} required autoComplete="family-name"/>
            </div>
                <FormInput inputMode="email" type="email" name="email" id="email" required placeholder="Email" maxLength={62}/>

                <FormInput onInput={onInputHandler} inputMode="tel" type="tel" name="Phone" id="Phone" required placeholder="Phone Number" maxLength={28}/>

                <FormInput type="text" name="address" id="address" required placeholder="Address" maxLength={95}/>

                <FormInput type="text" name="City" id="City" required placeholder="City" maxLength={35}/>
              <div hidden={true}>
                <FormInput onInput={onInputHandler} inputMode="numeric" type="text" title="ZIP Code" name="ZIP Code" id="zipCode" placeholder="" maxLength={12} required={true} />
              </div>

                <SelectMenu options={StateList.map((state) => ({
                  value: state.value,
                  displayValue: state.displayValue,
                  }))} name="stateSelect" aria-label="Please select your state" required hidden placeholder="Please select your state" title="State menu, please select your state"/>

                <SelectMenu options={ProvinceList.map((province) => ({
                  value: province.value,
                  displayValue: province.displayValue,
                  }))} name="canadianProvincesSelect" aria-label="Please select your province" required hidden placeholder="Please select your province" title="Province menu, please select your province"/>

                  <div id={classes.paymentContainer}>
                  <h3 id={classes.paymentheading}>Payment</h3>
                  <p id={classes.paymentSubtext} >All transactions are secure and encrypted.</p>
                  <FormInput onInput={onInputHandler} onBlur={onBlur} id={classes.cardnumber} type="text" inputMode="numeric" name="Card number" required placeholder="Card Number" maxLength={19} />
                  <div id={classes.securitycodeBlock}>
                    <FormInput type="text" onInput={onInputHandler} inputMode="numeric" name="Expiration date (MM / YY)" id={classes.expireDate} required placeholder="Expiration date (MM / YY)" maxLength={5}/>
                    <FormInput type="text" onInput={onInputHandler} inputMode="numeric" name="Security Code" id={classes.securitycode} required placeholder="Security Code" maxLength={5}/>
                  </div>

                  <FormInput type="submit" name="submit" id={classes.submit} required value="Pay now"/>
                  <p id={classes.paymentSubtext}><span>By continuing, you agree to the store’s Terms of Service and acknowledge the Privacy Policy.</span></p>
                </div>
                <CheckoutFooter/>
          </form>
        );
};

export default OrderForm;