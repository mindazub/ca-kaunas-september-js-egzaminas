
/***
 * Show results from input fields
 *  
 */
function showResult() {
  var h = '';
  var vardas = document.getElementById("input-name").value;
  var data = document.getElementById("input-date").value;

  var d = new Date();
  if (!!d.valueOf()) { // Valid date
    year = d.getFullYear();
    month = d.getMonth() + 1;
    day = d.getDate();
  } else { /* Invalid date */ }

  var age = calculateAge(data);

  var zodiacSign = getZodiacSign(day, month);
  if (vardas.length > 0 & data.length > 0) {
    h = `
        <div class="result-card">
        <h2>${vardas}</h2>
        <p>Gimimo diena: ${data}</p>
        <p>Zodiako zeklas: ${zodiacSign}</p>
        
        </div>
        `
  } else {
    h = `
        <h2 style="margin-top:50px;">Iveskite varda ir data.</h2>
        `
  }

  document.getElementById("result").innerHTML = h;
  // search for lithuanians
  printPeopleFromLt();
  // get Famous People
  getFamousPeople(day, month);
}
/**
 * Format String Date For Comparison
 * @param {} string 
 */
function formatMyDate(string) {
    var a = string.split("-");
    var b = a[1] + "-"+ a[2];
    return b;
}

function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function getFamousPeople(day, month) {
  var data = document.getElementById("input-date").value;
  var bd = [];
  for (var i = 0; i < testData.length; i++) {
    var gimdienis = testData[i].gimimoDiena;
    if(formatMyDate(data) === formatMyDate(gimdienis))
    {
      bd.push(testData[i]);
    } 
  }
  let f = 'Žymūs žmonės gimę šią dieną: ';
  bd.forEach(function (p) {
     f += ` ${p.vardas} ${p.pavarde}(${p.salis}), `;
  });
  // f += '.'
  // f = f.slice(5, f.length - 1);
  if(f.length > 2) {
    $('#people-famous').text(f);
  }
  
}
/**
 * Return lithuanians from testData array
 * 
 */

function printPeopleFromLt() {
  let lietuviai = testData.filter(p => p.salis === 'Lithuania');
  let h = '';
  lietuviai.forEach(function (p) {
    h += `${p.vardas} ${p.pavarde} (${p.salis}), `;
  });
  h = h.slice(5, h.length - 1) + '.';
  $('#people').text(h);
}



/**
 * Return zodiac sign by month and day
 *
 * @param day
 * @param month
 * @return {string} name of zodiac sign
 */
function getZodiacSign(day, month) {

  var zodiacSigns = {
    'capricorn': "Ožiaragis",
    'aquarius': "Vandenis",
    'pisces': "Žuvys",
    'aries': "Avinas",
    'taurus': "Jautis",
    'gemini': "Dvyniai",
    'cancer': "Vėžys",
    'leo': "Liūtas",
    'virgo': "Mergelė",
    'libra': "Svarstyklės",
    'scorpio': "Skorpionas",
    'sagittarius': "Šaulys"
  }

  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
    return zodiacSigns.capricorn;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.aries;
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return zodiacSigns.leo;
  } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return zodiacSigns.libra;
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}