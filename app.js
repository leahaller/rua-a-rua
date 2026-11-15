const DATA=await (await fetch('data/streets.json')).json();
// Natur-Kritzel aus Leas Skizze (natur.svg): Teilstriche, x = 0…1 entlang der Straße, y = Abstand zur Linie in Skizzen-px
const NATUR=[[[0.0,-0.0],[0.0031,-0.02],[0.0077,-0.06],[0.0138,-0.12],[0.0214,-0.22],[0.0305,-0.35],[0.0411,-0.52],[0.0532,-0.73],[0.0667,-0.98]],[[0.0667,-0.98],[0.0677,-1.0],[0.0687,-1.02],[0.0697,-1.04],[0.0707,-1.06],[0.0717,-1.08],[0.0727,-1.1],[0.0738,-1.12],[0.0748,-1.15],[0.0878,-1.4],[0.0989,-1.6],[0.1086,-1.75],[0.1173,-1.87],[0.1257,-1.97],[0.1342,-2.06],[0.1432,-2.15],[0.1534,-2.27],[0.1555,-2.29],[0.1576,-2.31],[0.1597,-2.34],[0.1618,-2.36],[0.1638,-2.39],[0.1659,-2.41],[0.168,-2.44],[0.1701,-2.46]],[[0.0667,-0.98],[0.0675,-0.83],[0.0682,-0.67],[0.0689,-0.5],[0.0695,-0.32],[0.0701,-0.14],[0.0707,0.05],[0.0713,0.25],[0.0718,0.46],[0.0727,0.88],[0.0734,1.32],[0.074,1.76],[0.0745,2.19],[0.0749,2.61],[0.0753,3.01],[0.0756,3.37],[0.0759,3.68],[0.0763,3.94],[0.0766,4.15],[0.0769,4.32],[0.0773,4.44],[0.0776,4.54],[0.0781,4.61],[0.0785,4.67],[0.079,4.71],[0.0807,4.84],[0.0825,4.97],[0.0845,5.11],[0.0869,5.24],[0.0898,5.36],[0.0934,5.46],[0.0977,5.52],[0.103,5.55],[0.1105,5.55],[0.1198,5.51],[0.1306,5.45],[0.1424,5.35],[0.1549,5.23],[0.1679,5.07],[0.1809,4.88],[0.1936,4.65],[0.1968,4.59],[0.2,4.52],[0.2031,4.46],[0.2062,4.39],[0.2092,4.33],[0.2121,4.26],[0.215,4.2],[0.2179,4.13]],[[0.0667,-0.98],[0.065,-1.3],[0.0632,-1.59],[0.0614,-1.83],[0.0596,-2.05],[0.0578,-2.23],[0.0561,-2.37],[0.0545,-2.49],[0.0531,-2.58],[0.0486,-2.83],[0.0443,-3.09],[0.0403,-3.35],[0.0366,-3.61],[0.0335,-3.87],[0.0308,-4.12],[0.0288,-4.36],[0.0274,-4.58],[0.0269,-4.74],[0.0267,-4.89],[0.0269,-5.03],[0.0273,-5.16],[0.0279,-5.28],[0.0286,-5.38],[0.0295,-5.48],[0.0304,-5.56],[0.0332,-5.73],[0.0371,-5.89],[0.0422,-6.04],[0.0483,-6.18],[0.0553,-6.32],[0.0632,-6.44],[0.072,-6.57],[0.0814,-6.69],[0.0865,-6.73],[0.0918,-6.76],[0.0973,-6.76],[0.1028,-6.74],[0.1083,-6.71],[0.1139,-6.66],[0.1194,-6.6],[0.1248,-6.54],[0.1318,-6.43],[0.1376,-6.27],[0.1427,-6.06],[0.1471,-5.79],[0.151,-5.46],[0.1547,-5.05],[0.1585,-4.56],[0.1624,-3.98],[0.1634,-3.82],[0.1644,-3.65],[0.1653,-3.47],[0.1663,-3.28],[0.1673,-3.09],[0.1682,-2.89],[0.1691,-2.68],[0.1701,-2.46]],[[0.1701,-2.46],[0.1757,-2.53],[0.1813,-2.59],[0.1869,-2.66],[0.1925,-2.73],[0.1981,-2.79],[0.2037,-2.86],[0.2093,-2.93],[0.2149,-2.99],[0.2304,-3.15],[0.2438,-3.26],[0.2554,-3.33],[0.2654,-3.36],[0.2737,-3.36],[0.2807,-3.35],[0.2863,-3.31],[0.2908,-3.27],[0.2954,-3.22],[0.2995,-3.14],[0.3033,-3.05],[0.3067,-2.94],[0.3099,-2.82],[0.3129,-2.69],[0.3157,-2.55],[0.3183,-2.41],[0.3227,-2.14],[0.3258,-1.88],[0.3279,-1.63],[0.3291,-1.38],[0.3297,-1.13],[0.3298,-0.86],[0.3298,-0.57],[0.3297,-0.25],[0.3293,-0.09],[0.328,0.08],[0.326,0.24],[0.3234,0.4],[0.3203,0.56],[0.3168,0.72],[0.313,0.88],[0.309,1.04],[0.3089,1.05],[0.3005,1.38],[0.2924,1.69],[0.2844,1.98],[0.2765,2.25],[0.2687,2.52],[0.2608,2.79],[0.2529,3.07],[0.2448,3.36],[0.2422,3.46],[0.2393,3.55],[0.2362,3.65],[0.2328,3.75],[0.2294,3.84],[0.2257,3.94],[0.2218,4.04],[0.2179,4.13]],[[0.1701,-2.46],[0.1715,-2.13],[0.173,-1.78],[0.1744,-1.44],[0.1759,-1.09],[0.1774,-0.75],[0.1789,-0.42],[0.1805,-0.1],[0.1821,0.21],[0.1848,0.69],[0.1874,1.12],[0.19,1.5],[0.1925,1.85],[0.195,2.16],[0.1974,2.44],[0.1999,2.7],[0.2023,2.94],[0.2045,3.14],[0.2066,3.32],[0.2087,3.49],[0.2107,3.64],[0.2126,3.79],[0.2144,3.91],[0.2162,4.03],[0.2179,4.13]],[[0.2179,4.13],[0.2192,4.21],[0.2205,4.28],[0.2216,4.34],[0.2227,4.4],[0.2237,4.44],[0.2245,4.48],[0.2253,4.51],[0.2259,4.54],[0.2308,4.68],[0.2377,4.8],[0.2462,4.91],[0.2558,5.01],[0.2663,5.09],[0.2771,5.16],[0.2879,5.21],[0.2983,5.25],[0.3015,5.25],[0.3051,5.25],[0.3092,5.23],[0.314,5.19],[0.3195,5.14],[0.3258,5.08],[0.3332,5.0],[0.3416,4.9],[0.3511,4.77],[0.3615,4.63],[0.3723,4.48],[0.3834,4.32],[0.3944,4.16],[0.4049,4.0],[0.4147,3.85],[0.4233,3.71],[0.4283,3.63],[0.4332,3.56],[0.4379,3.48],[0.4427,3.41],[0.4473,3.34],[0.4519,3.27],[0.4564,3.2],[0.4608,3.13]],[[0.4608,3.13],[0.4679,3.02],[0.4748,2.92],[0.4815,2.82],[0.488,2.72],[0.4944,2.63],[0.5007,2.53],[0.5068,2.45],[0.5127,2.36],[0.5177,2.29],[0.5226,2.21],[0.5274,2.13],[0.5319,2.05],[0.5362,1.97],[0.5402,1.88],[0.544,1.8],[0.5474,1.71],[0.5504,1.63],[0.5529,1.54],[0.5551,1.44],[0.557,1.34],[0.5585,1.24],[0.5597,1.14],[0.5606,1.03],[0.5613,0.92],[0.5619,0.74],[0.5622,0.57],[0.5621,0.39],[0.5617,0.2],[0.561,0.01],[0.5599,-0.2],[0.5585,-0.43],[0.5568,-0.68],[0.5567,-0.7],[0.5565,-0.72],[0.5564,-0.74],[0.5563,-0.76],[0.5561,-0.78],[0.556,-0.8],[0.5559,-0.81],[0.5557,-0.83]],[[0.4608,3.13],[0.4528,2.93],[0.4448,2.72],[0.437,2.5],[0.4293,2.27],[0.4219,2.03],[0.4149,1.77],[0.4083,1.5],[0.4022,1.22],[0.3997,1.09],[0.3967,0.91],[0.3932,0.68],[0.3894,0.4],[0.3853,0.08],[0.381,-0.3],[0.3766,-0.72],[0.3723,-1.19],[0.3689,-1.59],[0.366,-1.94],[0.3636,-2.24],[0.3617,-2.51],[0.3602,-2.75],[0.3592,-2.96],[0.3586,-3.14],[0.3586,-3.29],[0.359,-3.61],[0.3594,-3.91],[0.3598,-4.19],[0.3603,-4.45],[0.361,-4.68],[0.3619,-4.88],[0.363,-5.05],[0.3644,-5.17],[0.3675,-5.38],[0.3709,-5.6],[0.3748,-5.83],[0.3793,-6.06],[0.3846,-6.28],[0.3908,-6.49],[0.3981,-6.68],[0.4066,-6.84],[0.4138,-6.95],[0.4206,-7.03],[0.427,-7.1],[0.4331,-7.14],[0.4388,-7.16],[0.4441,-7.15],[0.4493,-7.12],[0.4542,-7.05],[0.4625,-6.91],[0.4706,-6.77],[0.4785,-6.61],[0.4858,-6.44],[0.4925,-6.26],[0.4984,-6.05],[0.5034,-5.83],[0.5073,-5.59],[0.5096,-5.42],[0.5121,-5.23],[0.5147,-5.04],[0.5173,-4.85],[0.52,-4.64],[0.5228,-4.43],[0.5255,-4.2],[0.5283,-3.97]],[[0.4608,3.13],[0.4624,3.17],[0.464,3.21],[0.4656,3.24],[0.4672,3.28],[0.4687,3.32],[0.4703,3.35],[0.4719,3.39],[0.4734,3.42],[0.4795,3.55],[0.4868,3.68],[0.4952,3.81],[0.5042,3.93],[0.5135,4.05],[0.5229,4.16],[0.5321,4.26],[0.5408,4.34],[0.5499,4.38],[0.5598,4.37],[0.57,4.32],[0.5802,4.22],[0.5901,4.09],[0.5995,3.95],[0.6079,3.79],[0.6151,3.62],[0.6216,3.44],[0.6278,3.23],[0.6336,3.01],[0.6392,2.77],[0.6445,2.52],[0.6497,2.25],[0.6547,1.98],[0.6596,1.7],[0.6623,1.5],[0.6642,1.24],[0.6652,0.94],[0.6654,0.58],[0.6647,0.16],[0.6632,-0.31],[0.6607,-0.84],[0.6573,-1.44]],[[0.5557,-0.83],[0.5539,-1.08],[0.5519,-1.34],[0.5497,-1.63],[0.5474,-1.92],[0.545,-2.22],[0.5426,-2.51],[0.5401,-2.79],[0.5378,-3.05],[0.5366,-3.17],[0.5355,-3.3],[0.5343,-3.42],[0.5331,-3.53],[0.5319,-3.65],[0.5307,-3.76],[0.5295,-3.86],[0.5283,-3.97]],[[0.5557,-0.83],[0.5497,-0.82],[0.544,-0.81],[0.5386,-0.81],[0.5337,-0.81],[0.5291,-0.83],[0.525,-0.85],[0.5213,-0.88],[0.5181,-0.92],[0.5112,-1.03],[0.5049,-1.15],[0.4992,-1.28],[0.4942,-1.41],[0.4901,-1.55],[0.4868,-1.7],[0.4846,-1.86],[0.4833,-2.02],[0.4831,-2.09],[0.4829,-2.16],[0.4828,-2.24],[0.483,-2.31],[0.4833,-2.39],[0.4839,-2.47],[0.4848,-2.55],[0.486,-2.63],[0.4894,-2.8],[0.4931,-2.97],[0.4973,-3.12],[0.502,-3.27],[0.5074,-3.43],[0.5136,-3.6],[0.5205,-3.77],[0.5283,-3.97]],[[0.5557,-0.83],[0.563,-0.86],[0.5706,-0.89],[0.5787,-0.93],[0.5871,-0.97],[0.5958,-1.02],[0.6048,-1.07],[0.6141,-1.13],[0.6237,-1.18],[0.6271,-1.2],[0.6308,-1.23],[0.6345,-1.25],[0.6382,-1.28],[0.642,-1.31],[0.6458,-1.34],[0.6496,-1.37],[0.6535,-1.4],[0.6573,-1.44]],[[0.5283,-3.97],[0.5309,-4.03],[0.5336,-4.1],[0.5363,-4.17],[0.5392,-4.24],[0.5422,-4.31],[0.5452,-4.39],[0.5484,-4.47],[0.5517,-4.55],[0.5558,-4.66],[0.5598,-4.76],[0.5638,-4.86],[0.5676,-4.96],[0.5713,-5.05],[0.5748,-5.14],[0.5783,-5.23],[0.5816,-5.31]],[[0.6573,-1.44],[0.657,-1.49],[0.6567,-1.54],[0.6564,-1.59],[0.656,-1.65],[0.6557,-1.7],[0.6553,-1.75],[0.6549,-1.81],[0.6546,-1.86],[0.6523,-2.13],[0.6491,-2.37],[0.6451,-2.6],[0.6404,-2.83],[0.6351,-3.06],[0.6292,-3.29],[0.623,-3.54],[0.6163,-3.81],[0.6113,-4.02],[0.6064,-4.23],[0.6018,-4.43],[0.5973,-4.62],[0.5931,-4.8],[0.589,-4.98],[0.5852,-5.15],[0.5816,-5.31]],[[0.6573,-1.44],[0.6643,-1.5],[0.6713,-1.57],[0.6784,-1.63],[0.6855,-1.7],[0.6926,-1.76],[0.6996,-1.83],[0.7067,-1.89],[0.7137,-1.94],[0.7207,-1.99],[0.7274,-2.04],[0.7338,-2.08],[0.7399,-2.12],[0.7458,-2.16],[0.7514,-2.19],[0.7567,-2.22],[0.7618,-2.24]],[[0.5816,-5.31],[0.5779,-5.49],[0.5745,-5.64],[0.5714,-5.79],[0.5686,-5.93],[0.5662,-6.05],[0.5641,-6.17],[0.5623,-6.26],[0.561,-6.35],[0.5577,-6.6],[0.5553,-6.88],[0.5535,-7.18],[0.5523,-7.48],[0.5516,-7.79],[0.5514,-8.08],[0.5516,-8.36],[0.5521,-8.61],[0.5543,-8.78],[0.5595,-8.95],[0.5674,-9.12],[0.5771,-9.29],[0.5883,-9.46],[0.6003,-9.61],[0.6125,-9.75],[0.6245,-9.86],[0.627,-9.88],[0.6294,-9.88],[0.6315,-9.87],[0.6335,-9.85],[0.6353,-9.82],[0.637,-9.79],[0.6386,-9.76],[0.6401,-9.73],[0.6439,-9.61],[0.6465,-9.41],[0.6481,-9.16],[0.6487,-8.87],[0.6487,-8.57],[0.6481,-8.27],[0.647,-7.99],[0.6457,-7.75],[0.6447,-7.66],[0.643,-7.54],[0.6405,-7.4],[0.6373,-7.24],[0.6337,-7.07],[0.6296,-6.87],[0.6251,-6.66],[0.6204,-6.44],[0.6183,-6.35],[0.6154,-6.25],[0.6117,-6.13],[0.6072,-6.0],[0.6019,-5.85],[0.5959,-5.69],[0.5891,-5.51],[0.5816,-5.31],[0.5816,-5.31]],[[0.7618,-2.24],[0.771,-2.28],[0.7791,-2.31],[0.7863,-2.32],[0.7925,-2.33],[0.7977,-2.33],[0.802,-2.32],[0.8053,-2.3],[0.8077,-2.28],[0.8185,-2.14],[0.8293,-1.98],[0.84,-1.8],[0.8504,-1.62],[0.8603,-1.44],[0.8694,-1.27],[0.8775,-1.12],[0.8844,-0.99],[0.8879,-0.9],[0.891,-0.8],[0.8937,-0.66],[0.8962,-0.49],[0.8986,-0.28],[0.901,-0.03],[0.9036,0.26],[0.9064,0.6],[0.907,0.69],[0.9074,0.77],[0.9077,0.86],[0.9078,0.93],[0.9077,1.0],[0.9075,1.07],[0.9072,1.13],[0.9068,1.19],[0.9028,1.48],[0.8958,1.74],[0.8865,1.95],[0.8757,2.14],[0.8642,2.29],[0.8527,2.4],[0.8419,2.49],[0.8328,2.55],[0.8262,2.55],[0.8197,2.48],[0.8133,2.37],[0.8071,2.21],[0.801,2.01],[0.7952,1.79],[0.7897,1.54],[0.7846,1.28],[0.7805,1.03],[0.7769,0.72],[0.7738,0.37],[0.771,-0.02],[0.7686,-0.46],[0.7664,-0.93],[0.7644,-1.43],[0.7626,-1.97],[0.7625,-2.0],[0.7624,-2.04],[0.7623,-2.07],[0.7622,-2.11],[0.7621,-2.14],[0.762,-2.17],[0.7619,-2.21],[0.7618,-2.24],[0.7618,-2.24]],[[0.7618,-2.24],[0.7612,-2.75],[0.7614,-3.24],[0.7623,-3.73],[0.7639,-4.19],[0.7659,-4.64],[0.7683,-5.07],[0.771,-5.47],[0.7738,-5.84],[0.7762,-6.09],[0.779,-6.32],[0.7821,-6.51],[0.7856,-6.67],[0.7892,-6.82],[0.7931,-6.94],[0.7971,-7.05],[0.8011,-7.15],[0.8082,-7.28],[0.8151,-7.38],[0.8219,-7.44],[0.8284,-7.47],[0.8346,-7.47],[0.8404,-7.46],[0.8457,-7.43],[0.8504,-7.39],[0.8528,-7.35],[0.8555,-7.27],[0.8585,-7.16],[0.8618,-7.01],[0.8656,-6.83],[0.8697,-6.62],[0.8743,-6.4],[0.8792,-6.15],[0.8836,-5.91],[0.8879,-5.6],[0.8923,-5.25],[0.8967,-4.84],[0.9011,-4.38],[0.9057,-3.88],[0.9104,-3.34],[0.9153,-2.76],[0.9184,-2.38],[0.9209,-2.05],[0.9231,-1.76],[0.9249,-1.49],[0.9265,-1.25],[0.9278,-1.02],[0.9291,-0.8],[0.9302,-0.58]],[[0.9302,-0.58],[0.9307,-0.48],[0.9312,-0.39],[0.9316,-0.3],[0.9321,-0.2],[0.9326,-0.1],[0.9332,0.01],[0.9337,0.11],[0.9343,0.23],[0.9357,0.34],[0.9384,0.4],[0.9421,0.43],[0.9466,0.43],[0.9519,0.4],[0.9577,0.35],[0.9639,0.29],[0.9702,0.22]],[[0.9302,-0.58],[0.9313,-0.49],[0.9323,-0.41],[0.9331,-0.35],[0.9338,-0.29],[0.9345,-0.24],[0.9351,-0.2],[0.9357,-0.17],[0.9364,-0.14],[0.9371,-0.1],[0.9378,-0.08],[0.9386,-0.05],[0.9394,-0.03],[0.9402,-0.0],[0.9411,0.02],[0.9421,0.04],[0.9431,0.06],[0.9458,0.09],[0.9487,0.12],[0.9519,0.15],[0.9553,0.17],[0.9588,0.19],[0.9625,0.21],[0.9664,0.22],[0.9702,0.22]],[[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9302,-0.58],[0.9299,-0.6]],[[0.9702,0.22],[0.9734,0.19],[0.9766,0.15],[0.9798,0.12],[0.9829,0.09],[0.9859,0.07],[0.9888,0.05],[0.9915,0.03],[0.9941,0.02],[0.9959,0.01],[0.9971,0.02],[0.9977,0.02],[0.9978,0.03],[0.9975,0.05],[0.9969,0.06],[0.9961,0.08],[0.9952,0.09],[0.9924,0.12],[0.9895,0.15],[0.9864,0.18],[0.9832,0.19],[0.98,0.21],[0.9768,0.22],[0.9735,0.22],[0.9702,0.22],[0.9702,0.22]]];
const S=DATA.S, J=DATA.J, N=S.length, MAX=9;

