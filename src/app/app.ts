import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'tally-xml-tester';

  xmlRequest = `<ENVELOPE>
    <HEADER>
        <TALLYREQUEST>Import Data</TALLYREQUEST>
    </HEADER>
    <BODY>
        <IMPORTDATA>
            <REQUESTDESC>
                <REPORTNAME>All Masters</REPORTNAME>
                <STATICVARIABLES>
                    <SVCURRENTCOMPANY>IHPL</SVCURRENTCOMPANY>
                </STATICVARIABLES>
            </REQUESTDESC>
            <REQUESTDATA>
                <TALLYMESSAGE xmlns:UDF="TallyUDF">
                    <LEDGER NAME="Auro" RESERVEDNAME="Auro">
                        <NAME>Auro</NAME>
                        <GUID>374</GUID>
                        <CURRENCYNAME>INR</CURRENCYNAME>
                        <EMAIL>rabi.yajav@ph.com</EMAIL>
                        <PARENT>Sundry Creditors</PARENT>
                        <LEDGERPHONE>64646464</LEDGERPHONE>
                        <LEDGERCONTACT>Ravi </LEDGERCONTACT>
                        <COUNTRYNAME>India</COUNTRYNAME>
                        <ISBILLWISEON>No</ISBILLWISEON>
                        <ISCOSTCENTRESON>No</ISCOSTCENTRESON>
                        <ISINTERESTON>No</ISINTERESTON>
                        <AFFECTSSTOCK>No</AFFECTSSTOCK>
                        <ISPARTYMAINTAINED>Yes</ISPARTYMAINTAINED>
                        <ISMULTIMAILINGDETAILS>Yes</ISMULTIMAILINGDETAILS>
                        <MAILINGNAME>Auro</MAILINGNAME>
                        <ADDRESS.LIST TYPE="String">
                            <ADDRESS>Unit VII, SEZ Unit, Plot No.S1, Pharmaceutical Formulations SEZ, </ADDRESS>
                            <ADDRESS>TSIIC Green Industrial Park, Polepalle Village, Jedcharla Mandal, Polepalle</ADDRESS>
                            <ADDRESS>Madhira, Telangana, India</ADDRESS>
                        </ADDRESS.LIST>
                        <LEDMAILINGDETAILS.LIST>
                            <ADDRESS.LIST TYPE="String">
                                <ADDRESS>Unit VII, SEZ Unit, Plot No.S1, Pharmaceutical Formulations SEZ, </ADDRESS>
                                <ADDRESS>Madhira , Telangana , India</ADDRESS>
                            </ADDRESS.LIST>
                            <ISMAILINGDETAILS>Yes</ISMAILINGDETAILS>
                            <APPLICABLEFROM>20250601</APPLICABLEFROM>
                            <MAILINGNAME>Auro</MAILINGNAME>
                            <STATE>Telangana</STATE>
                            <COUNTRY>India</COUNTRY>
                        </LEDMAILINGDETAILS.LIST>
                        <LEDGSTREGDETAILS.LIST>
                            <APPLICABLEFROM>20250601</APPLICABLEFROM>
                            <GSTREGISTRATIONTYPE>Regular</GSTREGISTRATIONTYPE>
                            <PLACEOFSUPPLY>Telangana</PLACEOFSUPPLY>
                            <GSTIN>36AABCA7366H2ZK</GSTIN>
                            <ISOTHTERRITORYASSESSEE>No</ISOTHTERRITORYASSESSEE>
                            <CONSIDERPURCHASEFOREXPORT>No</CONSIDERPURCHASEFOREXPORT>
                            <ISTRANSPORTER>No</ISTRANSPORTER>
                            <ISCOMMONPARTY>No</ISCOMMONPARTY>
                        </LEDGSTREGDETAILS.LIST>
                        <LEDMULTIADDRESSLIST.LIST>
                            <ADDRESS.LIST TYPE="String">
                                <ADDRESS>Unit VII, SEZ Unit, Plot No.S1, Pharmaceutical Formulations SEZ, </ADDRESS>
                                <ADDRESS>TSIIC Green Industrial Park, Polepalle Village, Jedcharla Mandal, Polepalle</ADDRESS>
                                <ADDRESS>Madhira</ADDRESS>
                            </ADDRESS.LIST>
                            <PRIORSTATENAME>Telangana</PRIORSTATENAME>
                            <COUNTRYISDCODE>+91</COUNTRYISDCODE>
                            <INCOMETAXNUMBER>AABCA7366H</INCOMETAXNUMBER>
                            <COUNTRYNAME>India</COUNTRYNAME>
                            <GSTREGISTRATIONTYPE>Registered</GSTREGISTRATIONTYPE>
                            <ADDRESSNAME>TL-36</ADDRESSNAME>
                            <PARTYGSTIN>36AABCA7366H2ZK</PARTYGSTIN>
                            <STATE>Telangana</STATE>
                            <PLACEOFSUPPLY>Telangana</PLACEOFSUPPLY>
                            <ISOTHTERRITORYASSESSEE>No</ISOTHTERRITORYASSESSEE>
                            <ISEXCISEMERCHANTEXPORTER>No</ISEXCISEMERCHANTEXPORTER>
                            <ISPARTYEXEMPTED>No</ISPARTYEXEMPTED>
                            <ISSEZPARTY>No</ISSEZPARTY>
                        </LEDMULTIADDRESSLIST.LIST>
                        <LEDMAILINGDETAILS.LIST>
                            <ADDRESS.LIST TYPE="String">
                                <ADDRESS>3RD FLOOR, CNF Agent - JAITHA AGENCIES PRIVATE LIMITED, H.No.35/2A</ADDRESS>
                                <ADDRESS>Kolkata , West Bengal , India</ADDRESS>
                            </ADDRESS.LIST>
                            <ISMAILINGDETAILS>Yes</ISMAILINGDETAILS>
                            <APPLICABLEFROM>20250602</APPLICABLEFROM>
                            <MAILINGNAME>Auro</MAILINGNAME>
                            <STATE>West Bengal</STATE>
                            <COUNTRY>India</COUNTRY>
                        </LEDMAILINGDETAILS.LIST>
                        <LEDGSTREGDETAILS.LIST>
                            <APPLICABLEFROM>20250602</APPLICABLEFROM>
                            <GSTREGISTRATIONTYPE>Regular</GSTREGISTRATIONTYPE>
                            <PLACEOFSUPPLY>West Bengal</PLACEOFSUPPLY>
                            <GSTIN>19AABCA7366H1ZH</GSTIN>
                            <ISOTHTERRITORYASSESSEE>No</ISOTHTERRITORYASSESSEE>
                            <CONSIDERPURCHASEFOREXPORT>No</CONSIDERPURCHASEFOREXPORT>
                            <ISTRANSPORTER>No</ISTRANSPORTER>
                            <ISCOMMONPARTY>No</ISCOMMONPARTY>
                        </LEDGSTREGDETAILS.LIST>
                        <LEDMULTIADDRESSLIST.LIST>
                            <ADDRESS.LIST TYPE="String">
                                <ADDRESS>3RD FLOOR, CNF Agent - JAITHA AGENCIES PRIVATE LIMITED, H.No.35/2A</ADDRESS>
                                <ADDRESS>LP NO.95/24/1/0, TOPSIA ROAD</ADDRESS>
                                <ADDRESS>Kolkata</ADDRESS>
                            </ADDRESS.LIST>
                            <PRIORSTATENAME>West Bengal</PRIORSTATENAME>
                            <COUNTRYISDCODE>+91</COUNTRYISDCODE>
                            <INCOMETAXNUMBER>AABCA7366H</INCOMETAXNUMBER>
                            <COUNTRYNAME>India</COUNTRYNAME>
                            <GSTREGISTRATIONTYPE>Registered</GSTREGISTRATIONTYPE>
                            <ADDRESSNAME>WB-19</ADDRESSNAME>
                            <PARTYGSTIN>19AABCA7366H1ZH</PARTYGSTIN>
                            <STATE>West Bengal</STATE>
                            <PLACEOFSUPPLY>West Bengal</PLACEOFSUPPLY>
                            <ISOTHTERRITORYASSESSEE>No</ISOTHTERRITORYASSESSEE>
                            <ISEXCISEMERCHANTEXPORTER>No</ISEXCISEMERCHANTEXPORTER>
                            <ISPARTYEXEMPTED>No</ISPARTYEXEMPTED>
                            <ISSEZPARTY>No</ISSEZPARTY>
                        </LEDMULTIADDRESSLIST.LIST>
                        <LANGUAGENAME.LIST>
                            <NAME.LIST>
                                <NAME>Auro</NAME>
                            </NAME.LIST>
                        </LANGUAGENAME.LIST>
                    </LEDGER>
                </TALLYMESSAGE>
            </REQUESTDATA>
        </IMPORTDATA>
    </BODY>
</ENVELOPE>
`;

  responseText = 'Waiting...';

  constructor(private http: HttpClient) {}

  sendXmlToTally(): void {
    this.responseText = 'Sending...';

    this.http.post('/tally', this.xmlRequest.trim(), { responseType: 'text' }).subscribe({
      next: (res) => {
        const match = res.match(/<RESPONSE>(.*?)<\/RESPONSE>/);
        this.responseText = match
          ? `✅ RESPONSE: ${match[1]}`
          : `⚠️ Full Response:\n${res}`;
      },
      error: (err) => {
        this.responseText = `❌ Error: ${err.message}`;
      },
    });
  }
}
