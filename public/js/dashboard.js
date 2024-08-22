var bt_on1 = document.querySelector('.btn-on1');
var bt_on2 = document.querySelector('.btn_on2');
var bt_on3 = document.querySelector('.btn_on3');
var bt_on4 = document.querySelector('.btn_on4');
var bt_on5 = document.querySelector('.btn_on5');
var bt_on6 = document.querySelector('.btn_on6');
var giatri = document.querySelector('.val');
var dis_auto = document.querySelector('.dis_auto');
var dis_manual = document.querySelector('.dis_manual');
var dis_auto2 = document.querySelector('.dis_auto2');
var dis_manual2 = document.querySelector('.dis_manual2');
var box_on = document.querySelector('.box');
var btn_on = document.querySelector('.box1');
var box_on1 = document.querySelector('.box2');
var btn_on1 = document.querySelector('.box3');

// DONG HO
setInterval(() => {
  let date = new Date()
  let clock = document.getElementById('curClock')
  clock.innerHTML =
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds()
  clock2 =
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds()
  clock3 =
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds()
}, 1000)



fetch('/api/getMode1')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      //console.log(item);
      if (item.mode == 1) {
        dis_auto.classList.add('light');
        dis_manual.classList.remove('light');
        box_on.classList.add('boxactive');
        btn_on.classList.add('btnactive');
        document.querySelector('.element1').classList.remove('display-none');
        document.querySelector('.element2').classList.remove('display-none');
        document.querySelector('.element3').classList.remove('display-none');
        document.querySelector('.element4').classList.remove('display-none');
        document.querySelector('.element5').classList.remove('display-none');
        document.querySelector('.element6').classList.remove('display-none');
        document.querySelector('.btn_on1').classList.add('display-none');
        document.querySelector('.btn_on2').classList.add('display-none');
        document.querySelector('.btn_on3').classList.add('display-none');
        document.querySelector('.btn_on4').classList.add('display-none');
        document.querySelector('.btn_on5').classList.add('display-none');
        document.querySelector('.btn_on6').classList.add('display-none');
      }
      else if (item.mode == 0) {
        box_on.classList.remove('boxactive');
        btn_on.classList.remove('btnactive');
        dis_manual.classList.add('light');
        dis_auto.classList.remove('light');
        document.querySelector('.btn_on1').classList.remove('display-none');
        document.querySelector('.btn_on2').classList.remove('display-none');
        document.querySelector('.btn_on3').classList.remove('display-none');
        document.querySelector('.btn_on4').classList.remove('display-none');
        document.querySelector('.btn_on5').classList.remove('display-none');
        document.querySelector('.btn_on6').classList.remove('display-none');
        document.querySelector('.element1').classList.add('display-none');
        document.querySelector('.element2').classList.add('display-none');
        document.querySelector('.element3').classList.add('display-none');
        document.querySelector('.element4').classList.add('display-none');
        document.querySelector('.element5').classList.add('display-none');
        document.querySelector('.element6').classList.add('display-none');
      }
    })
  })



fetch('/api/getMode2')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      //console.log(item);
      if (item.mode == 1) {
        dis_auto2.classList.add('light');
        dis_manual2.classList.remove('light');
        box_on1.classList.add('boxactive');
        btn_on1.classList.add('btnactive');
        document.querySelector('.element21').classList.remove('display-none');
        document.querySelector('.element22').classList.remove('display-none');
        document.querySelector('.element23').classList.remove('display-none');
        document.querySelector('.element24').classList.remove('display-none');
        document.querySelector('.element25').classList.remove('display-none');
        document.querySelector('.element26').classList.remove('display-none');
        document.querySelector('.btn_on21').classList.add('display-none');
        document.querySelector('.btn_on22').classList.add('display-none');
        document.querySelector('.btn_on23').classList.add('display-none');
        document.querySelector('.btn_on24').classList.add('display-none');
        document.querySelector('.btn_on25').classList.add('display-none');
        document.querySelector('.btn_on26').classList.add('display-none');
      }
      else if (item.mode == 0) {
        box_on1.classList.remove('boxactive');
        btn_on1.classList.remove('btnactive');
        dis_manual2.classList.add('light');
        dis_auto2.classList.remove('light');
        document.querySelector('.btn_on21').classList.remove('display-none');
        document.querySelector('.btn_on22').classList.remove('display-none');
        document.querySelector('.btn_on23').classList.remove('display-none');
        document.querySelector('.btn_on24').classList.remove('display-none');
        document.querySelector('.btn_on25').classList.remove('display-none');
        document.querySelector('.btn_on26').classList.remove('display-none');
        document.querySelector('.element21').classList.add('display-none');
        document.querySelector('.element22').classList.add('display-none');
        document.querySelector('.element23').classList.add('display-none');
        document.querySelector('.element24').classList.add('display-none');
        document.querySelector('.element25').classList.add('display-none');
        document.querySelector('.element26').classList.add('display-none');
      }
    })
  })

