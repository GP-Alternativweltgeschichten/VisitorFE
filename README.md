##   Besucher-Frontend: AI CHAT- Feature Dokumentation

## 📌 Beschreibung der Ausgangssituation
   - Trennung in die Teilteams (POC KI-Kontext & Unity (Link zu Unity-Doku))
   - Frontend des Vorgänderprojekts (Verlinkung)
   - Recherche wie gehts weiter (Miro-Link)
  
Die Analyse des Vorgängerprojekts aus dem Wintersemester 2024/2025 (Hier Link) verdeutlichte, dass das eingesetzte KI-Modell in seiner derzeitigen Form noch nicht über die notwendige Reife verfügt, um durchgehend überzeugende Ergebnisse zu liefern. Insbesondere die Qualität und Präzision der generierten Inhalte erwiesen sich als unzureichend, was die Notwendigkeit einer gezielten Weiterentwicklung deutlich machte.
Darauf aufbauend wurde im Guided Project des Sommersemester 2025 zunächst der IST-Status eingehend analysiert und durch eine tiefergehende Recherchephase ergänzt. Ziel war es zu prüfen, welche Ansätze und Ideen aus dem Vorgängerprojekt weiterverfolgt werden können und welche hingegen verworfen werden sollten.

Im Anschluss daran erfolgte die Aufteilung in zwei Teilgruppen:

- Teilgruppe POC KI-Kontext: Diese Gruppe widmete sich der Erweiterung des bestehenden IST-Status. Im Vordergrund stand die Konzeption und Evaluation eines Chatbot-Interfaces, das Nutzer*innen beim Prompting unterstützt. Durch eine bessere Strukturierung und Aufbereitung der Eingaben sollte die Qualität der KI-Generierungen gesteigert und die Interaktion insgesamt verbessert werden. Die Entscheidung, den Schwerpunkt auf diesen Aspekt zu legen, resultierte aus der Erkenntnis, dass die Effektivität des Gesamtsystems maßgeblich von der Qualität der Nutzereingaben und der darauf basierenden Modellantworten abhängt. Damit konnte ein unmittelbarer Beitrag zur Nutzbarkeit und Akzeptanz des Projekts geleistet werden, während die Optimierung des KI-Modells selbst als langfristige Entwicklungsaufgabe bestehen bleibt.
  
- Teilgruppe Unity: Parallel dazu wurde die Stadtkarte von Olpe in Unity nachgebaut, um perspektivisch neue visuelle und interaktive Möglichkeiten zu eröffnen und das Projekt langfristig um immersive Darstellungsformen zu ergänzen.

## 🚀 Ziel des Semesterprojektes 2025

Aufbauend auf den Ergebnissen der Analyse und Recherche verfolgte das Guided Project im Sommersemester 2025 das Ziel, die bisherigen Strukturen gezielt weiterzuentwickeln und in eine nächste Entwicklungsstufe zu überführen.
Zentrale Leitfragen waren dabei:
Wo wollen wir hin?
→ Hin zu einem System, das Nutzer*innen stärker unterstützt, indem es durch ein Chatbot-Interface die Qualität der Interaktion mit dem KI-Modell unmittelbar verbessert und perspektivisch durch immersive Visualisierungen erweitert wird.
Was brauchen wir dafür?
→ Ein verbessertes Prompting durch ein nutzerorientiertes Interface, die sukzessive Erweiterung und Präzisierung des Trainingsdatensatzes sowie die Entwicklung zusätzlicher visueller Darstellungsformen (Unity), die alternative Stadtgeschichten anschaulich und interaktiv erlebbar machen.
Das Semesterprojekt legte damit den Grundstein für eine zweigleisige Weiterentwicklung: kurzfristig die Optimierung der Nutzerinteraktion durch verbesserte Eingaben und unmittelbare Systemunterstützung, langfristig die Stärkung der Modellqualität und visuellen Dimension des Projekts.

## 🤖 Integration eines KI-Chatbot in das User Interface

     - LLM Integration
     - Chatbotfeatures (Core-Features/ Nice-to-have)
     - Vorstellung Olpi inkl. Wireframes (Figma)
     - 6 Schritte und To-Dos
     - Logik
     - Entwicklung
    
