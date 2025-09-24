##   Besucher-Frontend: AI CHAT- Feature Dokumentation
### Agenda

1. [📌 Beschreibung der Ausgangssituation](#-beschreibung-der-ausgangssituation)  
2. [🚀 Ziel des Semesterprojektes 2025](#-ziel-des-semesterprojektes-2025)  
3. [🛠 Vorgehensweise](#-vorgehensweise)  
4. [📚 Kontextanalyse](#-kontextanalyse)  
5. [⚙️ Regelwerk](#%EF%B8%8F-regelwerk)  
6. [🤖 KI-Chatbot Integration](#-ki-chatbot-integration)  
7. [⚙️ KI-Chatbot Umsetzung und LLM-Anbindung](#%EF%B8%8F-ki-chatbot-umsetzung-und-llm-anbindun)  
8. [(Zusatz) Einbettung des Regelwerks in Unity](#-zusatz-einbettung-des-regelwerks-in-unity-perspektivisch) 

## 📌 Beschreibung der Ausgangssituation
   - Trennung in die Teilteams (POC KI-Kontext & Unity)
   - Frontend des Vorgänderprojekts
   - Recherche wie gehts weiter [Miro-Board](https://miro.com/welcomeonboard/SHNTeGxTcmVhNk04eURzaStycHFKYUpGczJUeVNFWlBVR3JxcEVGaUJ2eHVTejZ2enEwK2pPeDhlMlplU3BoSU1lODBCWjUvNmkxZnFrV3FTWlZiQzRNdVBYdWM4dGFzbjY4VTk1YUlNWExJbUVVblJLRkxCaGRvbFdSQTBqYkNBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=717421375236)

Die Analyse des Vorgängerprojekts aus dem **Wintersemester 2024/2025** verdeutlichte, dass das eingesetzte KI-Modell in seiner derzeitigen Form noch nicht über die notwendige Reife verfügt, um durchgehend überzeugende Ergebnisse zu liefern. Insbesondere die Qualität und Präzision der generierten Inhalte erwiesen sich als unzureichend, was die Notwendigkeit einer gezielten Weiterentwicklung deutlich machte.  

Darauf aufbauend wurde im **Guided Project des Sommersemesters 2025** zunächst der IST-Status eingehend analysiert und durch eine tiefergehende Recherchephase ergänzt. Ziel war es zu prüfen, welche Ansätze und Ideen aus dem Vorgängerprojekt weiterverfolgt werden können und welche hingegen verworfen werden sollten.

#### Was wir haben
- Vorgängerprojekt aus dem **Wintersemester 2024/2025**  
- Demonstrator mit statischer Karte  
- Generierung mit **DALLE** und **Olpe-AI**  
- Vorgefertigte Themenwelten / Szenarien  

#### Was wir wollen
- Fortsetzung des Projekts  
- Optimierung der Karte  
- Bessere Nutzer-Interaktion  
- Multimediales Erlebnis (**durch bspw.Animation**)

## 🚀 Ziel des Semesterprojektes 2025

Aufbauend auf den Ergebnissen der Analyse und Recherche verfolgte das Guided Project im Sommersemester 2025 das Ziel, die bisherigen Strukturen gezielt weiterzuentwickeln und in eine nächste Entwicklungsstufe zu überführen.

Zentrale Leitfragen waren dabei:

**Wo wollen wir hin?**
→ Hin zu einem System, das Nutzer*innen stärker unterstützt, indem es durch ein Chatbot-Interface die Qualität der Interaktion mit dem KI-Modell unmittelbar verbessert und perspektivisch durch immersive Visualisierungen erweitert wird.

**Was brauchen wir dafür?**
→ Ein verbessertes Prompting durch ein nutzerorientiertes Interface, die sukzessive Erweiterung und Präzisierung des Trainingsdatensatzes sowie die Entwicklung zusätzlicher visueller Darstellungsformen (Unity), die alternative Stadtgeschichten anschaulich und interaktiv erlebbar machen.

Das Semesterprojekt legte damit den Grundstein für eine zweigleisige Weiterentwicklung: kurzfristig die Optimierung der Nutzerinteraktion durch verbesserte Eingaben und unmittelbare Systemunterstützung, langfristig die Stärkung der Modellqualität und visuellen Dimension des Projekts.


#### Übergeordnete Motivation: Verknüpfung der beiden Teil-Ergebnisse:
Die übergeordnete Motivation bestand darin, die **beiden Teilprojekte und deren Ergebnisse zu verknüpfen**, um das Gesamtsystem intuitiv, interaktiv und erlebbar zu machen.

## 🛠 Vorgehensweise
Bevor die Arbeit in die beiden Teilgruppen erfolgte, bestand unser Vorgehen aus drei Schritten:

1. **Anknüpfungspunkte**  
   - Analyse der Ideen aus dem Vorgängerprojekt  
   - Beispiele:  
     - *CityScope* – Stadtplanung mit greifbaren Objekten  
     - *Tangible Map Exploration* – Inspiration aus HCI-Forschung  
     - *BYO\** – 3D-gedruckte Werkzeuge für interaktive Oberflächen  

2. **Recherche-Phase**  
   - Breite Untersuchung verschiedener Ansätze  
   - Erkenntnis: Nutzererfahrung sollte gesteigert werden  
   - Mögliche Ideen:  
     - Animationen in Unity  
     - Physische Bauklötze  
     - Digitale Bauklötze  
     - Zeichnen mit dem Finger  

3. **Festlegung der Idee (Stimmungsabfrage)**  
   - Drei Interaktionsoptionen wurden entwickelt und Schüler*innen aus Olpe vorgestellt:  
     1.Physisches Stempeln der Karte  
     2. Dialog mit verstehendem Modell  
     3. Stempel mit Prompt  
   - Ergebnis: **Die zweite Idee (Dialog mit Modell) war am beliebtesten.**  

#### Aufteilung in Teilgruppen
Basierend auf den Ergebnissen der Umfrage und der Recherche erfolgte die Aufteilung in zwei Teilgruppen:

- **Teilgruppe POC KI-Kontext**
Diese Gruppe widmete sich der Erweiterung des bestehenden **IST-Status**. Im Vordergrund stand die Konzeption und Evaluation eines **Chatbot-Interfaces**, das Nutzer*innen beim Prompting unterstützt. Durch eine bessere Strukturierung und Aufbereitung der Eingaben sollte die Qualität der KI-Generierungen gesteigert und die Interaktion insgesamt verbessert werden. Die Entscheidung, den Schwerpunkt auf diesen Aspekt zu legen, resultierte aus der Erkenntnis, dass die Effektivität des Gesamtsystems maßgeblich von der Qualität der Nutzereingaben und der darauf basierenden Modellantworten abhängt. Damit konnte ein unmittelbarer Beitrag zur Nutzbarkeit und Akzeptanz des Projekts geleistet werden, während die Optimierung des KI-Modells selbst als langfristige Entwicklungsaufgabe bestehen bleibt.

- **Teilgruppe Unity**  
Parallel dazu wurde die Stadtkarte von Olpe in Unity nachgebaut, um perspektivisch neue visuelle und interaktive Möglichkeiten zu eröffnen und das Projekt langfristig um immersive Darstellungsformen zu ergänzen.


## 📚 Kontextanalyse

Für die Analyse standen **302 Eingaben** von Schüler:innen zur Verfügung – ein:e Schüler:in konnte dabei mehrere Ideen einbringen. Jede Eingabe war mit **Markierungen auf der Stadtkarte von Olpe** versehen, die angaben, wo die Idee umgesetzt werden sollte, sowie einem individuellen Prompt, welcher durchschnittlich aus 1-3 Wörtern bestand.

Die Kontextanalyse bestand aus der **Sammlung, Analyse und Visualisierung** der gesammelten Prompts sowie der Auswahlbereiche der Nutzer*innen auf der Satellitenkarte. Sie gliederte sich in zwei Schritte:  

### 1. Analyse der Auswahlbereiche  

Im ersten Schritt wurden die **Markierungen auf der Stadtkarte** untersucht.  
- **Wie:**  
  - Ein Python-Skript legte alle Markierungen übereinander.  
  - Bilder wurden skaliert und **Rottöne erkannt**.  
  - Die Daten wurden in Form einer **Heatmap und Overlays** visualisiert.  

- **Warum:**  
  - Muster und Hotspots sichtbar machen.  
  - Verdichtung statt einzelner Markierungen.  

- **Erkenntnisse:**  
  - Deutliche Hotspots im Stadtkern von Olpe, besonders in der Mitte.  
  - Straßenverläufe sind teilweise klar erkennbar.  
  - Räumlicher Bezug durch die Stadtkarte gegeben.  

- **Mögliche Interpretation:**  
  - Schüler*innen markierten häufig die Stadtmitte, entweder aus **Bequemlichkeit** oder wegen bekannter Bezugspunkte (z. B. die Schule).  

- **Ergebnisse (Visualisierung):**  
  - Heatmap: Relative Häufigkeit der markierten Pixel (rot).  
  - Overlay: Halbtransparente Heatmap über Bildkontext.  
  - Overlay + City: Darstellung der Hotspots direkt auf der Stadtkarte (räumliche Verteilung).
 

### 2. Analyse der Prompts  

Im zweiten Schritt wurden die von den Schüler*innen eingegebenen **Prompts** analysiert.  

- **Vorgehen:**  
  - Dubletten und unklare Prompts wurden entfernt.  
  - Anschließend wurde bewertet, welche Prompts zu besseren oder schlechteren Bildgenerierungen führten.  
  - Die Prompts wurden in **Oberkategorien** eingeordnet.  

- **Ziel:**  
  - Ein Verständnis dafür zu entwickeln, **wie Schüler*innen prompten**, um daraus ein **Regelwerk** abzuleiten.  


#### Zentrale Schritte der Analyse

- **Selbstkategorien der Projektgruppe 🧩**
  - Vor der Auswertung der Schüler-Prompts definierte wir als Gruppe eigene Kategorien, die potentiell für das Regelwerk geeignet erschienen (siehe Miro Board).

- **Kategorisierung der Schüler-Prompts 🗂️**
  - Die 302 Eingaben wurden anschließend in Oberkategorien eingeordnet.  
  - **Ergebnis:** Die selbst definierten Kategorien der Projektgruppe und die aus den Schüler-Prompts generierten Kategorien **ähnelten sich stark**, was die Relevanz der gewählten Kategorien bestätigte.

- **Ranking innerhalb der Kategorien 📈**
  - Innerhalb jeder Oberkategorie wurde ermittelt, welche Begriffe am häufigsten vorkommen.  
  - **Beispiel:** In der Kategorie „Natur & Landschaft“ war *Wald/Forest/Jungle* der am häufigsten genannte Begriff.

> Diese Analyse bildete die Grundlage dafür, die Kategorien im Regelwerk zu strukturieren und die **häufigsten Begriffe** gezielt zu berücksichtigen.

### 3. Ergebnisse der Prompts (Heatmap und Kategorie) 
Die Ergebnisse der Kontextanalyse lassen sich in zwei Hauptaspekte gliedern:  
1. **Heatmap** der markierten Bereiche auf der Stadtkarte.  
2. **Kategorisierung der Prompts** nach Oberbegriffen und Schlüsselbegriffen.  

#### Heatmap der Markierungen
Zur Visualisierung der Verteilung der markierten Bereiche wurde ein Python-Skript genutzt, das alle Nutzer-Markierungen übereinanderlegte und daraus eine **Heatmap** generierte.   

> **Hypothese:** Die Markierungen auf der Heatmap-Karte befinden sich überwiegend im **Stadtzentrum**. Dies könnte entweder eine **bewusste Entscheidung** gewesen sein oder aus **Bequemlichkeit**, wobei die Mitte der Stadt als Referenzpunkt genutzt wurde.

**Heatmap-Typen:**

| Bild | Beschreibung |
|------|--------------|
| <img width="350" height="350" alt="Heatmap" src="https://github.com/user-attachments/assets/217c3d53-7c21-4426-b56f-26f8bf4f6fe1" /> | **Heatmap.png** : Zeigt die relative Häufigkeit der markierten Pixel; kein Hintergrund, nur Farben (dunkelrot → weiß); enthält Legende. |
| <img width="350" height="350" alt="Overlay" src="https://github.com/user-attachments/assets/bda04d94-6bef-4d63-9130-6dfe6c87be4a" /> | **Overlay.png** : Halbtransparente Heatmap über erstes Bild der Sammlung; zeigt Hotspots im Bildkontext. |
| <img width="350" height="350" alt="OverlayOnCity" src="https://github.com/user-attachments/assets/bafe0023-483d-44b7-af9d-e1dddba2fc3f" /> | **OverlayOnCity.png** : Halbtransparente Heatmap über Stadtbild Olpe; zeigt räumliche Verteilung direkt auf der Karte. |

**Erkenntnisse aus der Heatmap:**  
- Deutliche Hotspots im **Stadtkern von Olpe**, vor allem in der Mitte.  
- Teilweise lassen sich sogar **Straßenverläufe** nachvollziehen.  
- Starker **räumlicher Bezug** durch die Projektion auf die Stadtkarte.
  
#### Kategorien der Prompt-Analyse

**Vorgehen:**  
- Dubletten und unklare Prompts wurden entfernt.  
- Prompts wurden qualitativ bewertet (gute/schlechte Bildgenerierungen).  
- Einordnung in **Oberkategorien** und Identifikation zentraler Begriffe.  


**Kernziel:**  
- Ein Verständnis dafür entwickeln, **wie Schüler*innen prompten**, um ein **Regelwerk für den Chatbot** abzuleiten.  

**Visualisierungsergebnisse:** 

1. **Oberkategorien-Tabelle**  
   - Enthält alle Oberkategorien, **absteigend nach Anzahl der zugeordneten Prompts** sortiert.  
   - Teilziel: Übersicht, welche Kategorien am häufigsten vorkommen und somit den größten Fokus für das Regelwerk erhalten sollten.

2. **Top-10-Begriffe-Tabelle**  
   - Listet die **10 am häufigsten genannten Begriffe** innerhalb der Kategorien auf.  
   - Jede Zeile zeigt den Begriff und die zugehörige Kategorie.  
   - Teilziel: Aufzeigen, welche spezifischen Begriffe besonders relevant sind und bei der Regelwerks-Generierung priorisiert werden.

| Oberkategorie | Top 10 Begriffe |
|---------------|----------------|
| <img src="https://github.com/user-attachments/assets/433009e1-a7f5-4051-a17d-36dc1cd1ee72" width="350"/> | <img src="https://github.com/user-attachments/assets/278bf66e-d0b6-4230-8b0d-c632ffc12214" width="350"/> |

## ⚙️ Regelwerk

### Abgeleitete Design-Prinzipien fürs Regelwerk auf Basis der Prompts und Kategorien

#### Aufbau & Ziel
- **50 Regeln** erstellt → decken zentrale Kategorien ab (z. B. Natur, Stadt, Infrastruktur …)  
- **Ziel:** Einheitliche, kontextreiche Prompts für bessere Bildgenerierung

#### Funktionsweise
- Regeln dienen als Basis für das LLM → automatische Anreicherung von Eingaben  
- **Beispiel:** Eingabe `Wald` → Regel ergänzt zu `Üppige Urwaldlichtung mit Palmen, Lianen & Wasserfall`

#### Beispiele
**Natur & Landschaft**  
- `Wald` → „Üppige Urwaldlichtung mit Palmen, Lianen & Wasserfall“  
- `Wiese` → „Bunte Blumenwiese mit Margeriten & Bienenhotels“  

**Städte & Infrastruktur**  
- `Innenstadt` → „Fußgängerzone mit Straßencafés & Natursteinpflaster“  
- `Einkaufszentrum` → „Modernes Shopping-Center mit Glasfassade & Innenhof“  

> <img width="1380" height="269" alt="Bildschirmfoto 2025-09-24 um 22 36 48" src="https://github.com/user-attachments/assets/5c384e66-62a1-47fc-8e75-8818eb2395b0" />

- Jede Regel enthält: `ID`, `Priorität`, `Kategorie`, `markierte & Umfeldobjekte`, `Eingabe` und `Prompt-Vorlage`  
- Für unzulässige oder zu fiktive Anfragen gibt es einen **Default-Prompt**  
- Das Regelwerk ist als **JSON-Skript** strukturiert und Grundlage für kontextbasierte Änderungen in Unity  

#### Auszug aus dem Regelwerk (JSON)
```json
[
  {
    "id": "R1",
    "priority": 1,
    "category": "Natur & Landschaft",
    "markedObjects": ["Wald"],
    "environmentObjects": ["See"],
    "userInput": "Dschungel",
    "promptTemplate": "Ersetze den Bereich **{AreaID}** durch eine üppige Urwaldlichtung mit Palmen, Lianen und einem kleinen Wasserfall. Integriere dichtes Farn- und Moosbewuchs, eine geschwungene Erkundungspfad und versteckte Ruinen-Bögen."
  },
  {
    "id": "R2",
    "priority": 2,
    "category": "Natur & Landschaft",
    "markedObjects": ["Feld"],
    "environmentObjects": ["Wald"],
    "userInput": "Maisfeld",
    "promptTemplate": "Ersetze den Bereich **{AreaID}** durch endlose Reihen hoher Maispflanzen. Füge einen Traktorpfad hinzu, vereinzelte Vogelscheuchen und einen schmalen Entwässerungsgraben am Waldrand ein."
  },
  {
    "id": "R3",
    "priority": 3,
    "category": "Natur & Landschaft",
    "markedObjects": ["Grünflächen"],
    "environmentObjects": ["Fluss"],
    "userInput": "Sumpf",
    "promptTemplate": "Ersetze den Bereich **{AreaID}** durch ein feuchtes Sumpfgebiet mit Schilfzonen und Moorgewässern. Integriere Holzstege, die über stilles Wasser führen, und vereinzelte Seerosen-Inselchen."
  }
]
```
### Abgeleitete Design-Prinzipien fürs Regelwerk auf Basis der Heatmaps

Die generierten Heatmaps liefern nicht nur eine räumliche Übersicht über die Prompts, sondern dienen auch als **Gestaltungs-Trigger** für ein darauf aufbauendes Regelwerk. Daraus lassen sich drei zentrale Design-Prinzipien ableiten:

| Design-Prinzipien |
|------------------|
| **1. Kontextanreicherung**<br>- **Prinzip:** Einfache Begriffe werden durch reichhaltige Beschreibungen ergänzt.<br>- **Beispiel:** „Wald“ → „dichter Wald mit Kiefern und Eichen“<br>- **Vorteil:** Mehr Bilddetails ermöglichen eine **präzisere Visualisierung** und regen das **Lernen durch Imagination** an. |
| **2. Heatmap als Design-Trigger**<br>- **Prinzip:** Die räumliche Lage auf der Heatmap bestimmt die Kontextualisierung.<br>- **Beispiel:**<br>  - Stadtkern → typische Elemente ergänzen (Rathaus, Marktplatz)<br>  - Randbereiche → mehr Kontext hinzufügen (Wohnviertel, Natur)<br>- **Vorteil:** Der **Ortscharakter bleibt erhalten**, und die Prompts werden spezifisch, nicht austauschbar. |
| **3. Variation & Differenzierung**<br>- **Prinzip:** Gleiche Begriffe werden unterschiedlich ausformuliert, um Vielfalt zu schaffen.<br>- **Beispiel:** „Schule“ → moderne Schule mit Glasfassaden / alte Schule mit Pausenhof<br>- **Kernaussage:** Heatmaps zeigen **Tendenzen** auf, während das Regelwerk dafür sorgt, dass die Prompts **reichhaltig, vielfältig und kontextgetreu** bleiben. |

### Bedeutung des Regelwerks

Das Regelwerk bildet das Fundament für intelligentes Prompting.  

**Warum ist das wichtig?**
- Verhindert austauschbare, generische Prompts  
- Sichert Vielfalt & inhaltliche Tiefe  
- Erhöht Qualität, Realitätsnähe und Kontextsicherheit der Bilder  
- Fördert kreatives, kontextbasiertes Lernen


## 🤖 KI-Chatbot Integration
    
Im Rahmen der Erweiterung des IST-Status wurde ein Chatbot-Konzept entwickelt, das als zentrales Interface zwischen Nutzerin und KI-Modell fungiert. Grundlage hierfür ist die Integration eines Large Language Models (LLM), das die Eingaben der Nutzerinnen verarbeitet und strukturiert. Ziel war es, die Interaktion mit dem KI-System intuitiver und effizienter zu gestalten, indem der Chatbot als „Vermittler“ beim Prompting agiert.
Dazu wurden zunächst die wesentlichen Kernfunktionen (Core Features) definiert, die eine direkte Verbesserung der Nutzererfahrung gewährleisten. Ergänzend wurden optionale Erweiterungen (Nice-to-have Features) identifiziert, die in zukünftigen Entwicklungsphasen das Funktionsspektrum erweitern können. Unter dem Projektnamen „Olpi“ wurde das Chatbot-Konzept in Form von Wireframes (Figma) visualisiert, um die geplante Nutzerführung und Interaktionslogik frühzeitig zu evaluieren.

Für die Umsetzung wurde eine sechsstufige Vorgehensweise mit klaren To-Dos entwickelt, die von der Konzeption über die Implementierung bis hin zur Testung reicht. Zentrale Bestandteile dieser Arbeit waren die Definition der Logik, welche die Funktionsweise des Chatbots steuert, sowie die anschließende technische Entwicklung, die auf eine nahtlose Einbindung in das bestehende Frontend abzielt.

### Chatbot-Features

Zunächst wurde festgelegt, welche Aufgaben der Chatbot übernehmen soll. Der Schwerpunkt liegt dabei auf der **Unterstützung der Nutzer*innen beim Prompting**, z. B.:  

- **Gezielte Rückfragen:** „Wie möchtest du das Gebäude gestalten?“  
- **Regelbasierte Vorschläge:** „Möchtest du moderne oder traditionelle Architektur?“  
- **Kontextbezogenes Feedback:** „In diesem Bereich wäre ein Hochhaus ungewöhnlich, da…“  

Um die Funktionen übersichtlich zu strukturieren, wurde eine **Mindmap** erstellt, in der alle identifizierten Features in folgende Kategorien unterteilt wurden:  

- **Core Features:** Unmittelbar notwendige Funktionen  
- **Nice-to-have Features:** Optionale Erweiterungen  

> Diese Einteilung erleichtert die **Priorisierung der weiteren Entwicklungsarbeit** und dient als Grundlage für die Implementierung.  

<img width="768" height="517" alt="Bildschirmfoto 2025-09-05 um 15 34 56" src="https://github.com/user-attachments/assets/4e1c7a50-0b83-4232-8cb7-6344b912fc62" />

Im Anschluss an die konzeptionellen Überlegungen wurden die geplanten Funktionen in Wireframes (Figma) visualisiert, um die spätere Nutzerführung frühzeitig zu evaluieren. Dabei standen sowohl grundlegende Funktionen als auch erweiterte Interaktionsmöglichkeiten im Fokus.

Zu den dargestellten Features zählen:

| Feature | Kategorie | Beschreibung | Umgesetzt |
|---------|-----------|--------------|-----------|
| 💬 Text-Eingabe | **Core** | Direkte Nutzeranfragen an den Chatbot ermöglichen | ✅ |
| 💻 Chat-Interface | **Core** | Fortlaufende Interaktion inkl. Chat-Verlauf und kontextbezogenen Antworten | ✅ |
| 📍 Markierten Bereich senden | **Core** | Kontextinformationen präzise an das Modell übermitteln | ✅ |
| ❓ Hilfs- und Info-Bereich | **Core** | Unterstützung und Erklärung des Systems | ✅ |
| ✏️ Freitext-Option / Vorschlagsliste mit Drag & Drop | **Core** | Flexible Eingaben und interaktive Auswahl von KI-Vorschlägen | ❌ |
| 📤 Export- und Teilen-Funktion | **Nice-to-have** | Ergebnisse extern verfügbar machen (z. B. mittels QR-Code) | ✅ |
| 🔄 Verlauf & Navigation | **Nice-to-have** | Rückverfolgung der Arbeitsschritte (vgl. Figma-Prototyp) | ❌ |
| ✋ Haptik, Sound | **Nice-to-have** | Sensorische Rückmeldungen zur Unterstützung der Interaktion | ❌ |
| ⚡ Echtzeit Feedback / Vorschläge | **Nice-to-have** | Sofortige Hinweise und Vorschläge während der Eingabe | ✅ |
| 🌀 Hybrid Eingabemöglichkeiten | **Nice-to-have** | Kombination aus Text, Auswahlbuttons und markierten Bereichen (ohne Spracheingabe) | ✅ |
| 🧑‍💻 Chatbot-Avatar | **Nice-to-have** | Visuelle Repräsentation der Interaktion | ✅ |
| 🧙 Fantasy Button | **Nice-to-have** | Kreative, spielerische Interaktionen oder alternative Optionen | ❌ |

> Die Wireframes dienten somit nicht nur der **Visualisierung einzelner Funktionen**, sondern auch der **Erprobung der Interaktionslogik** und der **Priorisierung nach Core-Features und Nice-to-have Features** für die weitere Entwicklung.

#### Warum ein Avatar?

Um die Geschichte lebendig, nahbar und interaktiv zu vermitteln, haben wir uns bewusst für die Entwicklung eines Avatars entschieden. Statt rein textbasierter Informationen ermöglicht ein Avatar eine emotionale Bindung: Er begleitet die Nutzer*innen, vermittelt Inhalte spielerisch und macht komplexe Zusammenhänge leichter zugänglich. So entsteht ein persönlicher Zugang, der über klassische Infoboxen hinausgeht.

**Beispiel: Olpi als Avatar im Demonstrator** 

Olpi unterstützt die Nutzer*innen in zwei zentralen Situationen durch die Buttons **"Info"** und **"Hilfe"**:

1. **Einführung und Kontext**  
   - Steht beim Start des Demonstrators bereit und „erklärt“ den Sinn und Zweck der Anwendung.  
   - Vermittelt die Grundidee, z. B. warum kontextbasiertes Prompting sinnvoll ist.  

   ![Info_PopUp2](https://github.com/user-attachments/assets/ff6e4d34-c1e3-4872-8e9c-a9f4d7e38b0d)

2. **Funktionale Unterstützung**  
   - Gibt Schritt-für-Schritt Hilfestellung bei der Nutzung des Chatbot-Interfaces.  
   - Zeigt einzelne Features und deren Bedeutung auf (z. B. Auswahl von Vorschlägen, Markieren von Bereichen, Feedback-Optionen).  
   - Unterstützt visuell und textlich, damit die Nutzer*innen die Funktionen direkt nachvollziehen können.  

   ![Info_PopUp](https://github.com/user-attachments/assets/165adccd-7770-4e39-9987-21e7cf0dc400)


#### Warum eine Eule?
Die Wahl fiel auf eine Eule, da sie seit jeher für Weisheit, Wissen und einen wachen Blick steht. Als fliegendes Tier kann sie Olpe aus der Vogelperspektive überblicken und bietet so einen umfassenden Einblick in Stadt und Geschehen. Gleichzeitig fügt sie sich harmonisch in die Natur- und Kulturwelt des Sauerlands ein. Mit ihrer neugierigen und sympathischen Art macht die Eule „Olpi“ Geschichte spielerisch erfahrbar und unterscheidet sich deutlich von nüchternen Informationsformaten.

<img width="907" height="253" alt="Olpis" src="https://github.com/user-attachments/assets/0e80632f-f62a-4235-b7f8-422b8a39958a" />


## Chatbot-Logik

Die entwickelte Chatbot-Logik hat das Ziel, Nutzer*innen beim strukturierten Prompting zu unterstützen, indem sie Kontextinformationen einbezieht, passende Kategorien aus dem Regelwerk zuordnet und nutzbare Vorschläge generiert. 

Ausgangspunkt ist die **Eingabephase**, in der Nutzer*innen einen Ort auf der Karte markieren und eine Idee eintragen (z. B. „Ich hätte gern hier ein Hochhaus“). Anschließend erfolgt eine **Kontextanalyse**: Geodaten und vordefinierte Kartenlayer werden genutzt, um topologische Bedingungen (z. B. Hügel, Flussnähe, historische Altstadt) zu prüfen, und das Objekt wird über Keyword-Erkennung einer passenden Oberkategorie (z. B. Architektur, Infrastruktur, Grünflächen) zugeordnet.  

Darauf aufbauend erfolgt der **Regelabgleich**: Stimmen Idee und Kontext überein, schlägt der Chatbot weiterführende Optionen vor; wird eine Regel verletzt, liefert er alternatives Feedback, das die Nutzeridee anpasst, ohne den Gestaltungsprozess zu unterbrechen. In der **Vorschlagsphase** werden mehrere kontextgerechte Handlungsoptionen (z. B. Serpentinenstraße, Tunnel, Aussichtspunkt) präsentiert, die Nutzer*innen auswählen oder kombinieren können.  

Diese Eingaben werden schließlich in einen **optimierten Prompt** überführt, der sowohl die ursprüngliche Idee als auch die kontextsensitiven Ergänzungen berücksichtigt. Eine **Feedback- und Lernphase** rundet die Logik ab, indem wiederholt gewählte Optionen erkannt und zukünftige Vorschläge angepasst werden. Optional kann der Chatbot seine Entscheidungen begründen, um den Regelkontext transparent zu machen und das Verständnis der Nutzer*innen zu fördern.

### Phasen des geführten Promptings

Der Chatbot folgt einem **geführten Prompting**, das in mehreren Phasen abläuft:

1. **Eingabephase**
   - Nutzer*in wählt einen Ort auf der Karte → System erhält Koordinaten + Metadaten.
   - Nutzer*in gibt eine Idee ein (z. B. „Ich möchte hier ein Hochhaus“).

2. **Kontextanalyse**
   - Topologie-Abgleich (Hügel, Fluss, Altstadt, freie Natur)
   - Objekterkennung über Keywords, Regex oder GPT-NLU
   - Kategorie-Mapping auf das Regelwerk

3. **Regelabgleich**
   - Prüfung, welche Regeln zutreffen
   - Feedback bei Regelverletzungen
   - Vorschläge bei erfüllten Regeln

4. **Vorschlagsphase**
   - Präsentation von 3–5 kontextgerechten Vorschlägen aus dem Regelwerk
   - Darstellung als Klickoptionen

5. **Prompt-Konstruktion**
   - Kombination von Basisidee + gewählten Vorschlägen zu einem optimierten Prompt

6. **Feedback- und Lernphase**
   - Anpassung der Vorschläge bei wiederholten Nutzereingaben
   - Optional: Erklärung der Regeln zur besseren Nachvollziehbarkeit


## ⚙️ KI-Chatbot Umsetzung und LLM-Anbindung



### Beschreibung

Die AI-Chat Funktion des Systems erweitert das vorhandene System um einen Chatbot-Helfer für die Generierung eines Kontext bezogenen und detailierten Prompts: sowohl für die Vorhandene Bildgeneration aus dem Vorgänger Projekt, als auch für die potenzielle erweiterung durch die Unity Game Engine. 
Das Projekt baut im Fundament und der Architektur auf dem Vorgänger Projekt auf und wird auch wie im Kapitel "Voraussetzungen & Setup" im Repository  ["AI_Code"](https://github.com/GP-Alternativweltgeschichten/AI_Code/tree/AiChat?tab=readme-ov-file#-voraussetzungen--setup) beschrieben aufgesetzt. 

Für die Umsetzung des KI Chatbots wurde die gpt-4.1-mini Api von OpenAI verwendet, da ein API KEY Vorhanden war, das Model Bilder als eingaben ermöglicht und es kostengünstig verwendet werden kann. 


WICHTIG: 
Es ist Notwendig vor der Verwendung die ENV des Servers mit einem OPENAI_API_KEY zu versehen, da sonst sowohl die GPT- als auch die DALL-E- API nicht funktionieren. 
Dafür kann man in der Umgebung diesen code ausführen:
 ```
conda env config vars set OPENAI_API_KEY="api_key"
```


## Python Server für die KI Chatbot Interaktion
Die für den Chatbot verwendeten Funktionen finden sich unter:

```
...\AI_Code\server\chatBot_interaction_interface.py
```

Für die Kommunikation mit den Restlichen Komponenten über die REST Schnittstelle wird die Bisherige datei erweitert:
```
...\AI_Code\server\inpaint_REST.py
```

In der request_types datei werden die Typen der Chatbot schnittstelle in "ChatMessageRequest" Definiert:
```
...\AI_Code\server\request_types.py
```

#### Komponenten und Funktionen der Chatbot Interaktion

##### chatBot_interaction_interface.py
Definiert für den Chatbot Server relevante Funktionen:

###### get_initial_prompting_text()
Liefert die bei einem Neuen Chatbot notwendigen Initalen Prompts, die:
  - Den Kontext für den Chatbot liefern,
  - Die Regeln für den Chatbot festlegen,
  - Das Format der Ausgabe festlegen.

  Dabei wird in System und Developer Prompts unterschieden. Developer-Prompts liefern Zusammengefasst den Kontext für die KI, Während System-Prompts Klare Regeln für die KI festlegen.
  Bei jeder neuer Instance des Chatbot werden beide dieser Initalen Prompts an die KI übergeben. 

###### add_mask_outline_to_image(image, mask)
Erhält das GPS Bild und den für den Prompt markierten Bereich und fügt den Umriss des Markierten Bereiches in das Bild ein. 
Dieses neue Bild wird beim Bestätigen eines neuen Markierten Bereiches an die KI API gesendet. 

###### get_image_as_base64(image)
Nimmt ein Bild der karte als PNG an und Formatierte es in das BASE64 Format.
Dies ist notwendig um das Bild an die KI API zu senden.

##### request_types.py 
Definiert die Typen der REST Schnittstelle für die Chatbot Interaktion

###### class ChatMessageRequest
die Typen der Schnittstelle sind wie folgt definiert:

    text: Optional[str] = None --> Chatnachricht des Nutzers
    image: Optional[str] = None --> Bild, indem der markierte Bereich geändert werden soll. Als Base64 Konvertiert
    mask: Optional[str] = None --> Markierter Bereich in der Karte. Als Base64 Konvertiert
    conversationId: Optional[int]= None --> Id der jetzigen Chat Session als Nummer

Je nachdem was gesendet wird wird entweder:
`Text + ConversationId` (Wenn der Nutzer eine Nachricht an den Chatbot sendet)
oder 
`image + mask +  ConversationId` (Wenn der Nutzer einen neuen Bereich auf der Karte für den Prompt gewählt hat)
erwartet.

*get_image_as_rgb* und *get_mask_as_rgb* liefern das aus dem Base64 decodierte Bild. 



#### Ablauf der Chatbot Interaktion:
Im Folgenden wird der Funktionale Ablauf der Chatbot Interaktion Beschrieben.

Die Kommunikation erfolgt über die *"/text"* URL

Dort gesendete POST anfragen werden werden durch die in ["request_types.py"](#request_typespy) Definierten typen differenziert. 

Insgesamt umfasst der Chatbot 2 Haupt interaktionen: 
1. : Das senden einer Nachricht an den Chatbot durch eine Texteingabe
2. : Das senden eines Bilden mit dem Markierten Bereich. 
Die Unterscheidung beider Interaktionen hängt von den jeweiligen gesendeten daten ab. 

Wenn eine neue Instance des Chatbots erstellt wird, wird auch eine Neue ConversationID Vergeben, die die jeweiligen Conversationen speichert. Bei einer neuen Conversation werden die System und Developer Prompts als Initale Promts an die API übergeben.
Wurde eine Vorhandene Conversation erkannt, wird diese fortgeführt. 


***Bild wird gesendet***

Wenn erkannt wurde, dass ein Bild mit einem Markierten Bereich über die REST schnittstelle gesendet wurde, werden diese mittels der jeweiligen *get_image_as_rgb* und *get_mask_as_rgb* funktion aus dem BASE64 Format dekodiert und anschließend durch die ["add_mask_outline_to_image"](#add_mask_outline_to_imageimage-mask) Funktion zu einem Bild kombiniert.
Dieses Kombinierte bild wird dann durch die ["get_image_as_base64"](#get_image_as_base64image) Funktion in das BASE64 Format zurück konvertiert. 
Diese Konvertierte Bild wird dann an die GPT API Gesendet, die dieses Bild als zukünftige referenz für Chat Interaktionen mit dem Nutzer verwedet. 
Die Antwort der API wird als Antwort wieder an das Frontend gesendet, wo es als Chatbot Nachricht angezeigt wird.


***Nutzer Nachricht wird gesendet***

Wenn erkannt wurde das ein Text gesendet wurde, wird der Text direkt an die GPT API gesendet. Die Antwort der KI Bezieht sich dann auf dem zu letzt gesendeten Bild als Kontext. 
Die Antwort der API wird als Antwort wieder an das Frontend gesendet, wo es als Chatbot Nachricht angezeigt wird.
Wenn die GPT AI erkennen kann, was der Nutzer im Markierten Bereich haben möchte, Generiert die KI einen Prompt in einem Festgelegten Format. Dieser Prompt besteht aus einer Zusammenfassung, die der Nutzer im Frontend angezeigt bekommt, und einem auf englisch  detailiertem Prompt Text. Dieser Prompttext wird beim Generieren eines Neuen Bild Ausschnittes verwendet.


Inspo:
 
A) Auswahl des Language Models: Anschließend wurde ein geeignetes LLM identifiziert, das sich über eine API einbinden lässt. Die Wahl fiel auf OpenAI GPT-4, da dieses Modell eine hohe Leistungsfähigkeit und starke Kontextverarbeitung bietet. Alternative Modelle wie Mistral oder Gemini wurden geprüft, jedoch verworfen.

B) Entwicklung der Prompting-Logik: In einem nächsten Schritt wurde die Interaktionslogik definiert. Der Chatbot agiert als „Stadtplanungs-Assistent“, der auf markierte Bereiche im Stadtplan reagiert, Regelwerke berücksichtigt und durch Rückfragen eine nutzerorientierte Planung ermöglicht.

C) API-Anbindung: Darauf aufbauend wurde die technische Schnittstelle implementiert, um die Kommunikation zwischen Frontend und LLM zu gewährleisten.
   
D) Integration ins System: Der Chatbot wurde in die bestehende Anwendung eingebettet, sodass er nahtlos mit den vorhandenen Funktionen genutzt werden kann.
  
E) (Zusatz, nicht realisiert) Testing & Prompt-Optimierung: Als letzter Schritt ist die systematische Evaluation und
Optimierung des Chatbot-Promptings vorgesehen. Dieser Teil konnte bislang noch nicht umgesetzt werden und stellt eine zentrale Aufgabe für die kommenden Projektphasen dar.



## (Zusatz) Einbettung des Regelwerks in Unity
Unser Regelwerk und der Chatbot sollen zukünftig mit der verbesserten und animierten Unity verknüpft werden.  
Durch **Distrikte** und genauere Markierungen – die unter anderem auch die **Anzahl von Elementen** (z. B. Häuser) ausgeben – kann eine **bessere kontextbasierte Generierung** erfolgen.  

Der Chatbot kann über Scripts auf diese Objekte zugreifen, Vorschläge platzieren oder Feedback direkt visualisieren.


 

# Vorgängerprojekt

Ab hier beginnt die Dokumentation des Vorgängerprojekts. Sie enthält frühere Konzepte, Inhalte und Strukturen, die als Grundlage für die Weiterentwicklung unseres aktuellen Projekts dienten.

## 📌 Beschreibung
Diese Angular-Anwendung wurde speziell für das Stadtmuseum Olpe entwickelt, um Besuchern eine interaktive Auseinandersetzung mit der Geschichte und möglichen Zukunfts- oder Alternativszenarien der Stadt zu ermöglichen. Mithilfe von Maus und Tastatur können Besucher eigene Ideen in Form von Text und Zeichnungen einbringen und mithilfe künstlicher Intelligenz visuelle Darstellungen ihrer Vorstellungen erzeugen. So entstehen individuelle "Alternativweltgeschichten", die neue Perspektiven auf die Stadt eröffnen.
Über eine Auswahl an thematischen Welten – z.B. alternative Stadtpläne oder visionäre Zukunftsszenarien – können die Besucher verschiedene Ausgangssituationen erkunden und aktiv weiterentwickeln. Die zugrunde liegenden Szenarien und alten Karten werden durch das Mitarbeiter-Frontend gepflegt und aktualisiert, sodass die Inhalte jederzeit angepasst werden können. Die Anwendung verfolgt damit das Ziel, Alternativweltgeschichten von Olpe partizipativ und kreativ erlebbar zu machen.

## 📖 Inhalt
- [Verwendete Technologien](#%EF%B8%8F-verwendete-technologien)
- [Installation](#%EF%B8%8F-installation)
- [Anwendung ausführen](#-anwendung-ausführen)
- [Projektstruktur](#-projektstruktur)
- [Aufbau](#-aufbau)
- [Feature-Übersicht](#-feature-übersicht)
- [Entwicklungsprozess](#%EF%B8%8F-entwicklungsprozess)
- [Zukünftige Erweiterungen](#-zukünftige-erweiterungen)

## 🖥️ Verwendete Technologien
In diesem Projekt werden folgende Technologien und Frameworks genutzt:
- **Angular** (Version 18) – Frontend-Framework 
- **PrimeNG** (Version 17) – UI-Komponentenbibliothek 
- **PrimeFlex** – CSS-Utility-Framework
- **PrimeIcons** – Icon-Bibliothek
- **TypeScript** – (Haupt)-Programmiersprache

## ⚙️ Installation
1. Stellen Sie sicher, dass Node.js installiert ist. 
   Besuchen Sie Node.js Download-Seite und laden Sie die aktuelle LTS-Version herunter.
2. Repository klonen. 
   Klonen Sie das Repository in Ihr Projektverzeichnis:
   ```sh
   git clone https://github.com/GP-Alternativweltgeschichten/VisitorFE.git
   cd VisitorFE
   ```
3. Abhängigkeiten installieren. 
   Stellen Sie sicher, dass alle erforderlichen Pakete installiert werden:
   ```sh
   npm install
   ```
4. Angular CLI installieren. 
   Vergewissern Sie sich, dass Angular CLI auf Ihrem System installiert ist:
   ```sh
   npm install -g @angular/cli
   ```

## 🚀 Anwendung ausführen
Starten Sie den Entwicklungsserver:
```sh
ng serve
```
Die Anwendung wird standardmäßig unter http://localhost:4200/ ausgeführt.

## 📂 Projektstruktur
```
src/
  app/                  # Hauptverzeichnis der Angular-Anwendungsdateien. Enthält verschiedene Module für verschiedene Funktionen.
    error/              # Bearbeitet Fehler, die durch ungültige URLs oder fehlerhafte Anfragen entstehen.
    home/               # Startseite der Anwendung.
    progress/           # Zeigt den Fortschritt, wenn neue Welten oder Geschichten generiert werden.
    prompting/          # Ermöglicht das Bearbeiten der aktuellen Weltkarte und das Hinzufügen eines neuen Prompts für die KI.
    reset/              # Schaltfläche, um die Anwendung für den nächsten Benutzer zurückzusetzen.
    services/           # Beinhaltet die Dienste, die in der Anwendung verwendet werden (z. B. API-Aufrufe oder Authentifizierung).
    thematic-worlds/    # Stellt die verschiedenen thematischen Welten vor, die in der Anwendung angezeigt werden.
    top-bar/            # Der obere Bereich der Anwendung, der allgemeine Informationen bietet (z. B. Anwendungsname, Benutzermenu).
  assets/               # Enthält statische Assets wie Bilder, Schriftarten und andere Ressourcen.
angular.json            # Die Konfigurationsdatei für das Angular-Projekt.
package.json            # Listet die Abhängigkeiten und Skripte, die im Projekt verwendet werden.
README.md               # Dokumentation und Hinweise für das Projekt.
```

## 🧩 Aufbau
![grafik](https://github.com/user-attachments/assets/4ac0f828-0ad7-4656-ba09-34ba48250495)

**Startseite**: Die Startseite dient als Einführung und Einstiegsseite für die Besucher. Sie zeigt ein provisorisches Logo der Stadt Olpe, einen kurzen Erklärungstext, der die Anwendung und ihre Möglichkeiten beschreibt, sowie einen Radiobutton, mit dem die Auswahl des AI-Modells (Dall-E oder eigene KI) aktiviert oder deaktiviert werden kann. Ein Button leitet die Besucher anschließend zur eigentlichen Hauptseite weiter, wo die Interaktion mit der Karte beginnt. Die Startseite fungiert als Einstiegspunkt und bereitet die Besucher auf die Anwendung vor. Zusätzlich ermöglicht sie, vorab Einstellungen zur KI-Nutzung festzulegen.  

**Hauptseite**: Die Hauptseite ist die zentrale Interaktionsseite, auf der die Besucher mit einer interaktiven Karte von Olpe arbeiten können. Hier können sie Bildbereiche markieren, mögliche Begriffe oder Szenarien eingeben, das zu verwendende KI-Modell auswählen, den Texttreuegrad einstellen und somit neue Alternativweltgeschichten generieren. Außerdem bietet die Seite eine Auswahl von Themenwelten aus der Datenbank, die angesehen und als Grundlage für die Generierung verwendet werden können. Diese Seite bietet in kompakter und übersichtlicher Form Werkzeuge zur kreativen Erstellung von Alternativwelten. Sie ist auf eine intuitive, einfache Bedienung und hohe Zugänglichkeit durch spielerische Interaktion ausgelegt.

## 📋 Feature-Übersicht

| **Feature**        | **Beschreibung** |
|--------------------|------------------|
| **AI-Modell Auswahlanzeige (Startseite)**  | Radiobutton zur Aktivierung/Deaktivierung der AI-Modellauswahl für Besucher. Ermöglicht das Ein- oder Ausblenden der Modell-Auswahl zur Regulierung der OpenAI-Nutzung. |
| **Kartenanzeige**                          | Dynamisch skalierte Karte der Stadt Olpe, die als Basis für die Bildgenerierung dient. |
| **Zeichenfunktion (Draw-Feature)**         | Canvas mit gleichen Maßen der Karte, auf dem Besucher zeichnen können. Auswahl zwischen Freihandmalen, geschlossenen Formen (automatische Füllung sich schließender Formen) und Radieren. Ermöglicht das Anpassen der Strichstärke beim Zeichnen.                                                     Ermöglicht das Zurücksetzen aller bisherigen Zeichnungen auf dem Canvas. Das Zeichnen basiert auf Mouse Events (mousedown, mousemove). |
| **AI-Modell Auswahl**                      | Auswahl zwischen eigener AI (Standard) und Dall-E von OpenAI. Das gewählte Modell wird als Integer im Backend gespeichert. Kann auch durch das Mitarbeiter-Frontend geändert werden. |
| **QR-Code Anzeige**                        | Button, um einen QR-Code einzublenden (Overlay). Temporäres Feature für eine Umfrage zur Evaluation des Prototyps. |
| **Szenario-Eingabe (Textfeld)**            | Besucher können eigene Begriffe oder Sätze als Prompt eingeben. Zusätzlich gibt es eine Auto-Complete Drop-Down Liste mit Vorschlägen, die sich während des Tippens filtern (z.B. 'Fluss', 'Kirche'). |
| **Bild-Generierung**                       | Ein Klick auf den "Generieren" Button (oder Enter im Textfeld) startet die Generierung. Es werden der eingegebene Text, die Zeichnung und die ausgewählte Karte (als Base64-PNG), das ausgewählte AI-Modell und Texttreuegrad an das Backend gesendet.                                                Nach der Verarbeitung wird das generierte Bild als neue Karte gesetzt. Die Generierung wird nur erlaubt, wenn sowohl Text als auch eine Zeichnung vorhanden sind. |
| **Ladebalken (bei Generierung)**           | Während der Generierung wird die Oberfläche gesperrt und ein Ladebalken angezeigt, bis das Bild generiert wurde. Dieser zählt in zufälligen Schritten hoch. Die Dauer variiert je nach AI-Modell. |
| **Reset-Button**                           | Setzt beinahe alle getätigten Änderungen und Einstellungen zurück: Zeichnungen des Canvas, Texteingabe, Zeichenmodus, Strichstärke, Texttreue und ausgewählte Karte. Das ausgewählte AI-Modell bleibt bestehen. |
| **Texttreue-Einstellung**                  | Schieberegler zur Anpassung, wie nah die AI dem eingegebenen Text folgen soll (beeinflusst auch die Integration des generierten Bereichs in die Karte). |
| **Anzeige der Themenwelten**               | Darstellung aller gespeicherten Themenwelten aus der Datenbank. Besucher können diese auswählen, ansehen und mithilfe der Zeichenfunktion editieren und zur Generierung nutzen. Karten, die als nicht editierbar markiert sind, lassen keine                                                          Zeichnungen oder Generierungen zu (Zeichenfunktionen und Generieren-Button sind deaktiviert). |  

## 🛠️ Entwicklungsprozess
### 📝 Ablauf:
1. **Konzeption**: Konzeption des Aufbaus der Benutzeroberfläche und Definition benötigter Features und Schnittstellen.
2. **Aufbau der Grundstruktur**: Implementierung grundlegender Funktionen (Anzeige der Karte, Texteingabe, Anzeige der Themenwelten) als Angular-Komponenten.
3. **Integration der Datenbank**: Anbindung der Datenbank über die Backend-Application zur Verwaltung der Themenwelten.
4. **Trennung von Mitarbeiter- und Besucher-Frontend**: Einführung separater Benutzeroberflächen für die interne Pflege der Themenwelten und öffentliche Nutzung durch Museumsbesucher.
5. **Integration der KI-Funktionalität**: Anbindung an den KI-Server über die Backend-Application, zur Generierung neuer Bilder basierend auf Benutzer-Inputs.
6. **Iterative Optimierungen**: Anpassungen und Erweiterungen der Benutzeroberfläche z.B. zur Fehlerbehandlung oder Absicherung gegen Fehlbedienungen.

### 🚧 Herausforderungen:
- **Zeichen-/Mal-Feature**: Das flüssige Malen und das reibungslose Schließen von gezeichneten Bereichen innerhalb der Zeichenfunktion erwiesen sich als zeitaufwändig.
- **Anbindung der Themenwelten**: Die Anbindung des Backends zur Anzeige der Themenwelten erforderte Anpassungen in der Datenstruktur, um alle Entitäten korrekt zu erzeugen und anzuzeigen.
- **Anbindung der KI-Bildgenerierung**: Bei der Anbindung der KI zur Bildgenerierung gab es Probleme mit der Bildgröße und der doppelten Versendung des Prompts, die die Antwortzeit verzögerte.

  Insgesamt dauerten einige Features oder Anbindungen länger als andere, konnten aber schließlich gelöst werden.

### ❌ Verworfene Features: 
- **Bildvorschau der Themenwelten**: Eine Bildvorschau für jede Themenwelt wurde gestrichen, da die Karte in der Topolgie-Ansicht einen größeren Mehrwert bietet als in der reduzierten Card-Ansicht.
- **Zoom-Feature für die Karte**: Ein Zoom-Feature wurde verworfen, da der Kartenbereich ausreichend groß ist und ein Zoom das Höhenprofil der Karte verzerrt hätte.
- **Sprachauswahl**: Eine vollständige Sprachauswahl wurde vorerst nicht umgesetzt, da die derzeitigen Benutzer ausschließlich Deutsch sprechen.

## 📈 Zukünftige Erweiterungen
- **Mehrsprachigkeit und Sprachauswahl**: Einführung einer Sprachauswahl, die es den Besuchern ermöglicht, zwischen Deutsch und Englisch (bzw. weiteren Sprachen) direkt in der Anwendung zu wechseln.
- **Begrenzte Texttreue-Einstellungen**: Anpassung der Texttreue-Auswahl auf vordefinierte, verständliche Stufen (z.B. niedrig, mittel, hoch), um die Interaktion zu vereinfachen und die Auswahl für Benutzer nachvollziehbarer zu machen.
- **Wählbare Stile für KI-generierte Bilder**: Möglichkeit, aus verschiedenen Bildstilen für die KI-generierten Bilder auszuwählen (z.B. historisch, modern, futuristisch).
- **Speicherung und Export generierter Bilder**: Funktion, die es Besuchern ermöglicht, die von der KI erzeugten Bilder temporär zu speichern und bei Bedarf auf eigene Geräte (z.B. via QR-Code) zu übertragen.
- **Vorher-Nachher-Vergleich von Karten**: Implementierung eines interaktiven Overlays mit Slider, um die Originalkarte und das KI-generierte Bild direkt miteinander vergleichen zu können.

---

Happy Coding! 🚀