/* ---------- Texte ---------- */
const KAT={Macht:'Power',Kultur:'Culture',Wissen:'Knowledge',Seefahrt:'Seafaring',Glaube:'Faith',Orte:'Places',Natur:'Nature',Ursprung:'Origin',Sonstiges:'Other'};
const CH={'Hauptstraße':'Main road','Wohnstraße':'Residential street','verkehrsberuhigt':'Traffic-calmed street','Fußgängerzone':'Pedestrian zone','Fußweg':'Footpath','mit Treppen':'With stairs','Feldweg':'Dirt track'};
const fmtKm=m=>(m/1000).toLocaleString('en-GB',{minimumFractionDigits:1,maximumFractionDigits:1})+' km';
const fmtLen=m=>(m/1000).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})+' km';

/* ---------- Geometrie ---------- */
const LAT0=41.15, KX=111320*Math.cos(LAT0*Math.PI/180), KY=111320;
const dist=(a,b)=>Math.hypot((a[0]-b[0])*KY,(a[1]-b[1])*KX);
const junc=(a,b)=>J[Math.min(a,b)+','+Math.max(a,b)];
function stub(s,j){
 const [e0,e1]=S[s].x; const far=dist(j,e0)>dist(j,e1)?e0:e1; const dd=dist(j,far);
 let ux,uy;
 if(dd<1){ux=e1[0]-e0[0];uy=e1[1]-e0[1];const m=Math.hypot(ux*KY,uy*KX)||1;ux=ux*KY/m;uy=uy*KX/m;}
 else{ux=(far[0]-j[0])*KY/dd;uy=(far[1]-j[1])*KX/dd;}
 const L=Math.min(400,Math.max(120,dd));
 return [j[0]+ux*L/KY,j[1]+uy*L/KX];
}
function route(path){
 if(path.length===1){
  const [a,b]=S[path[0]].x, m=[(a[0]+b[0])/2,(a[1]+b[1])/2];
  const dd=dist(a,b)||1, L=Math.min(dd/2,300);
  const ux=(b[0]-a[0])*KY/dd, uy=(b[1]-a[1])*KX/dd;
  return [[m[0]-ux*L/KY,m[1]-uy*L/KX],[m[0]+ux*L/KY,m[1]+uy*L/KX]];
 }
 const js=[];for(let k=1;k<path.length;k++)js.push(junc(path[k-1],path[k]));
 return [stub(path[0],js[0]),...js,stub(path[path.length-1],js[js.length-1])];
}
const lenOf=p=>{let t=0;for(let i=1;i<p.length;i++)t+=dist(p[i-1],p[i]);return t;};
function segHits(ax,ay,bx,by,r){
 let t0=0,t1=1;const dx=bx-ax,dy=by-ay;
 const p=[-dx,dx,-dy,dy],q=[ax-r[0],r[2]-ax,ay-r[1],r[3]-ay];
 for(let i=0;i<4;i++){if(p[i]===0){if(q[i]<0)return false;}else{const t=q[i]/p[i];if(p[i]<0){if(t>t1)return false;if(t>t0)t0=t;}else{if(t<t0)return false;if(t<t1)t1=t;}}}
 return true;
}
const over=(a,b)=>a[0]<b[2]&&a[2]>b[0]&&a[1]<b[3]&&a[3]>b[1];

