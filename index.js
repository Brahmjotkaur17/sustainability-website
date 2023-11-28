const form = document.querySelector('form');
const results = document.querySelector('#results');
const addButton = document.querySelector('#add-country');
const chart= d3.select('#chart');
let countryCount = 1;
let Students=0;
// let numTrees=0;

addButton.addEventListener('click', () => {
  countryCount++;
  const countries = document.querySelector('#countries');
  const country = document.createElement('div');
  country.classList.add('country');
  country.innerHTML = `
    <label for="departure${countryCount}">Departure Country:</label>
    <select id="departure${countryCount}" name="departure${countryCount}">
    <option>country</option>
    <option value="KBL">Afghanistan</option>
    <option value="TIA">Albania</option>
    <option value="ALG">Algeria</option>
    <option value="LEU">Andorra</option>
    <option value="LAD">Angola</option>
    <option value="YYT">Antigua & Barbuda</option>
    <option value="EZE">Argentina</option>
    <option value="EVN">Armenia</option>
    <option value="CBR">Australia</option>
    <option value="VIE">Austria</option>
    <option value="GYD">Azerbaijan</option>
    <option value="NAS">Bahamas</option>
    <option value="BAH">Bahrain</option>
    <option value="DAC">Bangladesh</option>
    <option value="BGI">Barbados</option>
    <option value="MSQ">Belarus</option>
    <option value="BRU">Belgium</option>
    <option value="BCV">Belize</option>
    <option value="PBH">Bhutan</option>
    <option value="SRE">Bolivia</option>
    <option value="GBE">Botswana</option>
    <option value="BRB">Brazil</option>
    <option value="BWN">Brunei</option>
    <option value="SOF">Bulgaria</option>
    <option value="OUA">Burkina Faso</option>
    <option value="GID">Burundi</option>
    <option value="PNH">Cambodia</option>
    <option value="YAO">Cameroon</option>
    <option value="YOW">Canada</option>
    <option value="BGF">Central African Republic</option>
    <option value="NDJ">Chad</option>
    <option value="SCL">Chile</option>
    <option value="PEK">China</option>
    <option value="BOG">Colombia</option>
    <option value="HAH">Comoros</option>
    <option value="BZV">Congo - Brazzaville</option>
    <option value="SJC">Costa Rica</option>
    <option value="ASK">Côte d’Ivoire</option>
    <option value="ZAG">Croatia</option>
    <option value="HAV">Cuba</option>
    <option value="LCA">Cyprus</option>
    <option value="PRG">Czechia</option>
    <option value="AAL">Denmark</option>
    <option value="JIB">Djibouti</option>
    <option value="DCF">Dominica</option>
    <option value="SDQ">Dominican Republic</option>
    <option value="UIO">Ecuador</option>
    <option value="CAI">Egypt</option>
    <option value="SAL">El Salvador</option>
    <option value="SSG">Equatorial Guinea</option>
    <option value="ASM">Eritrea</option>
    <option value="TLL">Estonia</option>
    <option value="ADD">Ethiopia</option>
    <option value="SUV">Fiji</option>
    <option value="HEL">Finland</option>
    <option value="CDG">France</option>
    <option value="LBV">Gabon</option>
    <option value="BJL">Gambia</option>
    <option value="TBS">Georgia</option>
    <option value="BER">Germany</option>
    <option value="ACC">Ghana</option>
    <option value="ATH">Greece</option>
    <option value="SGU">Grenada</option>
                                <option value="GUA">Guatemala</option>
                                <option value="CKY">Guinea</option>
                                <option value="GEO">Guyana</option>
                                <option value="PAP">Haiti</option>
                                <option value="FCO">Vatican City</option>
                                <option value="HKG">Hong Kong</option>
                                <option value="BUD">Hungary</option>
                                <option value="RKV">Iceland</option>
                                <option value="DEL">India</option>
                                <option value="CGK">Indonesia</option>
                                <option value="IKA">Iran</option>
                                <option value="BGW">Iraq</option>
                                <option value="DUB">Ireland</option>
                                <option value="JRS">Israel</option>
                                <option value="FCO">Italy</option>
                                <option value="KIN">Jamaica</option>
                                <option value="HND">Japan</option>
                                <option value="JER">Jersey</option>
                                <option value="AMM">Jordan</option>
                                <option value="NQZ">Kazakhstan</option>
                                <option value="WIL">Kenya</option>
                                <option value="TRW">Kiribati</option>
                                <option value="FNJ">North Korea</option>
                                <option value="ICN">South Korea</option>
                                <option value="KWI">Kuwait</option>
                                <option value="FRU">Kyrgyzstan</option>
                                <option value="VTE">Laos</option>
                                <option value="RIX">Latvia</option>
                                <option value="BEY">Lebanon</option>
                                <option value="MSU">Lesotho</option>
                                <option value="LIR">Liberia</option>
                                <option value="TIP">Libya</option>
                                <option value="QVU">Liechtenstein</option>
                                <option value="VNO">Lithuania</option>
                                <option value="LUX">Luxembourg</option>
                                <option value="MFM">Macao</option>
                                <option value="SKP">North Macedonia</option>
                                <option value="TNR">Madagascar</option>
                                <option value="LLW">Malawi</option>
                                <option value="KUL">Malaysia</option>
                                <option value="MLE">Maldives</option>
                                <option value="BKO">Mali</option>
                                <option value="MLA">Malta</option>
                                <option value="MAJ">Marshall Islands</option>
                                <option value="NKC">Mauritania</option>
                                <option value="MRU">Mauritius</option>
                                <option value="MEX">Mexico</option>
                                <option value="PNI">Micronesia</option>
                                <option value="KIV">Moldova</option>
                                <option value="MCM">Monaco</option>
                                <option value="UBN">Mongolia</option>
                                <option value="TGD">Montenegro</option>
                                <option value="RBA">Morocco</option>
                                <option value="MPM">Mozambique</option>
                                <option value="NYT">Myanmar (Burma)</option>
                                <option value="WDH">Namibia</option>
                                <option value="INU">Nauru</option>
                                <option value="KTM">Nepal</option>
                                <option value="AMS">Netherlands</option>
                                <option value="WLG">New Zealand</option>
                                <option value="MGA">Nicaragua</option>
                                <option value="NIM">Niger</option>
                                <option value="ABV">Nigeria</option>
                                <option value="IUE">Niue</option>
                                <option value="OSL">Norway</option>
                                <option value="MCT">Oman</option>
                                <option value="ISB">Pakistan</option>
                                <option value="ROR">Palau</option>
                                <option value="JRS">Palestine</option>
                                <option value="PTY">Panama</option>
                                <option value="POM">Papua New Guinea</option>
                                <option value="ASU">Paraguay</option>
                                <option value="LIM">Peru</option>
                                <option value="MNL">Philippines</option>
                                <option value="WAW">Poland</option>
                                <option value="LIS">Portugal</option>
                                <option value="SJU">Puerto Rico</option>
                                <option value="DOH">Qatar</option>
                                <option value="OTP">Romania</option>
                                <option value="SVO">Russia</option>
                                <option value="KGL">Rwanda</option>
                                <option value="SKB">St. Kitts & Nevis</option>
                                <option value="SLU">St. Lucia</option>
                                <option value="SVD">St. Vincent & Grenadines</option>
                                <option value="APW">Samoa</option>
                                <option value="RMI">San Marino</option>
                                <option value="TMS">São Tomé & Príncipe</option>
                                <option value="RUH">Saudi Arabia</option>
                                <option value="DSS">Senegal</option>
                                <option value="BEG">Serbia</option>
                                <option value="YYJ">Seychelles</option>
                                <option value="FNA">Sierra Leone</option>
                                <option value="SIN">Singapore</option>
                                <option value="BTS">Slovakia</option>
                                <option value="LJU">Slovenia</option>
                                <option value="HIR">Solomon Islands</option>
                                <option value="MGQ">Somalia</option>
                                <option value="BFN">South Africa</option>
                                <option value="JUB">South Sudan</option>
                                <option value="MAD">Spain</option>
                                <option value="CMB">Sri Lanka</option>
                                <option value="KRT">Sudan</option>
                                <option value="PBM">Suriname</option>
                                <option value="ARN">Sweden</option>
                                <option value="BRN">Switzerland</option>
                                <option value="DAM">Syria</option>
                                <option value="TSA">Taiwan</option>
                                <option value="DYU">Tajikistan</option>
                                <option value="DOD">Tanzania</option>
                                <option value="BKK">Thailand</option>
                                <option value="DIL">Timor-Leste</option>
                                <option value="LFW">Togo</option>
                                <option value="TBU">Tonga</option>
                                <option value="POS">Trinidad & Tobago</option>
                                <option value="TUN">Tunisia</option>
                                <option value="ESB">Turkey</option>
                                <option value="ASB">Turkmenistan</option>
                                <option value="FUN">Tuvalu</option>
                                <option value="EBB">Uganda</option>
                                <option value="KBP">Ukraine</option>
                                <option value="AUH">United Arab Emirates</option>
                                <option value="LCY">United Kingdom</option>
                                <option value="IAD">United States</option>
                                <option value="MVD">Uruguay</option>
                                <option value="TAS">Uzbekistan</option>
                                <option value="VLI">Vanuatu</option>
                                <option value="CCS">Venezuela</option>
                                <option value="HAN">Vietnam</option>
  <option value="SAH">Yemen</option> 
  <option value="LUN">Zambia</option>
  <option value="HRE">Zimbabwe</option>
</select>
    <br>
    <label for="students${countryCount}">Number of students:</label>
    <input type="number" id="students${countryCount}" name="students${countryCount}">
    <br>
    <br>
  `;
  countries.appendChild(country);
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent default submission
  const legs = [];
  Students=0;
  for (let i = 1; i <= countryCount; i++) {
    const departure = document.querySelector(`#departure${i}`).value;
    const students = parseInt(document.querySelector(`#students${i}`).value);
    legs.push({
      from: departure,
      to: 'DUB',
      passengers: students,
      class: 'economy'
    });
    Students += students;
  }

  // Make the API call using axios
  axios.post('https://beta3.api.climatiq.io/travel/flights', {
    legs
  }, {
    headers: {
      'Authorization': 'Bearer:75XP7T9GJMMC0DG1R98CK5HQ6P6K',
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    const co2e = (response.data.co2e)/1000; // kgs to tonnes
    const Finalco2e=co2e.toFixed(2);
    const emperpas=(response.data.co2e)/(1000*Students);
    const emperpass=emperpas.toFixed(2);
    const numTree= (response.data.co2e/1000)*42;
    const numTrees=numTree.toFixed(0);
    localStorage.setItem('numTrees',numTrees);
    localStorage.setItem('emperpass',emperpass);
    localStorage.setItem('result', Finalco2e);
    if(co2e<=4000){
      const diff=((4000000-response.data.co2e)/4000000)*100;
      const finaldiff=diff.toFixed(2);
      localStorage.setItem("difference", finaldiff);
      results.innerHTML = `Your carbon emissions are <b>${Finalco2e} tonnes</b> CO2 <br><br>Carbon emission are <b>${finaldiff}% less</b> than the previous year.`;
    } else{
      const diff=((response.data.co2e-4000000)/4000000)*100;
      const finaldiff=diff.toFixed(2);
      localStorage.setItem("difference", finaldiff);
      results.innerHTML = `Your carbon emissions are <b>${Finalco2e} tonnes</b> CO2 <br><br>Carbon emission are <u><b>${finaldiff}% more</b> than the previous year.`;
    }
localStorage.setItem("numstudents", Students);
    // results.innerHTML += `<br>Total number of students: ${Students}`;
     // Remove any existing chart elements
     chart.selectAll('*').remove();
     // Set up chart dimensions
     const margin = { top: 20, right: 20, bottom: 30, left: 40 };
     const width = 500 - margin.left - margin.right;
     const height = 300 - margin.top - margin.bottom;
     // Create the x and y scales
     const xScale = d3.scaleBand().range([0, width]).padding(0.1);
     const yScale = d3.scaleLinear().range([height, 0]);
     // Create the x and y axis
     const xAxis = d3.axisBottom(xScale);
     const yAxis = d3.axisLeft(yScale);
     // Add the chart SVG element to the page
     const svg = chart.append('svg')
       .attr('width', width + margin.left + margin.right)
       .attr('height', height + margin.top + margin.bottom)
       .append('g')
       .attr('transform', `translate(${margin.left},${margin.top})`);
      // Parse the data and set the domains for the x and y scales
      const data = [
        { name: 'Your Emissions', value: co2e },
        { name: 'TCD 2022', value:'3699' },
        { name: 'UCD', value: '6700' }
      ];
     xScale.domain(data.map(d => d.name));
     yScale.domain([0, d3.max(data, d => d.value)]);
 
     svg.selectAll('.bar')
       .data(data)
       .enter()
       .append('rect')
       .attr('class', 'bar')
       .attr('x', d => xScale(d.name))
       .attr('y', d => yScale(d.value))
       .attr('width', xScale.bandwidth())
       .attr('height', d => height - yScale(d.value))
       .attr("fill","#16a085");
 
     svg.append('g')
       .attr('class', 'x-axis')
       .attr('transform', `translate(0,${height})`)
       .call(xAxis);
 
     svg.append('g')
       .attr('class', 'y-axis')
    .call(d3.axisLeft(yScale).ticks(5))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('CO2e (kg)');
 
  })
  .catch(error => {
    console.log(error);
    result.innerHTML = 'An error occurred while calculating carbon emissions.';
  });
 
});