// btn active
function addactive() {
  box_on.classList.toggle('boxactive');
  btn_on.classList.toggle('btnactive');
  dis_auto.classList.toggle('light');
  dis_manual.classList.toggle('light');
  bt_on1.classList.toggle('display-none');
  document.querySelector('.element1').classList.toggle('display-none');
  bt_on2.classList.toggle('display-none');
  document.querySelector('.element2').classList.toggle('display-none');
  bt_on3.classList.toggle('display-none');
  document.querySelector('.element3').classList.toggle('display-none');
  bt_on4.classList.toggle('display-none');
  document.querySelector('.element4').classList.toggle('display-none');
  bt_on5.classList.toggle('display-none');
  document.querySelector('.element5').classList.toggle('display-none');
  bt_on6.classList.toggle('display-none');
  document.querySelector('.element6').classList.toggle('display-none');
  var a
  if (dis_auto.classList.value != 'mg_tba border dis_auto light') {
    a = 1;
    socket.emit('mode1', "manual");
  }
  else {
    a = 0;
    socket.emit('mode1', "auto");
  }
}
box_on.addEventListener('click', addactive)


function addactive1() {
  box_on1.classList.toggle('boxactive');
  btn_on1.classList.toggle('btnactive');
  dis_auto2.classList.toggle('light');
  dis_manual2.classList.toggle('light');
  document.querySelector('.element21').classList.toggle('display-none');
  document.querySelector('.btn_on21').classList.toggle('display-none');
  document.querySelector('.element22').classList.toggle('display-none');
  document.querySelector('.btn_on22').classList.toggle('display-none');
  document.querySelector('.element23').classList.toggle('display-none');
  document.querySelector('.btn_on23').classList.toggle('display-none');
  document.querySelector('.element24').classList.toggle('display-none');
  document.querySelector('.btn_on24').classList.toggle('display-none');
  document.querySelector('.element25').classList.toggle('display-none');
  document.querySelector('.btn_on25').classList.toggle('display-none');
  document.querySelector('.element26').classList.toggle('display-none');
  document.querySelector('.btn_on26').classList.toggle('display-none');
  var b;
  if (dis_auto2.classList.value != 'mg_tba border dis_auto2 light') {
    b = 1;
    socket.emit('mode2', "manual");
  }
  else {
    b = 0;
    socket.emit('mode2', "auto");
  }
}
box_on1.addEventListener('click', addactive1)


document.querySelector('.PH1').addEventListener('click', chartPH1);
function chartPH1() {
  myChart1.data.datasets[0].label = '#PH';
  myChart1.update();
}
// Temperrature1
// document.querySelector('.Temperature1').addEventListener('click', chartTemperature1);
// function chartTemperature1() {
//   myChart1.data.datasets[0].label = '#Temperature';
//   myChart1.update();
// }

const ctx1 = document.getElementById('myChart1')
var valdata = [];


// BIEU DO 2
var valdata1 = [];
var val3 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '# Temperate',
      data: [],
      borderWidth: 4,
      borderColor: "red"
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }

}

myChart2 = new Chart(ctx1, val3);
// Bieu Do 1


