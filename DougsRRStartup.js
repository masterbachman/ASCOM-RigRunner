//West Mountain Radio RR4005i Network Controller
//Created by Brandon Bachman April, 14, 2018

//------------------------------------------------------------------------------
//EXAMPLES FOR DEVELOPER
//http://192.168.1.1/status.xml
//http://192.168.1.1/status.xml?RAILENA4=1
//
//1= ON
//0= OFF
//
//RAILENA4=1
//RAILENA3=1
//RAILENA2=1
//RAILENA1=1
//RAILENA0=1
//------------------------------------------------------------------------------

function main(){
//RRPowerOn("IP", "OUTLET NAME")
  RRPowerOn("http://192.168.1.1/status.xml?RAILENA0=1", "RR Port 1 ");
  RRPowerOn("http://192.168.1.1/status.xml?RAILENA1=1", "RR Port 2 ");
  RRPowerOn("http://192.168.1.1/status.xml?RAILENA2=1", "RR Port 3 ");
  RRPowerOn("http://192.168.1.1/status.xml?RAILENA3=1", "RR Port 4 ");
  RRPowerOn("http://192.168.1.1/status.xml?RAILENA4=1", "RR Port 5 ");
  Util.WaitForMilliseconds(1000);
  Console.PrintLine("STARTUP COMPLETE");

// Turn on a switch for the Rig Runner | West Mountain Radio RR4005i Network Controller
// Ref: http://www.westmountainradio.com/pdf/RRmanual.pdf
  function RRPowerOn(URL, RRportNanme)
  {
      var http = new ActiveXObject("MSXML2.XMLHTTP");
      http.open("GET", URL);
      http.send();
      Console.PrintLine("...powered on " + RRportNanme);
  }
}
