---
Title: Load
Description: load
template: analysis-content
---

# Utvärdera webbplatsers laddningstid och användbarhet

## Urval  
För att analysera prestanda valde jag **Ikea.se**, **SVT.se**, och **Skatteverket.se**. En e-handelsplattform, en medieplattform och en offentlig hemsida. För varje webbplats användes bara startsidan.

## Metod  
Analysen utfördes med hjälp av **Pagespeed**, som gav prestandabetyg för både mobil och desktop, **Chrome DevTools** som användes för att mäta laddningstid, antal resurser och total storlek för varje sida. Varje sida testades tre gånger för att få ett genomsnittligt värde av de uppmätta parametrarna. Rådata dokumenterades i ett Google Kalkylark.

## Resultat
<iframe title="Load analysis" alt="google sheets" style="width: 100%; height: 705px;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQyoc8HKWwI-9fygXI2QvIH0qdfwoHXzOkX0DEZkfH2Ycpz1S9byeBN72IdDvAyQOqPjmuJXH2IP7E/pubhtml?widget=true&amp;headers=false">Load analysis</iframe>

### IKEA
![ikea](../image/ikea.png?width=600)

### SVT
![svt](../image/svt2.png?width=600)

### Skatteverket
![skatteverket](../image/skatteverket.png?width=600)

## Analys  
Resultaten visade skillnader mellan webbplatsernas prestanda. **Skatteverket** presterade bäst med snabba laddningstider på datorn men var betydligt sämre på mobilen. **SVT** var något långsammare, men hade ändå goda prestandapoäng. **IKEA** visade sig vara mest resurskrävande och hade de längsta laddningstiderna men hade något bättre prestanda poäng än **SVT**

**Ikea.se** Har mycket JavaScript som kanske kan optimeras. **SVT.se** såg bra ut och bilderna var optimerade. Men möjligtvis kunde de mindre bilderna varit lite mer optimerade då de hade ungefär samma laddningstid som de större bilderna. **Skatteverket.se** laddningstid består nästan bara av JavaScript och två bilder som är lite stora. Detta hade kunnat optimeras för att i övrigt är skatteverkets sida väldigt avskalad. Jag tycker att en laddningstid under 2 sekunder är godkänt vilket alla sidor klarade.

## Referenser  
Pagespeed: https://pagespeed.web.dev    
DevTools: https://developer.chrome.com/docs/devtools/   
Google Sheets: https://sheets.google.com    
IKEA: https://www.ikea.com/se/sv/   
SVT: https://www.svt.se/    
Skatteverket: https://www.skatteverket.se/

## Övrigt

Teodor Lien