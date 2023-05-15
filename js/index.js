const data = []

function convertDateFormat(i) {
   return   moment(i).format('DD MMM YYYY');
}

let input = myForm.myInput;
let reader = new FileReader;
const tbody = document.querySelector('.tbody')
const id = document.querySelector('.id')

input.addEventListener('change', onChange);

function onChange(event) {
  let file = event.target.files[0];
  reader.readAsText(file);
  reader.onload = onLoad;
}


function onLoad() {
  let result = reader.result; // Obtengo el texto

  let lineas = result.split('\n');
 
  tbody.innerHTML = ''
  id.innerHTML = ''

  const h1 = document.createElement('h1')
  h1.classList.add('h1')

  Invoicenumber = `${result.substring(47, 48)}-${result.substring(48, 51)}-${result.substring(51, 56)}`
  Accountnumber = `${result.substring(0, 4)}-${result.substring(4, 8)}-${result.substring(8, 9)}` 
  InvoiceDate = result.substring(39, 47)

  //console.log(moment(InvoiceDate).format('DD MMM YYYY'))
  
  const titulo = `
    <p> Invoice Number: ${ Invoicenumber} </p>
    <p> Invoice Date: ${ convertDateFormat(InvoiceDate)} </p>
    <p> Account Number: ${ Accountnumber} </p>
  `
  
    //h1.innerHTML = titulo;
    //id.append(h1)

 
    //console.log (lineas)

  for (let linea of lineas) {

    data.push({    Taxidnumber : linea.substring(9, 39),
      Invoiceamount : linea.substring(56, 67),
      Freightamount : linea.substring(67, 78),
      DutyTaxamount : linea.substring(78, 89),
      Handling : linea.substring(89, 100),
      Discount : linea.substring(100, 111),
      CurrencyCode : linea.substring(111, 114),
      Shipdate : linea.substring(114, 122),
      AWBnumber : linea.substring(122, 134),
      Reference : linea.substring(134, 173),
      Shippername : linea.substring(173, 203),
      Shippercompanyname : linea.substring(203, 233),
      ShipperAddress1 : linea.substring(233, 263),
      ShipperAddress2 : linea.substring(263, 293),
      ShipperCity : linea.substring(293, 308),
      Shipperstatecode : linea.substring(308, 310),
      Shipperpostalcode : linea.substring(310, 320),
      Shippercountrycode : linea.substring(320, 322),
      Consigneename : linea.substring(322, 352),
      Consigneecompanyname : linea.substring(352, 382),
      Consigneeaddress1 : linea.substring(382, 412),
      Consigneeaddress2 : linea.substring(412, 442),
      ConsigneeCity : linea.substring(442, 457),
      Consigneestatecode : linea.substring(457, 459),
      Consigneepostalcode : linea.substring(459, 469),
      Consigneecountrycode : linea.substring(469, 471),
      Piecescount : linea.substring(471, 476),
      RatedWeight : Number(`${linea.substring(476, 483)}.${linea.substring(483, 485)}`),
      ServiceCode : linea.substring(485, 487),
      ServicePakDescription : (linea.substring(487, 537)).substring(0,6),
      PaymentTypeCode : linea.substring(537, 538),
      PaymentTypeDescription : linea.substring(538, 553),
      WeightCode : linea.substring(553, 554),
      PodConsigneesignature : linea.substring(554, 569),
      PODdate : linea.substring(569, 577),
      PODtime : `${linea.substring(577, 579)}:${linea.substring(579, 581)}`,
      RouteRoutecodeINOUT : `${linea.substring(581, 584)}/${linea.substring(584, 587)}`,
      DTFlag : linea.substring(587, 588),
      Rebillreasoncode : linea.substring(588, 591),
      Rebillreasondescription : linea.substring(591, 891),
      CustomerPreferredWeight : linea.substring(891, 900),
      CustomerPreferredWeightType : linea.substring(900, 903),
      BundleNumber : linea.substring(903, 911),
      GroundMultiweightShipmentGroupIndictator : linea.substring(911, 924),
      ExchangeRateAirWaybillLevel : linea.substring(924, 938),
      OriginCurrency : linea.substring(938, 941),
      FILLERNonBrazil : linea.substring(941, 991),
      NetCharges : Number(`${linea.substring(992, 1000)}.${linea.substring(1000, 1002)}`),
      Chargescount : linea.substring(1002, 1004),
      Chargesrecord : linea.substring(1004, 1007),
      FuelSurcharge : linea.substring(1007, 1047),
      AmountFuelSurcharge : Number(`${linea.substring(1047, 1057)}.${linea.substring(1057, 1059)}`),
      TransportationCharges : linea.substring(1062, 1102),
      AmountTransportationCharges : Number(`${linea.substring(1102, 1112)}.${linea.substring(1112, 1114)}`),
      Discount1 : linea.substring(1117, 1157),
      AmountDiscount : Number(`${linea.substring(1157, 1167)}.${linea.substring(1167, 1169)}`),
      ShipSave : linea.substring(1172, 1212),
      AmountShipSave : Number(`${linea.substring(1212, 1222)}.${linea.substring(1222, 1224)}`),
      PeakSurcharge : linea.substring(1227, 1267),
      AmountPeakSurcharge : Number(`${linea.substring(1267, 1277)}.${linea.substring(1277, 1279)}`)
    })
  
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const content = ` 
       <td class=desc> <p class=title>${linea.substring(0, 9)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(9, 39)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(39, 47)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(47, 56)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(56, 67)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(67, 78)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(78, 89)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(89, 100)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(100, 111)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(111, 114)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(114, 122)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(122, 134)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(134, 173)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(173, 203)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(203, 233)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(233, 263)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(263, 293)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(293, 308)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(308, 310)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(310, 320)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(320, 322)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(322, 352)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(352, 382)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(382, 412)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(412, 442)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(442, 457)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(457, 459)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(459, 469)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(469, 471)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(471, 476)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(476, 485)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(485, 487)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(487, 537)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(537, 538)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(538, 553)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(553, 554)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(554, 569)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(569, 577)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(577, 581)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(581, 587)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(587, 588)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(588, 591)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(591, 891)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(891, 900)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(900, 903)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(903, 911)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(911, 924)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(924, 938)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(938, 941)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(941, 991)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(992, 1002)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1002, 1004)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1007, 1047)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1047, 1059)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1059, 1062)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1062, 1102)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1102, 1114)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1114, 1117)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1117, 1157)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1157, 1169)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1169, 1172)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1172, 1212)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1212, 1224)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1224, 1227)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1227, 1267)}</p> </td>
       <td class=desc> <p class=title>${linea.substring(1267, 1279)}</p> </td>
        `
    tr.innerHTML = content;

    tbody.append(tr)
  }
  

console.log(data[0])
}