/* ---------- Download (normaler Browser-Download) ---------- */
const dl={async save({filename,data}){
  if(window.claude&&window.claude.use){const d=await window.claude.use('downloads');return d.save({filename,data});}
  const url=URL.createObjectURL(data),a=document.createElement('a');
  a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),4000);}};

/* ---------- Helfer ---------- */
const $=id=>document.getElementById(id);
const el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e;};
const NS='http://www.w3.org/2000/svg';
const mk=(t,a)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);return e;};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const slug=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const fold=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const SCREENS=['start','tree','result','card'];
const show=id=>SCREENS.forEach(s=>$(s).hidden=s!==id);
const canWalk=i=>S[i].a.length>0;
/* Beide Schnitte (regular + bold) vorladen: Die Namen werden mit der Breite des fetten Schnitts platziert; ist die Schrift noch nicht da, stimmen die Breiten später nicht und Texte überlagern sich */
const FONTS=Promise.all(['400','700'].flatMap(w=>['viroqua','"Source Serif 4"'].map(f=>document.fonts?document.fonts.load(w+' 15px '+f):0))).catch(()=>{});
const fontsReady=()=>Promise.race([FONTS,new Promise(r=>setTimeout(r,2500))]);

/* ---------- Linienformen pro Kategorie (Leas Entwurf) ---------- */
// Jede Form liefert Teilstriche {p:[[x,y],…], w:Stärke-Faktor, d:Strichmuster, r:runde Enden}; u = Grundeinheit
const SW=1.6;
function rng(seed){let x=(Math.abs(seed)*9301+49297)%233280||1;return()=>(x=(x*9301+49297)%233280)/233280;}
function form(kat,A,B,u,seed){
 const L=Math.hypot(B[0]-A[0],B[1]-A[1])||1, ux=(B[0]-A[0])/L, uy=(B[1]-A[1])/L, nx=-uy, ny=ux;
 const P=(s,o)=>[A[0]+ux*s+nx*o,A[1]+uy*s+ny*o], line=[A,B];
 switch(kat){
  case 'Wissen': return [{p:line,w:2.8}];
  case 'Kultur': return [{p:line,w:1,d:[12*u,5*u]}];
  case 'Orte': return [{p:line,w:2.2,d:[0.01,6*u],r:1}];
  case 'Ursprung':{const o=2.2*u;return [{p:[P(0,o),P(L,o)],w:.75},{p:[P(0,-o),P(L,-o)],w:.75}];}
  case 'Glaube':{const out=[{p:line,w:1}],n=Math.max(1,Math.round(L/(18*u)));
   for(let i=0;i<n;i++){const s=(i+.5)*L/n;out.push({p:[P(s,-4*u),P(s,3*u)],w:1});}return out;}
  case 'Macht':{const n=Math.max(2,Math.round(L/(3*u))),a=4.5*u,p=[A];
   for(let i=0;i<n;i++)p.push(P((i+.5)*L/n,i%2?a:-a));p.push(B);return [{p,w:.75}];}
  case 'Seefahrt':{const n=Math.max(1,Math.round(L/(52*u))),a=6*u,p=[];
   for(let i=0;i<=n*16;i++)p.push(P(L*i/(n*16),a*Math.sin(i/16*2*Math.PI)));return [{p,w:1}];}
  case 'Natur':{ // Leas gezeichnetes Gekritzel, entlang der Straße aneinandergesetzt, mal gespiegelt
   const R=rng(seed+1), TL=175*u*1.2, n=Math.max(1,Math.round(L/TL)), seg=L/n, ys=u*1.2*Math.min(1,seg/(TL*.6)), out=[];
   for(let t=0;t<n;t++){const fy=R()<.5?-1:1, fx=R()<.35;
    NATUR.forEach(sp=>out.push({p:sp.map(([x,y])=>P((t+(fx?1-x:x))*seg,y*ys*fy)),w:.75}));}
   return out;}
  default: return [{p:line,w:1}];
 }
}
function drawForms(g,parts,u,plain){parts.forEach(f=>{
 const a={class:'fm',d:'M'+f.p.map(q=>q[0].toFixed(1)+' '+q[1].toFixed(1)).join(' L'),'stroke-width':(SW*f.w*u).toFixed(2)};
 if(plain){a.fill='none';a.stroke='#000';a['stroke-linejoin']='round';}
 if(f.d)a['stroke-dasharray']=f.d.map(v=>v.toFixed(2)).join(' ');if(f.r)a['stroke-linecap']='round';
 g.appendChild(mk('path',a));});}

