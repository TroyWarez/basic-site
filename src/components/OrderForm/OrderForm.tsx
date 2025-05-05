import classes from "./OrderForm.module.css"
import CheckoutClasses from "../CheckoutCart/CheckoutCart.module.css"
import Cartclasses from "../ShoppingCart/ShoppingCart.module.css"
import GuestLoginClasses from "../GuestLogin/GuestLogin.module.css"
import FormInput from "../FormInput/FormInput.tsx"
import SelectMenu from "../SelectMenu/SelectMenu.tsx";
import SelectMenuOption from "../../models/selectMenuOption.tsx";
import Address from "../../models/ShippingAddress.tsx";
import { Link } from "react-router-dom";
import { useState } from "react"
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
      const getDeilveryDate = () => {
        return `Delivered between ${new Date(Date.now() + 464400000).toDateString().slice(0, 3)},
          ${new Date(Date.now() + 464400000).getDate()}
          ${new Date(Date.now() + 464400000).toDateString().replace(/^\S+\s/,'').slice(0, 3)} and ${new Date(Date.now() + 982800000).toDateString().slice(0, 3)},
          ${new Date(Date.now() + 982800000).getDate()}
          ${new Date(Date.now() + 982800000).toDateString().replace(/^\S+\s/,'').slice(0, 3)} `;
      }

    const onInput = (event : React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.value.length === 1)
      {
        event.target.value = event.target.value.toUpperCase();
      }
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
                event.target.value = event.target.value.toUpperCase();
                event.target.value = event.target.value.replace(' ', '');
                if(event.target.value !== '')
                  {
                    let CurrentChar = event.target.value.slice(-1);
                    if (event.target.value.length % 2){
                      CurrentChar = CurrentChar.replace(/([\d0-9:./()\-\s])/g, "");
                    }
                    else{
                      CurrentChar = CurrentChar.replace(/([^a-z0-9:./()\-\s])/g, "");
                      
                    }
                    console.log(CurrentChar);
                    if (CurrentChar === ''){
                    event.target.value = `${event.target.value.slice(0, event.target.value.length - 1)}${CurrentChar}`;
                    }
                  }

                
                if (event.target.value.length > 3 && event.target.value[3] !== ' ')
                  {
                    event.target.value = `${event.target.value.slice(0, 3)} ${event.target.value.slice(3, event.target.value.length)}`;
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
            {value: "CA", displayValue: 'Canada'},
          {value: "US", displayValue: 'United States'},
          {value: "GB", displayValue: 'United Kingdom'},
          {value: "AE", displayValue: 'United Arab Emirates'},
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

    const [displayNoneClass, setDisplayNoneClass] = useState('');
    const [displayNoneClassPayment, setDisplayNoneClassPayment] = useState(classes.displayNone);
    const [displayNoneClassPaymentAddr, setDisplayNoneClassPaymentAddr] = useState(classes.displayNone);
    const [Address, setAddress] = useState<Address>();
    const [BillingAddress, setBillingAddress] = useState<Address>();
    return (
      <div>
      <div className={`${classes.containerHeading} ${displayNoneClass}`}>
        <b>Continue to pay below</b>
        <p>We accept all major credit/debit cards</p>
      </div>
      <div className={`${classes.form} ${displayNoneClass}`}>
      <div className={CheckoutClasses.CheckoutCartTitle}>
            <h2 className={CheckoutClasses.p}>Delivery Method</h2>
      </div> 
        <div className={`${classes.containerHeading} ${classes.deliveryText}`}>
          <b>STANDARD Delivery: Free</b>
          <p>{getDeilveryDate()}</p>
        </div>
        </div>
        <form className={classes.form}  autoComplete="on" onSubmit={
          (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = event.currentTarget;
            if (form.checkValidity()) {
              console.log("Form is valid and ready for submission.");
              setDisplayNoneClass(classes.displayNone);
              setDisplayNoneClassPayment('');
              setAddress({ firstName: form.firstname.value, lastName: form.lastname.value,
                 residentialAddress: form.address.value,
                  ExtraInfomation: form["additional-information"].value,
                   cityName: form.City.value, PostalCode: form["Postal Code"].value,
                    State: (form.stateSelect.value !== 'Please select your state') ? form.stateSelect.value: form.provincesSelect.value,
                    countryName: CountryList[0].displayValue,
                     email: form.email.value, phoneNumber: `(+1) ${form.phoneNumber.value}`,
                      promoEmails: form.promo_emails.checked,
                      orderedItems: [] });
                      setBillingAddress(Address);
            } else {
              console.log("Form is invalid. Please check the fields.");
            }
          }
        }>
            <div className={CheckoutClasses.CheckoutCartTitle}>
              <div className={classes.editContainer}>
                <h2 className={CheckoutClasses.p}><b hidden={(displayNoneClass === '') ? true : false}>✔ </b>Delivery Address</h2>
                <button className={classes.editButton} hidden={(displayNoneClass === '') ? true : false} type='button'
                onClick={() => {
                  setDisplayNoneClass('');
                }}>{'< Edit'}</button>
            </div>
        </div>
        <div className={displayNoneClass}>
        <div className={classes.inputSplitContainer}>
                <FormInput className={classes.inputfirstlast} type="text" pattern="[A-Za-z]+" minlength={1} maxlength={50} name="firstname" label="First Name" title="First Name" onInput={onInput} error_message='This is a mandatory field' message='' validation_message='This entry contains invalid characters. Please try again' tooShort_message='' required={true} autoComplete="given-name" />
                <FormInput className={classes.inputfirstlast} type="text" pattern="[A-Za-z]+" minlength={1} maxlength={50} name="lastname" id="lastname" label="Last Name" title="Last Name" maxLength={50} onInput={onInput} error_message='This is a mandatory field' message='' validation_message='This entry contains invalid characters. Please try again' tooShort_message='' required={true} autoComplete="family-name"/>
        </div>
                <FormInput type="text" name="address" id="address" pattern="[A-Za-z0-9'\.\-\s\,]+" required={true} onInput={onInput} label="Address" title="Address" error_message='This is a mandatory field' message='Start typing a street address' tooShort_message='This is too short, minimum 5 allowed' validation_message='This entry contains invalid characters. Please try again' minlength={5} maxLength={95}/>
                <FormInput type="text" name="additional-information"  id="Additional-Information" label="Additional Information (Optional)" error_message='' message='' tooShort_message='' validation_message='' title="Additional Information (Optional)" required={false} onInput={onInput} minlength={5} maxLength={95}/>
            <div className={classes.inputSplitContainer}>
                <FormInput className={classes.inputfirstlast} type="text" name="City" id="City" error_message='This is a mandatory field' message='' tooShort_message='' validation_message='This entry contains invalid characters. Please try again' required={true} onInput={onInput} label="City" title="City" maxLength={35}/>

                <FormInput className={classes.inputfirstlast} pattern="[ABCEGHJKLMNPRSTVXY]+[0-9]+[A-Z]+[ ]+[0-9]+[A-Z]+[0-9]" inputMode="text" type="text" name="Postal Code" id="zipCode" label="Postal Code" title="Postal Code" minlength={1} maxLength={9} onInput={onInput} error_message='This is a mandatory field' message='' tooShort_message='' validation_message='The Postal Code format is invalid. (Expected: LNL NLN)' required={true}/>
            </div>

                <SelectMenu options={StateList.map((state) => ({
                  value: state.value,
                  displayValue: state.displayValue,
                  }))} name="stateSelect" aria-label="Please select your state" label="State" required={true} hidden={true} placeholder="Please select your state" title="State menu, please select your state"/>
                <div>
                <SelectMenu options={ProvinceList.map((province) => ({
                  value: province.value,
                  displayValue: province.displayValue,
                  }))} name="provincesSelect" aria-label="Please select your province" label="Province/Territory" required={true} title="Province menu, please select your province"/>
                </div>
                <input className={`${GuestLoginClasses.formInputRadio} ${classes.radioLabel}`} type="checkbox" title="Save this address for my next purchase." required={false} id="save_address"/>
                  <label className={classes.formRadioLabel} htmlFor={`save_address ${classes.formInputButton}`}>{' Save this address for my next purchase.'}</label>

                <div>
                <SelectMenu className={classes.countrySelect} onChange={onChangeSelectHandler} options={CountryList.map((country) => ({
                  value: country.value,
                  displayValue: country.displayValue,
                  }))} name="country" aria-label="Please select your country" label="Country" disabled={true} required={true} value={'Canada'} title="Country menu, please select your country"/>
                </div>
                  <div>
                <div className={classes.inputSplitContainer}>
                  <FormInput className={classes.inputfirstlast} inputMode="email" type="email" name="email" id="email" pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?" onInput={onInput} error_message='This is a mandatory field' message='' validation_message='The email format is invalid' tooShort_message='' required={true}label="Email" title="Email" maxLength={62}/>

                  <FormInput className={classes.inputfirstlast} onInput={onInput} inputMode="tel" type="tel" name="Phone" id="phoneNumber" pattern="[0-9'\(\)\-\s]+" error_message='This is a mandatory field' message='We need your phone number to assist delivery' validation_message='This is not a valid number' tooShort_message='' placeholder='(506) 555-5678' required={true} label="Phone Number" title="Phone Number" maxLength={28}/>
                </div>
                <input className={`${GuestLoginClasses.formInputRadio} ${classes.radioLabel}`} type="checkbox" title="Subscribe to the Store's exclusive online offers via email"required={false} id="promo_emails"/>
                  <label className={classes.formRadioLabel} htmlFor={`promo_emails ${classes.formInputButton}`}>{` Subscribe to the Store's exclusive online offers via email`}</label>
                <div className={classes.pPrivacy}>
                  <p>Please note, by continuing with checkout we will process your personal data in accordance with its Data Privacy Statement. You can read about how and why we processes personal data <Link to='/'>here</Link>.</p>
                </div>
                <FormInput type="submit" name="submit" className={`${Cartclasses.buttonSignIn} ${GuestLoginClasses.button}`} id={classes.submit} required={true} error_message='' message='' validation_message='' tooShort_message='' value="Continue to payment"/>
            </div>
        </div>
        <div className={classes.bAddress} hidden={(displayNoneClass === '') ? true : false}>
            <b className={classes.b}>Shipping Address</b>
        <br/>
        <p className={classes.b}>{(Address) ? `${Address.firstName} ${Address.lastName}` : ''}</p>
        <p className={classes.b}>{(Address) ? Address.residentialAddress : ''}</p>
        <p className={classes.b}>{(Address) ? `${Address.cityName}, ${Address.PostalCode}` : ''}</p>
        <p className={classes.b}>{(Address) ? Address.State : ''}</p>
        <p className={classes.b}>{(Address) ? Address.countryName : ''}</p>
        <p className={classes.b}>{(Address) ? Address.email : ''}</p>
        <p className={classes.b}>{(Address) ? Address.phoneNumber : ''}</p>
        <br/>

        <b className={classes.b}>STANDARD Delivery<br/><b className={classes.b}>Free</b></b>
        <p className={classes.b}>{getDeilveryDate()}</p>
        </div>
        </form>
          <div className={`${classes.form} ${classes.payment}`}>
          <div className={CheckoutClasses.CheckoutCartTitle}>
            <h2 className={CheckoutClasses.p}>Payment</h2>
          </div>
          <input className={`${GuestLoginClasses.formInputRadio} ${classes.radioLabel}`} name="billingCheckbox" form="paymentAddressForm" type="checkbox" title="Billing address the same as delivery address" hidden={(displayNoneClass === '') ? true : false} defaultChecked={true} required={false} id="save_address_payment" 
        onChange={(e) => {
          const form = e.currentTarget.form;
          if (e.target.checked && form && Address) {
            setBillingAddress(Address);
            setDisplayNoneClassPayment('');
            form.hidden = true;
            setDisplayNoneClassPaymentAddr('');
          } else if (form) {
            form.firstname.value = '';
            form.lastname.value = '';
            form.address.value = '';
            form["additional-information"].value = '';
            form.City.value = '';
            form.provincesSelect.value = '';
            form["Postal Code"].value = '';
            setDisplayNoneClassPayment('');
            form.hidden = false;
            setDisplayNoneClassPaymentAddr(classes.displayNone);
          }
        }}/>
        <label className={classes.formRadioLabel} htmlFor={`${GuestLoginClasses.formInputRadio} ${classes.radioLabel}`} hidden={(displayNoneClass === '') ? true : false}>Billing address same as delivery address</label>
        <form id="paymentAddressForm" autoComplete="on" className={`${displayNoneClassPayment}`} onSubmit={
          (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = event.currentTarget;
            if (form.checkValidity()) {
              console.log("Billing form is valid and ready for submission.");
              setDisplayNoneClass(`${classes.displayNone}`);
              setBillingAddress({ firstName: form.firstname.value, 
                lastName: form.lastname.value,
                 residentialAddress: form.address.value,
                  ExtraInfomation: form["additional-information"].value,
                   cityName: form.City.value, PostalCode: form["Postal Code"].value,
                    State: (form.stateSelect.value !== 'Please select your state') ? form.stateSelect.value : form.provincesSelect.value,
                    countryName: CountryList[0].displayValue,
                     email: (Address) ? Address.email : '',
                     phoneNumber: (Address) ? Address.phoneNumber : '',
                      promoEmails:  (Address) ? Address.promoEmails : false,
                    orderedItems: [] });
                    form.hidden = true;
                    (form.billingCheckbox as HTMLInputElement).checked = false;
                    setDisplayNoneClassPaymentAddr('');
            } else {
              console.log("Form is invalid. Please check the fields.");
            }
          }
        }>
        <div className={classes.inputSplitContainer}>
                <FormInput className={classes.inputfirstlast} type="text" pattern="[A-Za-z]+" minlength={1} maxlength={50} name="firstname" label="First Name" title="First Name" onInput={onInput} error_message='This is a mandatory field' message='' validation_message='This entry contains invalid characters. Please try again' tooShort_message='' required={true} autoComplete="given-name" />
                <FormInput className={classes.inputfirstlast} type="text" pattern="[A-Za-z]+" minlength={1} maxlength={50} name="lastname" id="lastname" label="Last Name" title="Last Name" maxLength={50} onInput={onInput} error_message='This is a mandatory field' message='' validation_message='This entry contains invalid characters. Please try again' tooShort_message='' required={true} autoComplete="family-name"/>
        </div>
                <FormInput type="text" name="address" id="address" pattern="[A-Za-z0-9'\.\-\s\,]+" required={true} onInput={onInput} label="Address" title="Address" error_message='This is a mandatory field' message='Start typing a street address' tooShort_message='This is too short, minimum 5 allowed' validation_message='This entry contains invalid characters. Please try again' minlength={5} maxLength={95}/>
                <FormInput type="text" name="additional-information"  id="Additional-Information" label="Additional Information (Optional)" error_message='' message='' tooShort_message='' validation_message='' title="Additional Information (Optional)" required={false} onInput={onInput} minlength={5} maxLength={95}/>
            <div className={classes.inputSplitContainer}>
                <FormInput className={classes.inputfirstlast} type="text" name="City" id="City" error_message='This is a mandatory field' message='' tooShort_message='' validation_message='This entry contains invalid characters. Please try again' required={true} onInput={onInput} label="City" title="City" maxLength={35}/>

                <FormInput className={classes.inputfirstlast} pattern="[ABCEGHJKLMNPRSTVXY]+[0-9]+[A-Z]+[ ]+[0-9]+[A-Z]+[0-9]" inputMode="text" type="text" name="Postal Code" id="zipCode" label="Postal Code" title="Postal Code" minlength={1} maxLength={9} onInput={onInput} error_message='This is a mandatory field' message='' tooShort_message='' validation_message='The Postal Code format is invalid. (Expected: LNL NLN)' required={true}/>
            </div>

              <SelectMenu options={StateList.map((state) => ({
                  value: state.value,
                  displayValue: state.displayValue,
                  }))} name="stateSelect" aria-label="Please select your state" label="State" required={true} hidden={true} placeholder="Please select your state" title="State menu, please select your state"/>
                <div>
                <SelectMenu options={ProvinceList.map((province) => ({
                  value: province.value,
                  displayValue: province.displayValue,
                  }))} name="provincesSelect" aria-label="Please select your province" label="Province/Territory" required={true} title="Province menu, please select your province"/>
                </div>

                <div>
                <SelectMenu className={classes.countrySelect} onChange={onChangeSelectHandler} options={CountryList.map((country) => ({
                  value: country.value,
                  displayValue: country.displayValue,
                  }))} name="country" aria-label="Please select your country" label="Country" disabled={true} required={true} value={'Canada'} title="Country menu, please select your country"/>
                </div>
                  <div>
                <FormInput type="submit" name="submit" className={`${Cartclasses.buttonSignIn} ${GuestLoginClasses.button}`} id={classes.submit} required={true} error_message='' message='' validation_message='' tooShort_message='' value="Use this payment address"/>
            </div>
        </form>
        <div className={`${classes.bAddress} ${displayNoneClassPayment} ${displayNoneClassPaymentAddr}`} >
        <b className={classes.b}>{(BillingAddress) ? `${BillingAddress.firstName} ${BillingAddress.lastName}` : ''}</b>
        <p className={classes.b2}>{(BillingAddress) ? BillingAddress.residentialAddress : ''}</p>
        <p className={classes.b2}>{(BillingAddress) ? `${BillingAddress.cityName}, ${BillingAddress.PostalCode}` : ''}</p>
        <p className={classes.b2}>{(BillingAddress) ? BillingAddress.State : ''}</p>
        <p className={classes.b2}>{(BillingAddress) ? BillingAddress.countryName : ''}</p>
        </div>

        <div id={classes.radioContainer} className={`${displayNoneClassPayment} ${displayNoneClassPaymentAddr}`}>
          <input className={`${GuestLoginClasses.formInputRadio} ${classes.radioLabel}`} readOnly={true} checked={true} type="radio" title="Select payment option" required={false} id="payment_option"/>
          <label className={`${classes.formRadioLabel} ${classes.p}`} htmlFor={`payment_option ${GuestLoginClasses.formInputRadio} ${classes.radioLabel}`}>{`${'💳 Card'}`}</label>
        </div>
          <form id={classes.paymentContainer} className={`${displayNoneClassPayment} ${displayNoneClassPaymentAddr}`}>
                  <FormInput onInput={onInput} type="text" inputMode="text" pattern="[A-Za-z]+" name="cardholder" title="Name on card" error_message='Invalid card name' message='' validation_message='Invalid card name' tooShort_message='Invalid card name' required={true} label="Name on card" minLength={2} maxLength={50} />
                  <FormInput onInput={onInput} type="text" inputMode="numeric" pattern="[0-9]+" name="cardnumber" title="Card Number" error_message='Card number is required' message='' validation_message='' tooShort_message='' required={true} label="Card Number" maxLength={19} />
                  <div id={classes.securitycodeBlock}>
                    <div id={classes.securitycodeBlock}>
                    <FormInput type="text" onInput={onInput} inputMode="numeric" title="Expiration date" name="expiredate" error_message='Expiry date is required' message='' validation_message='' tooShort_message='' id={classes.expireDate} required={true} label="Expiration date (MM / YY)" maxLength={5}/>
                    <FormInput type="text" onInput={onInput} inputMode="numeric" title="Security Code" name="cvv" error_message='CVV is required' message='' validation_message='' tooShort_message='' id={classes.securitycode} required={true} label="(CVV)" minLength={3} maxLength={5}/>
                    </div>
                  </div>
            </form>
            <p className={`${classes.pPrivacy} ${classes.noBorder} ${displayNoneClassPayment} ${displayNoneClassPaymentAddr}`}>By clicking Pay now, you agree to the <Link to='/legal'>Terms and Conditions.</Link></p>
            <FormInput className={`${Cartclasses.buttonSignIn} ${GuestLoginClasses.button} ${displayNoneClassPayment} ${displayNoneClassPaymentAddr}`} id={classes.submit} form={classes.paymentContainer} type="submit" name="submit" error_message='' message='' validation_message='' tooShort_message='' required={true} disabled={true} value="Pay now"/>
          </div> 
        </div>
      );
};

export default OrderForm;