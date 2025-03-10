# Angular Application

## 📌 Projektbeschreibung
Diese Angular-Anwendung wurde entwickelt, um den Museumsbesuchern auf interaktive Weise alternative Welten und Geschichten rund um Olpe erlebbar zu machen. Besucher können mittels Maus und Tastatur eigene Ideen eingeben und mithilfe einer KI Bilder zu individuellen Alternativweltgeschichten generieren. Die verschiedenen thematischen Welten, die in der Anwendung gezeigt werden, können auf der entsprechenden Mitarbeiter-Webseite bearbeitet werden. Die Anwendung bietet Funktionen wie das Anzeigen von verschiedenen thematischen Welten und die Eingabe von Text und Zeichnungen zur Generierung neuer Alternativweltgeschichten mithilfe der angebundenen KI.

## 📖 Inhalt
- [Installation](#%EF%B8%8F-installation)
- [Anwendung ausführen](#-anwendung-ausführen)
- [Projektstruktur](#-projektstruktur)
- Aufbau
- Features
- [Entwicklungsprozess](#%EF%B8%8F-entwicklungsprozess)
- [Zukünftige Erweiterungen](#-zukünftige-erweiterungen)

## ⚙️ Installation
1. Stellen Sie sicher, dass Node.js installiert ist.
   Besuchen Sie Node.js Download-Seite und laden Sie die aktuelle LTS-Version herunter.
2. Repository klonen
   Klonen Sie das Repository in Ihr Projektverzeichnis:
   ```sh
   git clone https://github.com/GP-Alternativweltgeschichten/VisitorFE.git
   cd VisitorFE
   ```
3. Abhängigkeiten installieren
   Stellen Sie sicher, dass alle erforderlichen Pakete installiert werden:
   ```sh
   npm install
   ```
4. Angular CLI installieren
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

## Aufbau

## Features

## 🛠️ Entwicklungsprozess
### 📋 Ablauf:
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
- **Sprachauswahl**: Eine spätere Version der Anwendung könnte eine Sprachwahl zwischen Deutsch und Englisch bieten.
- **Texttreue-Einstellung begrenzen**: Die Einstellung der Texttreue könnte bspw. auf drei geeignete, vorgegebene Stufen (z.B. niedrig, mittel, hoch) begrenzt werden.
- **Bildstil wählbar**: Es könnte ermöglicht werden, den Stil der generierten Bilder auszuwählen, z.B. altertümlich oder neumodisch.
- **Generierte Bilder speichern**: Die erzeugten Bilder könnten in der Datenbank gespeichert oder auf Anfrage an externe Geräte übertragen werden.

---

Happy Coding! 🚀