/* ---------- Weg zeichnen (wie die Postkarte) ---------- */
// liefert das SVG mit einer Gruppe pro Straße; plain = feste Farben für den Bild-Export
function drawRoute(path,VW,VH,U,fs,opts={}){
 const pts=route(path), xy=pts.map(p=>[p[1]*KX,-p[0]*KY]);
 const MX=VW*(opts.mx||.07),MY=VH*(opts.my||.08),aw=VW-2*MX,ah=VH-2*MY;
 const xs0=xy.map(p=>p[0]), ys0=xy.map(p=>p[1]);
 const x0=Math.min(...xs0),x1=Math.max(...xs0),y0=Math.min(...ys0),y1=Math.max(...ys0);
 const w=Math.max(x1-x0,1),h=Math.max(y1-y0,1), u0=Math.min(aw/w,ah/h);
 const sx=Math.min(aw/w,u0*3), sy=Math.min(ah/h,u0*3);
 const ox=VW/2-(x0+x1)/2*sx, oy=VH/2-(y0+y1)/2*sy;
 for(const p of xy){p[0]=p[0]*sx+ox;p[1]=p[1]*sy+oy;}
 const s=mk('svg',{viewBox:'0 0 '+VW+' '+VH,role:'img','aria-label':'Your walk through Porto, drawn as one line'});
 if(opts.plain)s.setAttribute('xmlns',NS);
 const forms=path.map((si,k)=>form(S[si].kat,xy[k],xy[k+1],U,si));
 forms.forEach((f,k)=>{const g=mk('g',{class:'street','data-k':k});drawForms(g,f,U,opts.plain);
  if(!opts.plain)g.appendChild(mk('path',{class:'hit',d:'M'+xy[k][0].toFixed(1)+' '+xy[k][1].toFixed(1)+' L'+xy[k+1][0].toFixed(1)+' '+xy[k+1][1].toFixed(1),'stroke-width':(28*U).toFixed(1)}));
  s.appendChild(g);});
 // Nummer am Beginn jeder Straße, nach außen vom Knick versetzt, nie auf einer Linie oder anderen Nummer
 const groups=[];
 path.forEach((si,k)=>{const g=groups[groups.length-1];
  if(g&&Math.hypot(xy[k][0]-xy[g.a][0],xy[k][1]-xy[g.a][1])<fs*.45)g.b=k;else groups.push({a:k,b:k});});
 const nrs=[],nums=[];
 groups.forEach(g=>{
  const p=xy[g.a];let vx=0,vy=0;
  for(const q of [xy[g.a-1],xy[g.b+1]]){if(!q)continue;const dx=q[0]-p[0],dy=q[1]-p[1],m=Math.hypot(dx,dy)||1;vx-=dx/m;vy-=dy/m;}
  let m=Math.hypot(vx,vy);
  if(m<0.2){const q=xy[g.b+1]||xy[g.a-1],dx=q[0]-p[0],dy=q[1]-p[1],mm=Math.hypot(dx,dy)||1;vx=-dy/mm;vy=dx/mm;m=1;}
  const lab=g.a===g.b?String(g.a+1):(g.a+1)+'/'+(g.b+1);
  const hw=lab.length*fs*.3+4, hh=fs*.6, base=Math.atan2(vy,vx);
  let pos=null;
  for(const d of [.85,1.15,1.5,1.95,2.45,3.1])for(let k=0;k<16&&!pos;k++){
   const a=base+(k%2?1:-1)*Math.ceil(k/2)*Math.PI/8, dd=fs*d+(lab.length-1)*fs*.2;
   const x=p[0]+Math.cos(a)*dd, y=p[1]+Math.sin(a)*dd, r=[x-hw,y-hh,x+hw,y+hh];
   if(r[0]<4||r[1]<4||r[2]>VW-4||r[3]>VH-4)continue;
   let hit=false;for(let i=1;i<xy.length&&!hit;i++)if(segHits(xy[i-1][0],xy[i-1][1],xy[i][0],xy[i][1],r))hit=true;
   if(hit||nrs.some(o=>over(o,r)))continue;
   pos=[x,y,r];
  }
  if(!pos)pos=[p[0]+vx/m*fs*.85,p[1]+vy/m*fs*.85,null];
  if(pos[2])nrs.push(pos[2]);
  nums.push([pos[0],pos[1],lab]);
  const t=mk('text',{class:'nr',x:pos[0].toFixed(1),y:pos[1].toFixed(1),'font-size':fs});
  if(opts.plain){t.setAttribute('fill','#000');t.setAttribute('font-family',"'viroqua','Source Serif 4','Times New Roman',serif");t.setAttribute('text-anchor','middle');t.setAttribute('dominant-baseline','central');}
  t.textContent=lab;if(!opts.plain)s.appendChild(t);
 });
 return {svg:s,xy,nums,forms,km:lenOf(pts)};
}

