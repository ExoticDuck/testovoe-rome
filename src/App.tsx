import React from 'react';
import './App.css';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend } from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

let response = {"pnl":[{"x":1674179671230,"y":0.0},{"x":1674179681325,"y":13.109999656677246},{"x":1674179691495,"y":16.100000381469727},{"x":1674179701593,"y":48.9900016784668},{"x":1674179711711,"y":30.81999969482422},{"x":1674179721802,"y":-27.139999389648438},{"x":1674179731902,"y":40.939998626708984},{"x":1674179742011,"y":183.30999755859375},{"x":1674179752114,"y":17.020000457763672},{"x":1674179762202,"y":41.86000061035156},{"x":1674179772301,"y":-5.519999980926514},{"x":1674179782412,"y":26.450000762939453},{"x":1674179792524,"y":-42.779998779296875},{"x":1674179802630,"y":-8.970000267028809},{"x":1674179812719,"y":7.360000133514404},{"x":1674179822832,"y":-17.479999542236328},{"x":1674179832939,"y":33.119998931884766},{"x":1674179843048,"y":-5.980000019073486},{"x":1674179853159,"y":34.959999084472656},{"x":1674179863262,"y":34.72999954223633},{"x":1674179873354,"y":-2.069999933242798},{"x":1674179883460,"y":-28.059999465942383},{"x":1674179893572,"y":-32.20000076293945},{"x":1674179905726,"y":-4.139999866485596},{"x":1674179915890,"y":-39.560001373291016},{"x":1674179925987,"y":-19.09000015258789},{"x":1674179936081,"y":5.519999980926514},{"x":1674179946174,"y":6.210000038146973},{"x":1674179956317,"y":-3.680000066757202},{"x":1674179966415,"y":-13.109999656677246},{"x":1674179976489,"y":1.840000033378601},{"x":1674179986564,"y":-17.479999542236328},{"x":1674179996680,"y":-1.149999976158142},{"x":1674180006775,"y":-57.959999084472656},{"x":1674180016985,"y":36.56999969482422},{"x":1674180027077,"y":5.980000019073486},{"x":1674180037184,"y":8.050000190734863},{"x":1674180047287,"y":37.2599983215332},{"x":1674180057363,"y":12.420000076293945},{"x":1674180067458,"y":54.7400016784668},{"x":1674180077550,"y":16.559999465942383},{"x":1674180087656,"y":52.66999816894531},{"x":1674180097784,"y":-2.069999933242798},{"x":1674180107885,"y":5.289999961853027},{"x":1674180118000,"y":87.62999725341797},{"x":1674180128102,"y":63.02000045776367},{"x":1674180138196,"y":7.590000152587891},{"x":1674180148294,"y":-2.299999952316284},{"x":1674180158388,"y":-5.289999961853027},{"x":1674180168474,"y":28.290000915527344},{"x":1674180178587,"y":-0.23000000417232513},{"x":1674180188680,"y":6.900000095367432},{"x":1674180198771,"y":17.479999542236328},{"x":1674180208867,"y":49.45000076293945},{"x":1674180218945,"y":-2.990000009536743},{"x":1674180229050,"y":-16.559999465942383},{"x":1674180239170,"y":-17.479999542236328},{"x":1674180249362,"y":-20.700000762939453},{"x":1674180259452,"y":14.260000228881836},{"x":1674180269610,"y":-5.289999961853027},{"x":1674180279743,"y":-29.440000534057617},{"x":1674180289849,"y":-115.91999816894531},{"x":1674180299956,"y":-41.86000061035156},{"x":1674180310049,"y":-63.47999954223633},{"x":1674180320152,"y":-18.399999618530273},{"x":1674180330238,"y":-35.189998626708984},{"x":1674180340336,"y":-43.93000030517578},{"x":1674180350447,"y":-15.640000343322754},{"x":1674180360603,"y":4.599999904632568},{"x":1674180370712,"y":-27.600000381469727},{"x":1674180380783,"y":-60.2599983215332},{"x":1674180390894,"y":50.83000183105469},{"x":1674180400987,"y":30.59000015258789},{"x":1674180411075,"y":0.6899999976158142},{"x":1674180421214,"y":-23.229999542236328},{"x":1674180431305,"y":-4.369999885559082},{"x":1674180441395,"y":30.360000610351562},{"x":1674180451510,"y":-37.029998779296875},{"x":1674180461608,"y":-6.440000057220459},{"x":1674180471709,"y":-5.519999980926514},{"x":1674180481808,"y":-11.5},{"x":1674180491912,"y":-0.6899999976158142},{"x":1674180502005,"y":-23.229999542236328},{"x":1674180512104,"y":-66.47000122070312},{"x":1674180522212,"y":-56.119998931884766},{"x":1674180532308,"y":-36.34000015258789},{"x":1674180542403,"y":34.72999954223633},{"x":1674180552489,"y":211159.28125},{"x":1674180562574,"y":30.690000534057617},{"x":1674180572661,"y":-5.610000133514404},{"x":1674180582765,"y":60.38999938964844},{"x":1674180592884,"y":35.970001220703125},{"x":1674180603103,"y":-1.9800000190734863},{"x":1674180613213,"y":105849.359375},{"x":1674180623331,"y":10.260000228881836}],"pnl_percent":[{"x":1674179671230,"y":0.0},{"x":1674179681325,"y":0.0026941299438476562},{"x":1674179691495,"y":0.003325849575763762},{"x":1674179701593,"y":0.010084498802198638},{"x":1674179711711,"y":0.006340912988966885},{"x":1674179721802,"y":-0.005577742708973155},{"x":1674179731902,"y":0.008426675349992863},{"x":1674179742011,"y":0.037744034190101416},{"x":1674179752114,"y":0.0035025447655545605},{"x":1674179762202,"y":0.008613099225396326},{"x":1674179772301,"y":-0.001143549534876609},{"x":1674179782412,"y":0.0054438345179042},{"x":1674179792524,"y":-0.00880257049352684},{"x":1674179802630,"y":-0.0018464391599470886},{"x":1674179812719,"y":0.001512916795176622},{"x":1674179822832,"y":-0.003597590233994641},{"x":1674179832939,"y":0.006826136980664366},{"x":1674179843048,"y":-0.0012388652518402488},{"x":1674179853159,"y":0.007195037330220977},{"x":1674179863262,"y":0.007146873856123115},{"x":1674179873354,"y":-0.0004168711816854298},{"x":1674179883460,"y":-0.00577666759887796},{"x":1674179893572,"y":-0.006634618007406168},{"x":1674179905726,"y":-0.0008457614604884256},{"x":1674179915890,"y":-0.008136055818819266},{"x":1674179925987,"y":-0.003931357075870334},{"x":1674179936081,"y":0.0011317988047654381},{"x":1674179946174,"y":0.0012747484367414685},{"x":1674179956317,"y":-0.0007505432503496223},{"x":1674179966415,"y":-0.0027043586756314575},{"x":1674179976489,"y":0.0003812414890891347},{"x":1674179986564,"y":-0.0035979528363205837},{"x":1674179996680,"y":-0.00023828359559940893},{"x":1674180006775,"y":-0.011926122377980963},{"x":1674180016985,"y":0.007530677681155673},{"x":1674180027077,"y":0.0012272173941729747},{"x":1674180037184,"y":0.0016561274212456567},{"x":1674180047287,"y":0.007672866159835756},{"x":1674180057363,"y":0.0025494835091954826},{"x":1674180067458,"y":0.011269859404339222},{"x":1674180077550,"y":0.0034067828570183423},{"x":1674180087656,"y":0.010839394361350507},{"x":1674180097784,"y":-0.0004287647300094122},{"x":1674180107885,"y":0.00109573678592767},{"x":1674180118000,"y":0.018031818656605303},{"x":1674180128102,"y":0.01295580035827193},{"x":1674180138196,"y":0.0015597334451333822},{"x":1674180148294,"y":-0.00046434088240010496},{"x":1674180158388,"y":-0.001095373321680082},{"x":1674180168474,"y":0.005822211104322683},{"x":1674180178587,"y":-4.7622676013769905e-05},{"x":1674180188680,"y":0.0014167752861116156},{"x":1674180198771,"y":0.003595462811656347},{"x":1674180208867,"y":0.010166936574629304},{"x":1674180218945,"y":-0.0006070972525806795},{"x":1674180229050,"y":-0.0034045268302862475},{"x":1674180239170,"y":-0.0035951122663080426},{"x":1674180249362,"y":-0.00426190882086841},{"x":1674180259452,"y":0.0029286990361754306},{"x":1674180269610,"y":-0.0010833488097494737},{"x":1674180279743,"y":-0.006059676022818206},{"x":1674180289849,"y":-0.023835376365588523},{"x":1674180299956,"y":-0.008609932885395022},{"x":1674180310049,"y":-0.013064881966473596},{"x":1674180320152,"y":-0.0037877623829452034},{"x":1674180330238,"y":-0.007242285417519145},{"x":1674180340336,"y":-0.009041599936721045},{"x":1674180350447,"y":-0.0032166702625846533},{"x":1674180360603,"y":0.0009531181438759972},{"x":1674180370712,"y":-0.005682912768001369},{"x":1674180380783,"y":-0.0124030364920924},{"x":1674180390894,"y":0.010462264055388637},{"x":1674180400987,"y":0.006290999474201087},{"x":1674180411075,"y":0.00014296826664761397},{"x":1674180421214,"y":-0.004777516080034516},{"x":1674180431305,"y":-0.0008935930805864523},{"x":1674180441395,"y":0.006243292779339882},{"x":1674180451510,"y":-0.007624919714954714},{"x":1674180461608,"y":-0.0013225478562750581},{"x":1674180471709,"y":-0.001131925297692682},{"x":1674180481808,"y":-0.002371112462817848},{"x":1674180491912,"y":-0.00014298504638077247},{"x":1674180502005,"y":-0.004778090465340501},{"x":1674180512104,"y":-0.01369149195913355},{"x":1674180522212,"y":-0.011548191832033705},{"x":1674180532308,"y":-0.007485141457852507},{"x":1674180542403,"y":0.007151944369310215},{"x":1674180552489,"y":43.47935327685211},{"x":1674180562574,"y":0.004402793098723379},{"x":1674180572661,"y":-0.0008057587327470195},{"x":1674180582765,"y":0.008664052886109275},{"x":1674180592884,"y":0.005166418050106536},{"x":1674180603103,"y":-0.000282394114048401},{"x":1674180613213,"y":15.187879411060434},{"x":1674180623331,"y":0.0012762755021711314}],"index_pnl":[{"x":1674179671230,"y":1.0},{"x":1674179681325,"y":1.0000269412994385},{"x":1674179691495,"y":1.0000602006912231},{"x":1674179701593,"y":1.000161051750183},{"x":1674179711711,"y":1.0002244710922241},{"x":1674179721802,"y":1.0001686811447144},{"x":1674179731902,"y":1.0002529621124268},{"x":1674179742011,"y":1.000630497932434},{"x":1674179752114,"y":1.000665545463562},{"x":1674179762202,"y":1.0007517337799072},{"x":1674179772301,"y":1.0007402896881104},{"x":1674179782412,"y":1.000794768333435},{"x":1674179792524,"y":1.000706672668457},{"x":1674179802630,"y":1.0006881952285767},{"x":1674179812719,"y":1.0007033348083496},{"x":1674179822832,"y":1.0006673336029053},{"x":1674179832939,"y":1.0007356405258179},{"x":1674179843048,"y":1.0007232427597046},{"x":1674179853159,"y":1.0007952451705933},{"x":1674179863262,"y":1.0008667707443237},{"x":1674179873354,"y":1.0008625984191895},{"x":1674179883460,"y":1.0008047819137573},{"x":1674179893572,"y":1.0007383823394775},{"x":1674179905726,"y":1.0007299184799194},{"x":1674179915890,"y":1.0006484985351562},{"x":1674179925987,"y":1.0006091594696045},{"x":1674179936081,"y":1.0006204843521118},{"x":1674179946174,"y":1.0006332397460938},{"x":1674179956317,"y":1.000625729560852},{"x":1674179966415,"y":1.000598669052124},{"x":1674179976489,"y":1.0006024837493896},{"x":1674179986564,"y":1.0005664825439453},{"x":1674179996680,"y":1.0005640983581543},{"x":1674180006775,"y":1.000444769859314},{"x":1674180016985,"y":1.00052011013031},{"x":1674180027077,"y":1.0005323886871338},{"x":1674180037184,"y":1.0005489587783813},{"x":1674180047287,"y":1.000625729560852},{"x":1674180057363,"y":1.000651240348816},{"x":1674180067458,"y":1.000764012336731},{"x":1674180077550,"y":1.0007981061935425},{"x":1674180087656,"y":1.0009065866470337},{"x":1674180097784,"y":1.0009022951126099},{"x":1674180107885,"y":1.0009132623672485},{"x":1674180118000,"y":1.0010937452316284},{"x":1674180128102,"y":1.0012234449386597},{"x":1674180138196,"y":1.0012390613555908},{"x":1674180148294,"y":1.0012344121932983},{"x":1674180158388,"y":1.0012234449386597},{"x":1674180168474,"y":1.00128173828125},{"x":1674180178587,"y":1.0012812614440918},{"x":1674180188680,"y":1.0012954473495483},{"x":1674180198771,"y":1.0013314485549927},{"x":1674180208867,"y":1.001433253288269},{"x":1674180218945,"y":1.001427173614502},{"x":1674180229050,"y":1.0013930797576904},{"x":1674180239170,"y":1.001357078552246},{"x":1674180249362,"y":1.001314401626587},{"x":1674180259452,"y":1.0013437271118164},{"x":1674180269610,"y":1.0013328790664673},{"x":1674180279743,"y":1.001272201538086},{"x":1674180289849,"y":1.0010335445404053},{"x":1674180299956,"y":1.00094735622406},{"x":1674180310049,"y":1.0008165836334229},{"x":1674180320152,"y":1.0007786750793457},{"x":1674180330238,"y":1.0007061958312988},{"x":1674180340336,"y":1.0006157159805298},{"x":1674180350447,"y":1.000583529472351},{"x":1674180360603,"y":1.0005930662155151},{"x":1674180370712,"y":1.0005362033843994},{"x":1674180380783,"y":1.000412106513977},{"x":1674180390894,"y":1.0005167722702026},{"x":1674180400987,"y":1.0005797147750854},{"x":1674180411075,"y":1.00058114528656},{"x":1674180421214,"y":1.0005333423614502},{"x":1674180431305,"y":1.0005244016647339},{"x":1674180441395,"y":1.0005868673324585},{"x":1674180451510,"y":1.000510573387146},{"x":1674180461608,"y":1.0004973411560059},{"x":1674180471709,"y":1.0004860162734985},{"x":1674180481808,"y":1.000462293624878},{"x":1674180491912,"y":1.0004608631134033},{"x":1674180502005,"y":1.0004130601882935},{"x":1674180512104,"y":1.0002760887145996},{"x":1674180522212,"y":1.000160574913025},{"x":1674180532308,"y":1.000085711479187},{"x":1674180542403,"y":1.0001572370529175},{"x":1674180552489,"y":1.4350191354751587},{"x":1674180562574,"y":1.4350823163986206},{"x":1674180572661,"y":1.4350707530975342},{"x":1674180582765,"y":1.4351950883865356},{"x":1674180592884,"y":1.4352692365646362},{"x":1674180603103,"y":1.4352651834487915},{"x":1674180613213,"y":1.6532515287399292},{"x":1674180623331,"y":1.6532726287841797}],"date_from":"2023-01-20 04:54:31","date_to":"2023-01-20 05:10:23"};