Im Rahmen der Erweiterung des IST-Status wurde ein Chatbot-Konzept entwickelt, das als zentrales Interface zwischen Nutzerin und KI-Modell fungiert. Grundlage hierfür ist die Integration eines Large Language Models (LLM), das die Eingaben der Nutzerinnen verarbeitet und strukturiert. Ziel war es, die Interaktion mit dem KI-System intuitiver und effizienter zu gestalten, indem der Chatbot als „Vermittler“ beim Prompting agiert.
Dazu wurden zunächst die wesentlichen Kernfunktionen (Core Features) definiert, die eine direkte Verbesserung der Nutzererfahrung gewährleisten. Ergänzend wurden optionale Erweiterungen (Nice-to-have Features) identifiziert, die in zukünftigen Entwicklungsphasen das Funktionsspektrum erweitern können. Unter dem Projektnamen „Olpi“ wurde das Chatbot-Konzept in Form von Wireframes (Figma) visualisiert, um die geplante Nutzerführung und Interaktionslogik frühzeitig zu evaluieren.

Für die Umsetzung wurde eine sechsstufige Vorgehensweise mit klaren To-Dos entwickelt, die von der Konzeption über die Implementierung bis hin zur Testung reicht. Zentrale Bestandteile dieser Arbeit waren die Definition der Logik, welche die Funktionsweise des Chatbots steuert, sowie die anschließende technische Entwicklung, die auf eine nahtlose Einbindung in das bestehende Frontend abzielt.
    
## 📚 Regelwerk
Das Regelwerk dient als Wissensbasis für den Chatbot, um kontextabhängige und topologisch sinnvolle Vorschläge sowie Feedback zu generieren. Es kombiniert einen Baukasten-Ansatz mit logischen Wenn-Dann-Regeln, die auf die Stadt-Topologie von Olpe angewendet werden können. Die Betrachtung erfolgt primär auf der Makroebene, um städtische Strukturen und Zonen sinnvoll zu berücksichtigen.

Ziel des Regelwerks ist es, dass der Chatbot:
  - den Kontext (Ort, Topologie, Zonen) erkennt,
  - die passende Kategorie auswählt (basierend auf dem Regelwerk),
  - Vorschläge generiert (entweder aus einer Tabelle oder LLM-unterstützt),
  - Feedback gibt, wenn eine Nutzeridee unpassend ist.

Die Regeln können dabei fest oder als vorschlagsorientiert implementiert sein, um Flexibilität zu ermöglichen.

### 1. Analyse der Prompts 📊

Für die Analyse standen **302 Eingaben** von Schüler:innen zur Verfügung – ein:e Schüler:in konnte dabei mehrere Ideen einbringen. Jede Eingabe war mit **Markierungen auf der Stadtkarte von Olpe** versehen, die angaben, wo die Idee umgesetzt werden sollte.

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

### 2. Ergebnisse der Prompts (Kategorie und Heatmap) 🌡️

Zur Visualisierung der Verteilung der markierten Bereiche wurde ein Python-Skript genutzt, um eine **Heatmap** zu generieren.  

> **Hypothese:** Die Markierungen auf der Heatmap-Karte befinden sich überwiegend in der **Innenstadt**. Dies könnte entweder eine **bewusste Entscheidung** gewesen sein oder aus **Bequemlichkeit**, wobei die Mitte der Stadt als Referenzpunkt genutzt wurde.

#### Heatmap-Typen

- **Heatmap.png** – Zeigt die relative Häufigkeit der markierten Pixel; kein Hintergrund, nur Farben (dunkelrot → weiß); enthält Legende.  
- **Overlay.png** – Halbtransparente Heatmap über erstes Bild der Sammlung; zeigt Hotspots im Bildkontext.  
- **OverlayOnCity.png** – Halbtransparente Heatmap über Stadtbild Olpe; zeigt räumliche Verteilung direkt auf der Karte.

### 3. Regelwerk – Aufbau und Logik
Das Regelwerk ist hierarchisch und modular aufgebaut und beeinhaltet:


### 4. Einbettung des Regelwerks in den Chatbot
Unser Regelwerk und der Chatbot sollen zukünftig mit der verbesserten und animierten Unity verknüpft werden.  
Durch **Distrikte** und genauere Markierungen – die unter anderem auch die **Anzahl von Elementen** (z. B. Häuser) ausgeben – kann eine **bessere kontextbasierte Generierung** erfolgen.  

Der Chatbot kann über Scripts auf diese Objekte zugreifen, Vorschläge platzieren oder Feedback direkt visualisieren.



### 5. Einbettung des Regelwerks in Unity (perspektivisch)

     - Mindmap (Screenshot)
     - Regelwerk Aufbau und Logik
     - Einbettung des Regelwerks in den Chatbot
     - Einbettung des Regelwerks in Unity (Perspektivisch) --> Sowas wie Grid-System und einzelne Objekte die benannt sind auf die Zugreifen über Unity
     - 
##  Beschreibung

## Projekt Vorgehen





#Vorgänger Frontend Dokumentation

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