/* ---------- Zustand ---------- */
let path=[], opts=[], rootLab=null, busy=false, sheetFor=null, WALK=null, beginId=0;
const tree=$('tree'), stage=$('stage'), lines=tree.querySelector('svg.lines');
const TRANSITION=true;   // Animation Baum -> Ergebnis (auf false setzen, um sie auszuschalten)

/* ---------- Start ---------- */
// Start am Plakat-Standort (#strassenname im QR-Link) und Namenssuche: vorerst ausgeblendet, Logik bleibt
const BYSLUG={};S.forEach((s,i)=>{const k=slug(s.n);if(!(k in BYSLUG))BYSLUG[k]=i;});
function hashStreet(){const h=decodeURIComponent((location.hash||'').slice(1));const i=BYSLUG[h];return i!=null&&canWalk(i)?i:null;}
function updHere(){const i=hashStreet();$('hereBox').hidden=i==null;if(i!=null)$('hereName').textContent=S[i].n;}
addEventListener('hashchange',updHere);
$('rand').onclick=()=>{const c=[];for(let i=0;i<N;i++)if(S[i].a.length>=3)c.push(i);begin(c[Math.floor(Math.random()*c.length)]);};
$('here').onclick=()=>{const i=hashStreet();if(i!=null)begin(i);};
$('q').addEventListener('input',renderHits);
function renderHits(){
 const q=fold($('q').value.trim()), ul=$('hits');ul.innerHTML='';
 if(q.length<2)return;
 const hits=[];for(let i=0;i<N&&hits.length<8;i++)if(canWalk(i)&&fold(S[i].n).includes(q))hits.push(i);
 hits.forEach(i=>{const li=el('li'),b=el('button',null,S[i].n);b.type='button';b.onclick=()=>begin(i);li.appendChild(b);ul.appendChild(li);});
}

/* ---------- Entscheidungsbaum ---------- */
function rootPt(){const H=tree.clientHeight,W=tree.clientWidth;return [W/2, H*(W<600?0.8:0.76)];}
// Platziert Namen ohne Überschneidung: jeder Name sucht die freie Stelle, die seiner Ideal-Position am nächsten liegt
function place(labs){
 const [rx,ry]=rootPt(), W=tree.clientWidth, H0=tree.clientHeight, n=labs.length;
 const reserve=Math.max(0,Math.min(120,ry+42-(H0-222)+14)), top=Math.max(48,H0*0.07)+reserve, maxR=ry-top-24, H=30, P=4;
 const spread=n===1?0:Math.min(W/2-40,180+n*25);
 const tiers=shuffle([1,.68,.4]);
 const rects=[],segs=[],out=[];
 const rr=rootLab?rootLab.getBoundingClientRect():null, tr=tree.getBoundingClientRect();
 if(rr)rects.push([rr.left-tr.left-P,rr.top-tr.top-P,rr.right-tr.left+P,rr.bottom-tr.top+P]);
 labs.forEach((lab,k)=>{
  lab.classList.add('b');const w=lab.offsetWidth;lab.classList.remove('b');lab.style.minWidth=w+'px';lab.style.textAlign='center';   // Breite des fetten Schnitts reservieren: Auswahl (fett) verschiebt nichts
  const ix=rx+(n===1?0:(-1+2*k/(n-1)))*spread+(Math.random()-.5)*16;
  const iy=ry-maxR*(tiers[k%3]+(Math.random()-.5)*.06);
  const c=[];
  for(let x=12+w/2;x<=W-12-w/2;x+=14)for(let y=top+H;y<=ry-46;y+=10)c.push([x,y,(x-ix)**2+(y-iy)**2*1.6]);
  c.sort((a,b)=>a[2]-b[2]);
  let best=null;
  for(const [x,y] of c){
   const r=[x-w/2-P,y-H-P,x+w/2+P,y+P];
   if(rects.some(o=>over(o,r)))continue;
   if(rects.slice(rr?1:0).some(o=>segHits(rx,ry,x,y,o)))continue;
   if(segs.some(s=>segHits(s[0],s[1],s[2],s[3],r)))continue;
   best=[x,y,r];break;
  }
  if(!best){out.push(null);return;}
  rects.push(best[2]);segs.push([rx,ry,best[0],best[1]]);out.push([best[0],best[1]]);
 });
 return out;
}
function updBar(){$('km').textContent=fmtKm(lenOf(route(path)));$('fin').hidden=path.length<2;}
async function begin(i){
 const me=++beginId;
 path=[i];WALK=null;hideSheet();
 lines.innerHTML='';tree.querySelectorAll('.lab').forEach(e=>e.remove());
 show('tree');
 rootLab=el('button','lab root',S[i].n);rootLab.type='button';
 const [rx,ry]=rootPt();rootLab.style.left=rx+'px';rootLab.style.top=ry+'px';
 rootLab.onclick=e=>{e.stopPropagation();openSheet(path[path.length-1],null,rootLab);};
 stage.appendChild(rootLab);
 updBar();busy=true;
 await fontsReady();   // erst platzieren, wenn die Schrift da ist
 if(me!==beginId||tree.hidden)return;
 busy=false;growOptions();
}
function growOptions(){
 const cur=path[path.length-1];
 const free=shuffle(S[cur].a.filter(j=>!path.includes(j)));
 const [rx,ry]=rootPt();
 opts=[];
 if(!free.length){setTimeout(finish,700);return;}
 const labs0=free.map(i=>{const l=el('button','lab opt',S[i].n);l.type='button';stage.appendChild(l);return l;});
 const pts0=place(labs0);
 labs0.forEach((l,k)=>{if(!pts0[k])l.remove();});
 const keep=pts0.map((p,k)=>p?k:-1).filter(k=>k>=0);
 if(!keep.length){setTimeout(finish,700);return;}
 const st=Math.min(.08,.6/keep.length);
 keep.forEach((k0,k)=>{
  const i=free[k0], lab=labs0[k0], [x,y]=pts0[k0];
  lab.style.left=x+'px';lab.style.top=y+'px';
  const ln=mk('line',{x1:rx,y1:ry,x2:x,y2:y});
  const L=Math.hypot(x-rx,y-ry);
  ln.style.strokeDasharray=L;ln.style.strokeDashoffset=L;
  lines.appendChild(ln);
  requestAnimationFrame(()=>{ln.style.transition='stroke-dashoffset .7s cubic-bezier(.3,.7,.2,1) '+(k*st)+'s, opacity .4s ease';ln.style.strokeDashoffset=0;
   setTimeout(()=>lab.classList.add('in'),350+k*st*1000);});
  // Tippen auf einen Namen zeigt seine Infos; auch wenn schon eine andere Info offen ist
  lab.onclick=e=>{e.stopPropagation();if(busy)return;
   if(sheetFor===k&&!$('sheet').classList.contains('off')){hideSheet();choose(k);return;}   // erster Tipp zeigt die Info, zweiter Tipp auf denselben Namen wählt die Straße
   openSheet(i,k,lab);};
  opts.push({i,lab,ln});
 });
}
function openSheet(i,k,lab){
 tree.querySelectorAll('.lab').forEach(l=>l.classList.toggle('sel',l===lab));
 sheetFor=k;const s=S[i];
 $('shName').textContent=s.n;$('shKat').textContent=KAT[s.kat];
 $('shBn').textContent='Named after '+s.bn;
 $('shCh').textContent=CH[s.ch]||s.ch;$('shLen').textContent=fmtLen(s.l);
 $('shGo').hidden=k==null;
 $('shEnd').hidden=k==null||path.length+1>=MAX||S[i].a.some(j=>j!==i&&!path.includes(j));
 const wasOpen=!$('sheet').classList.contains('off');
 $('sheet').classList.remove('off');
 if(wasOpen){stage.style.transition='none';liftTree();void stage.offsetHeight;stage.style.transition='';}   // Karte schon offen: Baum sofort nachrücken, damit sich Texte nie überlagern
 else liftTree();
}
// Beim Öffnen der Info rückt der ganze Baum nach oben, damit Wurzel und Striche über der Karte bleiben (nichts wird abgeschnitten)
function liftTree(){
 const sheet=$('sheet');sheet.classList.remove('tight');
 // so weit nach oben, wie die Karte es braucht, aber nie so weit, dass der oberste Name aus dem Bild rutscht
 const calc=()=>{const [,ry]=rootPt(),need=ry+42+14-(tree.clientHeight-sheet.offsetHeight);
  let top=1e9;stage.querySelectorAll('.lab').forEach(l=>{if(!l.classList.contains('out')&&!l.classList.contains('root'))top=Math.min(top,parseFloat(l.style.top)-l.offsetHeight-2);});
  return [need,top===1e9?need:Math.max(0,top-6)];};
 let [need,room]=calc();
 if(need>room+1){sheet.classList.add('tight');[need,room]=calc();}   // reicht der Platz nicht: "Named after" auf zwei Zeilen kürzen
 stage.style.transform=need>0?'translateY('+(-Math.min(need,room))+'px)':'';
}
function hideSheet(){$('sheet').classList.add('off');stage.style.transform='';tree.querySelectorAll('.lab').forEach(l=>l.classList.remove('sel'));sheetFor=null;}
// Tippen außerhalb (leere Fläche) schließt die Info
tree.addEventListener('click',e=>{if(!$('sheet').contains(e.target)&&!e.target.closest('.lab'))hideSheet();});
$('shGo').onclick=e=>{e.stopPropagation();if(sheetFor!=null){const k=sheetFor;hideSheet();choose(k);}};
function choose(k){
 busy=true;
 const o=opts[k];
 opts.forEach((p,m)=>{p.ln.classList.add('out');if(m!==k)p.lab.classList.add('out');});
 rootLab.classList.add('out');
 const old=rootLab, [rx,ry]=rootPt();
 o.lab.classList.remove('opt','in','sel');o.lab.classList.add('root');
 o.lab.style.left=rx+'px';o.lab.style.top=ry+'px';
 path.push(o.i);updBar();
 setTimeout(()=>{
  old.remove();opts.forEach((p,m)=>{p.ln.remove();if(m!==k)p.lab.remove();});
  rootLab=o.lab;const me=rootLab;rootLab.onclick=e=>{e.stopPropagation();openSheet(path[path.length-1],null,me);};
  busy=false;
  if(path.length>=MAX){setTimeout(finish,500);return;}
  growOptions();
 },750);
}
addEventListener('resize',()=>{
 if($('tree').hidden||busy||!rootLab)return;
 const [rx,ry]=rootPt();rootLab.style.left=rx+'px';rootLab.style.top=ry+'px';
 opts.forEach(o=>{o.lab.remove();o.ln.remove();});lines.innerHTML='';hideSheet();growOptions();
});
$('fin').onclick=e=>{e.stopPropagation();if(!busy)finish();};

