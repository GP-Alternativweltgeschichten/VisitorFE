# Angular Application

## 📌 Projektbeschreibung
Diese Angular-Anwendung wurde entwickelt, um den Museumsbesuchern die Möglichkeit zu geben, alternative Welten und Geschichten rund um Olpe zu erkunden. Die verschiedenen thematischen Welten, die in der Anwendung gezeigt werden, können auf der entsprechenden Mitarbeiter-Webseite bearbeitet werden. Die Anwendung bietet Funktionen wie das Anzeigen von verschiedenen thematischen Welten und das Generieren neuer alternativer Weltgeschichten mithilfe von KI.

## 📖 Inhalt
- [Installation](#installation)
- [Anwendung ausführen](#anwendung-ausfüehren)
- [Projektstruktur](#projektstruktur)

## ⚙️ Installation
1. Stellen Sie sicher, dass Node.js installiert ist
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

## ...

---

Happy Coding! 🚀