var values = []
var times = []
const ctx = document.getElementById('myChart')
var val2 = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '# Temperate',
      data: [],
      borderWidth: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
}
myChart1 = new Chart(ctx, val2);
// 
// ADC1
fetch('/api/adc1Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      //let localTime = moment.utc(item.time).format("HH:mm:ss");
      values.unshift(item.value);
      times.unshift(localTime);
      myChart1.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetchADC() {
  fetch('/api/adc1Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        //console.log(data1.value);
        //console.log(localTime);
        values.shift();
        values.push(data1.value);
        times.shift();
        times.push(localTime);
        myChart1.update();
      })
    });
}
setInterval(fetchADC, 5000)
// 
// 
// Light I2C 1
var lights1 = []
var timesLight = []
fetch('/api/lightI2C1Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      lights1.unshift(item.light);
      timesLight.unshift(localTime);
      myChart1.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetchLightI2C1() {
  fetch('/api/lightI2C1Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        //console.log(data1.value);
        //console.log(localTime);
        lights1.shift();
        lights1.push(data1.light);
        timesLight.shift();
        timesLight.push(localTime);
        myChart1.update();
      })
    });
}
setInterval(fetchLightI2C1, 5000)
// 
// 
// Light I2C 2
var lights2 = []
var timesLight2 = []
fetch('/api/lightI2C2Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      lights2.unshift(item.light);
      timesLight2.unshift(localTime);
      myChart2.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetchLightI2C2() {
  fetch('/api/lightI2C2Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        //console.log(data1.value);
        //console.log(localTime);
        lights2.shift();
        lights2.push(data1.light);
        timesLight2.shift();
        timesLight2.push(localTime);
        myChart2.update();
      })
    });
}
setInterval(fetchLightI2C2, 5000)
// 
// 
// temHumI2C 1
var HumI2C1 = []
var TemI2C1 = []
var timesI2C1 = []
fetch('/api/temHumI2C1Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      TemI2C1.unshift(item.tem);
      HumI2C1.unshift(item.hum);
      timesI2C1.unshift(localTime);
      myChart1.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetchtemHumI2C1() {
  fetch('/api/temHumI2C1Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        //console.log(data1.value);
        //console.log(localTime);
        HumI2C1.shift();
        HumI2C1.push(data1.hum);
        TemI2C1.shift();
        TemI2C1.push(data1.tem);
        timesI2C1.shift();
        timesI2C1.push(localTime);
        myChart1.update();
      })
    });
}
setInterval(fetchtemHumI2C1, 5000)
// 
// 
// temHumI2C 2
var HumI2C2 = []
var TemI2C2 = []
var timesI2C2 = []
fetch('/api/temHumI2C2Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      TemI2C2.unshift(item.tem);
      HumI2C2.unshift(item.hum);
      timesI2C2.unshift(localTime);
      myChart2.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetchtemHumI2C2() {
  fetch('/api/temHumI2C2Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        //console.log(data1.value);
        //console.log(localTime);
        HumI2C2.shift();
        HumI2C2.push(data1.hum);
        TemI2C2.shift();
        TemI2C2.push(data1.tem);
        timesI2C2.shift();
        timesI2C2.push(localTime);
        myChart2.update();
      })
    });
}
setInterval(fetchtemHumI2C2, 5000)
// 
// 
// NPK
var valuesN = []
var valuesP = []
var valuesK = []
var valuespH = []
var valuesHumdity = []
var times1 = []
var times2 = []
var times3 = []
fetch('/api/npk_rs485Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      valuesN.unshift(item.N);
      valuesP.unshift(item.P);
      valuesK.unshift(item.K);
      times1.unshift(localTime);
      myChart2.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetch_npk_RS485() {
  fetch('/api/npk_rs485Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        valuesN.shift();
        valuesN.push(data1.N);
        valuesP.shift();
        valuesP.push(data1.P);
        valuesK.shift();
        valuesK.push(data1.K);
        times1.shift();
        times1.push(localTime);
        myChart2.update();
      })
    });
}
setInterval(fetch_npk_RS485, 5000)
fetch('/api/ph_rs485Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      valuespH.unshift(item.ph);
      times2.unshift(localTime);
      myChart2.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetch_pH_RS485() {
  fetch('/api/ph_rs485Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        valuespH.shift();
        valuespH.push(data1.ph);
        times2.shift();
        times2.push(localTime);
        myChart2.update();
      })
    });
}
setInterval(fetch_pH_RS485, 5000)

fetch('/api/hum_rs485Start')
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      let localTime = moment.utc(item.time).utcOffset("+07:00").format("HH:mm:ss");
      valuesHumdity.unshift(item.hum);
      times3.unshift(localTime);
      myChart2.update();
    });
  })
  .catch(error => {
    console.error(error)
  })