/* ---------- Dein Weg ---------- */
function closeItems(){
 $('list').querySelectorAll('li').forEach(x=>{x.classList.remove('open');x.querySelector('.more').hidden=true;x.querySelector('.head').setAttribute('aria-expanded','false');});
 $('drawing').classList.remove('focus');$('list').classList.remove('focus');$('legend').classList.remove('focus');
 $('list').querySelectorAll('li').forEach(x=>x.classList.remove('hl'));$('legend').querySelectorAll('li').forEach(x=>x.classList.remove('on'));$('drawing').querySelectorAll('g.street').forEach(g=>g.classList.remove('on'));
}
/* ---------- Legende: nur die Linienformen, die im Weg vorkommen (Reihenfolge wie in Leas Legende) ---------- */
const KAT_ORDER=['Macht','Kultur','Wissen','Seefahrt','Glaube','Orte','Natur','Ursprung','Sonstiges'];
const legendCats=p=>KAT_ORDER.filter(k=>p.some(si=>S[si].kat===k));
// Musterlinie einer Kategorie (waagerecht) mit Höhenmaß; u = Grundeinheit wie in der Zeichnung
function legendSample(kat,Lw,u,pad){
 const parts=form(kat,[0,0],[Lw,0],u,7);let y0=1e9,y1=-1e9;
 parts.forEach(f=>f.p.forEach(q=>{y0=Math.min(y0,q[1]);y1=Math.max(y1,q[1]);}));
 return {parts,cy:(y0+y1)/2,h:Math.ceil(y1-y0)+pad};
}
// Wie auf dem Plakat: Linie oben, Name darunter, die Linie ist so breit wie der Name; mehrere nebeneinander (umbrechen bei Platzmangel)
function buildLegend(path){
 const lg=$('legend');lg.innerHTML='';const u=.95;
 const items=legendCats(path).map(kat=>{const li=el('li'),sp=el('span',null,KAT[kat]);li.dataset.kat=kat;li.appendChild(sp);lg.appendChild(li);return {kat,li,sp};});
 items.forEach(x=>{x.Lw=Math.max(36,Math.ceil(x.sp.getBoundingClientRect().width));x.sm=legendSample(x.kat,x.Lw,u,6);});
 const H=Math.max(16,...items.map(x=>x.sm.h));   // gleiche Höhe, damit alle Namen auf einer Linie stehen
 items.forEach(x=>{
  const sv=mk('svg',{viewBox:'0 '+(x.sm.cy-H/2)+' '+x.Lw+' '+H,width:x.Lw,height:H,'aria-hidden':'true'});
  const g=mk('g');drawForms(g,x.sm.parts,u,false);sv.appendChild(g);x.li.insertBefore(sv,x.sp);
 });
}
function finish(){
 if($('tree').hidden)return;   // nur einmal, und nur aus dem Baum (Timer + Tippen dürfen sich nicht doppeln)
 const resEl=$('result'),box=$('drawing');
 const animate=TRANSITION&&!matchMedia('(prefers-reduced-motion:reduce)').matches;
 if(animate)resEl.classList.add('anim');   // vorher verstecken: keine Namen vor dem Ende der Animation
 hideSheet();show('result');resEl.scrollTop=0;$('note').textContent='';box.innerHTML='';box.classList.remove('focus');
 // Zeichnung in voller Breite; die Straßenliste darunter scrollt
 buildLegend(path);   // zuerst, damit die Karte weiß, wie viel Platz die Legende braucht
 const W0=Math.min(640,resEl.clientWidth-32)||360, phone=W0<600;
 const VW=phone?1000:1480, VH=phone?1180:1050;
 // Karte und Legende stehen fest, nur die Liste scrollt: die Karte nimmt den Platz, den Legende und mindestens vier Listenzeilen lassen
 const room=resEl.querySelector('.res-in').clientHeight-$('legend').offsetHeight-20-84;
 const dw=Math.min(W0,Math.max(160,room)*VW/VH), k=dw/VW, U=0.95/k;
 box.style.width=dw+'px';
 const R=drawRoute(path,VW,VH,U,10/k);
 if(animate)R.svg.classList.add('hide-nr');   // Zahlen von Anfang an unsichtbar (kein Ausblenden sichtbar)
 box.appendChild(R.svg);WALK={path:path.slice(),km:R.km};
 WALK.blobP=walkImage().catch(()=>null);   // Bild schon vorbereiten, damit "save" sofort reagiert
 $('rKm').textContent=fmtKm(R.km);
 {const p0=WALK.path;if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(WALK&&WALK.path===p0)buildLegend(p0);});}   // nochmal, wenn die Schrift geladen ist (Breite der Namen)
 const ol=$('list');ol.innerHTML='';ol.classList.remove('focus');
 const items=[];
 function toggle(k){
  if(resEl.classList.contains('anim'))return;
  const it=items[k],open=it.more.hidden;closeItems();
  if(open){it.li.classList.add('open');it.more.hidden=false;it.b.setAttribute('aria-expanded','true');
   box.classList.add('focus');$('list').classList.add('focus');$('legend').classList.add('focus');box.querySelectorAll('g.street').forEach(g=>g.classList.toggle('on',+g.dataset.k===k));
   {const kat=KAT[S[WALK.path[k]].kat];$('legend').querySelectorAll('li').forEach(l=>l.classList.toggle('on',KAT[l.dataset.kat]===kat));}   // Linienform der gewählten Straße bleibt in der Legende schwarz
   try{it.li.scrollIntoView({block:'nearest',behavior:'smooth'});}catch(e){}}
 }
 path.forEach((si,k)=>{
  const s=S[si], li=el('li'), b=el('button','head');b.type='button';b.setAttribute('aria-expanded','false');
  b.appendChild(el('span','n',String(k+1)));b.appendChild(el('span','nm',s.n));
  const more=el('div','more');more.hidden=true;
  more.appendChild(el('span',null,'Named after '+s.bn));
  more.appendChild(el('span',null,CH[s.ch]||s.ch));
  more.appendChild(el('span',null,fmtLen(s.l)));
  b.onclick=e=>{e.stopPropagation();toggle(k);};
  li.appendChild(b);li.appendChild(more);ol.appendChild(li);items.push({li,b,more});
 });
 // Auch ein Tipp auf die Linie der Straße hebt sie hervor und klappt den Text auf
 box.querySelectorAll('g.street').forEach(g=>{g.onclick=e=>{e.stopPropagation();toggle(+g.dataset.k);};});
 if(animate)assemble(R,U,()=>{});
}
/* ---------- Übergang: der Weg wird Straße für Straße gebaut ---------- */
// Kein Text während der Animation: der Weg steht groß in der Mitte des ganzen Bildschirms und wird Straße für Straße gebaut (ruhig, mit weichem Tempo).
// Danach erscheinen die Zahlen; dann rückt die Zeichnung an ihren Platz, während Liste und Leisten einblenden. Tippen überspringt.
function assemble(R,U,done){
 const svg=R.svg, box=$('drawing'), resEl=$('result'), gs=[...svg.querySelectorAll('g.street')], n=gs.length;
 // Zeichnung groß in die Bildschirmmitte
 const rr=resEl.getBoundingClientRect(), br=box.getBoundingClientRect();
 const s=Math.max(1,Math.min((rr.width-24)/br.width,(rr.height-48)/br.height));
 const dx=(rr.left+rr.width/2)-(br.left+br.width/2), dy=(rr.top+rr.height/2)-(br.top+br.height/2);
 box.style.transition='none';box.style.transformOrigin='50% 50%';
 box.style.transform='translate('+dx+'px,'+dy+'px) scale('+s+')';
 const defs=mk('defs');svg.insertBefore(defs,svg.firstChild);
 const it=gs.map((g,k)=>{
  const A=R.xy[k],B=R.xy[k+1],len=Math.hypot(B[0]-A[0],B[1]-A[1])||1,th=Math.atan2(B[1]-A[1],B[0]-A[0]);
  const cp=mk('clipPath',{id:'asm'+k}), r=mk('rect',{x:-4*U,y:-90*U,width:0,height:180*U,transform:'translate('+A[0]+' '+A[1]+') rotate('+(th*180/Math.PI)+')'});
  cp.appendChild(r);defs.appendChild(cp);g.setAttribute('clip-path','url(#asm'+k+')');
  return {r,len};
 });
 const d=Math.min(1,5/n), st=d*.85, total=(n-1)*st+d;
 const soft=p=>.5-.5*Math.cos(Math.PI*p);
 const apply=t=>it.forEach((q,k)=>{const p=Math.max(0,Math.min(1,(t-k*st)/d));q.r.setAttribute('width',(q.len+8*U)*soft(p));});
 let t0=null,skipped=false;
 const settle=()=>{
  box.style.transition=skipped?'none':'transform 1.3s cubic-bezier(.45,0,.2,1)';box.style.transform='none';
  resEl.classList.remove('anim');
  setTimeout(()=>{box.style.transition='';box.style.transform='';box.style.transformOrigin='';},skipped?0:1400);
  done();
 };
 const end=()=>{
  gs.forEach(g=>g.removeAttribute('clip-path'));defs.remove();
  svg.classList.remove('hide-nr');                                           // erst die Zahlen ...
  setTimeout(settle,skipped?0:1300);                                         // ... dann rückt alles an seinen Platz
 };
 svg.addEventListener('pointerdown',()=>{skipped=true;},{once:true});
 const step=now=>{if(t0===null)t0=now+400;const t=skipped?total:Math.max(0,(now-t0)/1000);apply(Math.min(t,total));if(t<total)requestAnimationFrame(step);else end();};
 apply(0);requestAnimationFrame(step);
}
// Tippen außerhalb schließt die aufgeklappte Straße
$('result').addEventListener('click',e=>{if(!e.target.closest('.list li.open'))closeItems();});
// Tipp auf einen Eintrag der Legende: alle Straßen dieser Kategorie schwarz (Karte und Liste), der Rest blass; nochmal tippen hebt es auf
$('legend').addEventListener('click',e=>{
 const li=e.target.closest('li');if(!li||!WALK||$('result').classList.contains('anim'))return;
 e.stopPropagation();
 const was=li.classList.contains('on')&&!$('list').querySelector('li.open');
 closeItems();if(was)return;
 const kat=li.dataset.kat;
 $('drawing').classList.add('focus');$('list').classList.add('focus');$('legend').classList.add('focus');li.classList.add('on');
 $('drawing').querySelectorAll('g.street').forEach(g=>g.classList.toggle('on',S[WALK.path[+g.dataset.k]].kat===kat));
 $('list').querySelectorAll(':scope>li').forEach((x,k)=>x.classList.toggle('hl',S[WALK.path[k]].kat===kat));
});
$('again').onclick=e=>{e.stopPropagation();show('start');};