function App() {

  const data = {
    labels: response.pnl.map(el => {
      var a = new Date(el.x);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds().toString();
      if (sec.length === 1) sec = "0" + sec; 
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }),
    datasets: [{
      label: "pln",
      data: response.pnl.map(el => el.y),
      backgroundColor: 'coral',
      borderColor: 'coral',
      pointBorderColor: 'red',
      tension: 0.3
    }]
  }
  const data2 = {
    labels: response.pnl.map(el => {
      var a = new Date(el.x);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds().toString();
      if (sec.length === 1) sec = "0" + sec; 
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }),
    datasets: [
    {
      label: "pln_percent",
      data: response.pnl_percent.map(el => el.y),
      backgroundColor: 'purple',
      borderColor: 'purple',
      pointBorderColor: 'lightblue',
      tension: 0.3
    },
    {
      label: "index_pln",
      data: response.index_pnl.map(el => el.y),
      backgroundColor: 'green',
      borderColor: 'green',
      pointBorderColor: 'aqua',
      tension: 0.3
    }]
  }

 
  return (
    <div className="App">
      <div className='LineChart'>
        <h1>График pln</h1>
        <Line
          data={data}

        // options={options}
        />
      </div>
      <div className='LineChart2'>
      <h1>Графики pln_percent и index_pln</h1>
        <Line
          data={data2}

        // options={options}
        />
      </div>
    </div>
  );
}

export default App;