function fetch_hum_RS485() {
  fetch('/api/hum_rs485Active')
    .then(response => response.json())
    .then(data => {
      let data1 = data;
      data.map(function (data1) {
        let localTime = moment.utc(data1.time).utcOffset("+07:00").format("HH:mm:ss");
        valuesHumdity.shift();
        valuesHumdity.push(data1.hum);
        times3.shift();
        times3.push(localTime);
        myChart2.update();
      })
    });
}
setInterval(fetch_hum_RS485, 5000)
// DO AM DAT 1
document.querySelector('.Do-am2').addEventListener('click', chartDoAm1);
function chartDoAm1() {
  myChart1.data.datasets[0].label = '#Soil Moisture';
  myChart1.data.datasets[0].data = values;
  myChart1.data.labels = times
  myChart1.update();
}
// LIGHT 1
document.querySelector('.LightChart1').addEventListener('click', chartLight1);
function chartLight1() {
  myChart1.data.datasets[0].label = '#Light';
  myChart1.data.datasets[0].data = lights1;
  myChart1.data.labels = timesLight
  myChart1.update();
}
// NHIET DO 1
document.querySelector('.TemI2C1').addEventListener('click', chartTemI2C1);
function chartTemI2C1() {
  myChart1.data.datasets[0].label = '#Temperature';
  myChart1.data.datasets[0].data = TemI2C1;
  myChart1.data.labels = timesI2C1
  myChart1.update();
}
// DO AM KHONG KHI 1
document.querySelector('.HumI2C1').addEventListener('click', chartHumI2C1);
function chartHumI2C1() {
  myChart1.data.datasets[0].label = '#Humidity';
  myChart1.data.datasets[0].data = HumI2C1;
  myChart1.data.labels = timesI2C1
  myChart1.update();
}
// DO AM KHONG KHI 2
document.querySelector('.HumI2C2').addEventListener('click', chartHumI2C2);
function chartHumI2C2() {
  myChart2.data.datasets[0].label = '#Humidity';
  myChart2.data.datasets[0].data = HumI2C2;
  myChart2.data.labels = timesI2C2
  myChart2.update();
}
// LIGHT 2
document.querySelector('.LightChart2').addEventListener('click', chartLight2);
function chartLight2() {
  myChart2.data.datasets[0].label = '#Light';
  myChart2.data.datasets[0].data = lights2;
  myChart2.data.labels = timesLight2
  myChart2.update();
}
// NHIET DO 2
document.querySelector('.TemI2C2').addEventListener('click', chartTemI2C2);
function chartTemI2C2() {
  myChart2.data.datasets[0].label = '#Temperature';
  myChart2.data.datasets[0].data = TemI2C2;
  myChart2.data.labels = timesI2C2
  myChart2.update();
}
// N2
document.querySelector('.valueN2').addEventListener('click', chartvalueN2);
function chartvalueN2() {
  myChart2.data.datasets[0].label = '#N';
  myChart2.data.datasets[0].data = valuesN;
  myChart2.data.datasets[0].borderColor = 'pink'
  myChart2.data.labels = times1
  myChart2.update();
}
// P2
document.querySelector('.valueP2').addEventListener('click', chartvalueP2);
function chartvalueP2() {
  myChart2.data.datasets[0].label = '#P';
  myChart2.data.datasets[0].data = valuesP;
  myChart2.data.datasets[0].borderColor = 'yellow'
  myChart2.data.labels = times1
  myChart2.update();
}
// K2
document.querySelector('.valueK2').addEventListener('click', chartvalueK2);
function chartvalueK2() {
  myChart2.data.datasets[0].label = '#K';
  myChart2.data.datasets[0].data = valuesK;
  myChart2.data.labels = times1
  myChart2.update();
}
// K2
document.querySelector('.valuepH2').addEventListener('click', chartvaluepH2);
function chartvaluepH2() {
  myChart2.data.datasets[0].label = '#pH';
  myChart2.data.datasets[0].data = valuespH;
  myChart2.data.labels = times1
  myChart2.update();
}
// DO AM DAT 2
document.querySelector('.valueHumdity2').addEventListener('click', chartvalueHumdity2);
function chartvalueHumdity2() {
  myChart2.data.datasets[0].label = '#Soil Moisture';
  myChart2.data.datasets[0].data = valuesHumdity;
  myChart2.data.labels = times1
  myChart2.update();
}