/* Bild zum Mitnehmen: Handy-Hochformat, Weg oben, nummerierte Straßenliste unten */
function strokeParts(g,parts,u,ox,oy){
 g.save();g.translate(ox,oy);g.strokeStyle='#000';g.lineJoin='round';
 parts.forEach(f=>{g.beginPath();f.p.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));
  g.lineWidth=SW*f.w*u;g.lineCap=f.r?'round':'butt';g.setLineDash(f.d?f.d:[]);g.stroke();});
 g.restore();
}
async function walkImage(){
 const W=1080,H=1920,c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d');
 g.fillStyle='#fff';g.fillRect(0,0,W,H);
 try{await Promise.all([document.fonts.load('400 34px "viroqua"'),document.fonts.load('400 34px "Source Serif 4"')]);}catch(e){}
 const F=sz=>sz+'px "viroqua","Source Serif 4","Times New Roman",serif';
 const n=WALK.path.length, ROW=50, uL=2.6, GX=44, maxW=W-144;
 g.font=F(34);
 const items=legendCats(WALK.path).map(kat=>{const w=Math.ceil(g.measureText(KAT[kat]).width),sm=legendSample(kat,w,uL,10);return {kat,w,parts:sm.parts,cy:sm.cy,sh:sm.h};});
 const rows=[];{let cur=[],cw=0;items.forEach(x=>{if(cur.length&&cw+GX+x.w>maxW){rows.push(cur);cur=[];cw=0;}cw+=(cur.length?GX:0)+x.w;cur.push(x);});if(cur.length)rows.push(cur);}
 rows.forEach(r=>{r.sb=Math.max(28,...r.map(x=>x.sh));r.h=r.sb+10+36+30;});
 const legH=rows.reduce((a,r)=>a+r.h,0);
 const VW=1000, VH=Math.max(600,Math.min(1120,H-150-60-n*ROW-30-legH-130));   // Zeichnung nimmt den Platz, den Liste + Legende lassen
 g.fillStyle='#000';g.font=F(34);g.textBaseline='alphabetic';
 g.fillText('Porto',72,110);
 g.textAlign='right';g.fillText(fmtKm(WALK.km),W-72,110);g.textAlign='left';
 const R=drawRoute(WALK.path,VW,VH,2.6,22,{plain:true});
 const xml=new XMLSerializer().serializeToString(R.svg).replace('<svg','<svg width="'+VW+'" height="'+VH+'"');
 const img=new Image();
 await new Promise((ok,no)=>{img.onload=ok;img.onerror=no;img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(xml);});
 g.drawImage(img,40,150,W-80,(W-80)*VH/VW);
 {const sc=(W-80)/VW;g.font=F(22);g.textAlign='center';g.textBaseline='middle';
  R.nums.forEach(([x,y,t])=>g.fillText(t,40+x*sc,150+y*sc));g.textAlign='left';g.textBaseline='alphabetic';}
 // Straßenliste unten verankert, direkt über der Legende: wenige Straßen beginnen weiter unten, viele weiter oben
 const blk=rows.reduce((a,r)=>a+r.sb+10+34,0)+30*(rows.length-1);
 const legY=Math.max(150+(W-80)*VH/VW+60+n*ROW+50,H-85-blk);   // Legende ganz unten, gleicher Randabstand wie Porto/km oben
 let y=legY-50-n*ROW;
 WALK.path.forEach((si,k)=>{
  g.font=F(22);g.fillStyle='#000';g.fillText(String(k+1),72,y+12);
  g.font=F(34);
  let nm=S[si].n;while(g.measureText(nm).width>W-200&&nm.length>4)nm=nm.slice(0,-2);if(nm!==S[si].n)nm+='…';
  g.fillText(nm,110,y+12);y+=ROW;
 });
 y=legY;
 rows.forEach(r=>{
  let ox=72;
  r.forEach(x=>{
   strokeParts(g,x.parts,uL,ox,y+r.sb/2-x.cy);
   g.font=F(34);g.fillStyle='#000';g.textBaseline='top';g.fillText(KAT[x.kat],ox,y+r.sb+10);g.textBaseline='alphabetic';
   ox+=x.w+GX;
  });
  y+=r.h;
 });
 return await new Promise(r=>c.toBlob(r,'image/png'));
}
let saving=false;
function showShot(blob){
 const u=URL.createObjectURL(blob);$('shotImg').src=u;$('shot').hidden=false;
 $('shotClose').onclick=()=>{$('shot').hidden=true;$('shotImg').removeAttribute('src');URL.revokeObjectURL(u);};
}
$('saveImg').onclick=async e=>{
 e.stopPropagation();if(saving)return;saving=true;
 const note=$('note');note.textContent='';
 try{
  const blob=(WALK.blobP&&await WALK.blobP)||await walkImage();
  const file=new File([blob],'rua-a-rua-walk.png',{type:'image/png'});
  const touch=matchMedia('(pointer:coarse)').matches;
  // Handy: Teilen-Menü ("Bild sichern"); falls nicht möglich, das Bild groß zeigen (gedrückt halten zum Sichern). Computer: normaler Download.
  if(touch&&navigator.canShare&&navigator.canShare({files:[file]})){
   try{await navigator.share({files:[file]});return;}catch(err){if(err&&err.name==='AbortError')return;}
  }
  if(touch){showShot(blob);return;}
  await dl.save({filename:'rua-a-rua-walk.png',data:blob});
  note.textContent='Saved';setTimeout(()=>{if(note.textContent==='Saved')note.textContent='';},2500);
 }catch(err){note.textContent='Could not save ('+(err&&err.name||'error')+')';}
 finally{saving=false;}
};

/* ---------- Postkarte: vorerst nicht im Interface, aufrufbar über postcard() ---------- */
let CARD=null;
const U=2.2;
function postcard(){
 show('card');$('note2').textContent='';
 const pc=$('pc');pc.classList.remove('flip');
 const front=$('front'),back=$('backFace');front.innerHTML='';back.innerHTML='';
 const R=drawRoute(WALK.path,1480,1050,U,28,{mx:.07,my:.09});
 front.appendChild(R.svg);
 const ol=el('ol');WALK.path.forEach(i=>ol.appendChild(el('li',null,S[i].n)));
 back.appendChild(el('span','porto','Porto'));back.appendChild(ol);back.appendChild(el('div','km',fmtKm(R.km)));
 CARD={nums:R.nums,forms:R.forms,names:WALK.path.map(i=>S[i].n),km:fmtKm(R.km)};
}
$('back').onclick=()=>show('result');
$('flip').onclick=()=>$('pc').classList.toggle('flip');
$('pc').onclick=()=>$('pc').classList.toggle('flip');
$('pc').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('pc').classList.toggle('flip');}};
/* PDF: A4, zwei Seiten, Postkarte (A6 quer) exakt mittig, damit Vorder- und Rückseite beim Duplexdruck deckungsgleich sind */
function buildPdf(){
 const doc=new window.jspdf.jsPDF({unit:'mm',format:'a4',orientation:'portrait'});
 const W=148,H=105,X=(210-W)/2,Y=(297-H)/2,k=W/1480;
 const marks=()=>{doc.setDrawColor(0);doc.setLineWidth(0.15);const g=3,l=7;
  for(const [cx,cy,sx,sy] of [[X,Y,-1,-1],[X+W,Y,1,-1],[X,Y+H,-1,1],[X+W,Y+H,1,1]]){
   doc.line(cx+sx*g,cy,cx+sx*(g+l),cy);doc.line(cx,cy+sy*g,cx,cy+sy*(g+l));}};
 marks();
 doc.setLineJoin('round');
 CARD.forms.forEach(parts=>parts.forEach(f=>{const Q=f.p.map(p=>[X+p[0]*k,Y+p[1]*k]);
  doc.setLineWidth(SW*f.w*U*k);doc.setLineCap(f.r?'round':'butt');doc.setLineDashPattern(f.d?f.d.map(v=>v*k):[],0);
  doc.lines(Q.slice(1).map((p,i)=>[p[0]-Q[i][0],p[1]-Q[i][1]]),Q[0][0],Q[0][1],[1,1],'S',false);}));
 doc.setLineDashPattern([],0);doc.setLineCap('butt');
 doc.setFont('times','normal');doc.setTextColor(0);doc.setFontSize(8);
 CARD.nums.forEach(([x,y,t])=>doc.text(t,X+x*k,Y+y*k,{align:'center',baseline:'middle'}));
 doc.addPage();marks();
 const lh=4.1, base=Y+H-H*0.06, n=CARD.names.length, lx=X+W*0.06;
 doc.setFontSize(8.5);doc.setTextColor(90);doc.text('Porto',lx,Y+H*0.06+3);doc.setTextColor(0);
 CARD.names.forEach((nm,i)=>{const y=base-(n-1-i)*lh;
  doc.setFontSize(6.6);doc.text(String(i+1),lx,y);
  doc.setFontSize(8.5);doc.text(nm,lx+5,y);});
 doc.setFontSize(8.5);doc.text(CARD.km,X+W-W*0.06,base,{align:'right'});
 return doc;
}
$('pdf').onclick=async()=>{
 const note=$('note2');note.textContent='';
 if(!CARD||!window.jspdf){note.textContent='The PDF tool did not load. Please reload the page.';return;}

 try{await dl.save({filename:'rua-a-rua-postcard.pdf',data:buildPdf().output('blob')});note.textContent='PDF saved. Print it double-sided on A4.';}
 catch(e){note.textContent=e&&e.code==='declined'?'':'The PDF could not be saved. Please try again.';}
};

/* ---------- Los ---------- */
updHere();
