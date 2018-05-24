# Anforderungs- und Entwurfsspezifikation ("Pflichtenheft")

T-BOT, Nikolai Kloß

# 1 Einführung

## 1.1 Beschreibung
    Bei "T-BOT" handelt es sich um einen automatisierten Händler für
    Kryptowährungen. Die progressive-Web-App ist in der Lage, Depot's/Wallets
    diverser Handelsplattformen zu verwalten und Positionen an den jeweiligen
    Märkten zu öffnen/schließen. Dem Benutzer steht es hierbei offen,
    in Echtzeit selbst zu handeln, oder dieses, einen der frei- oder
    auch käuflich erwerbaren Handelsalgorithmen zu überlassen.

    Die Handelsalgorithmen (BOTs) lassen sich vom Anwender selbst erstellen.
    Die BOTs können für den eigenen Gebrauch eingeschränkt werden, oder aber
    auch publiziert zur freien Verfügung stehen, oder für Geld angeboten werden.

    Die Applikation liegt in 2 Varianten vor. T-BOT kann
    kostenlos verwendet werden. Die Bezahlversion beinhaltet
    das Feature, dass der eingesetzte BOT 24/7 handelt,
    unabhängig davon, ob der Anwender die App beendet hat.
    Es werden hierzu Serverressourcen bereitgestellt.

    Die Bezahlversion wird in Form eines monatlichen Abonnements realisiert.

    Die "PWA" Rich-Client-Applikation ist plattformunabhängig und auch im
    Webbrowser ausführbar.

## 1.2 Ziele
    - Anwendungsbereiche:
          Die Applikation findet im Bereich des automatisierten-echtzeit-Handels
          seinen Platz.

    - Motivation:
          Eine von Community, um Algorithmen beliebig erweiterbare
          und plattformunabhängige, freie Trading-Applikation schaffen.

    - Umfang:
          * Verwaltung von Wallets diverser Handelsplattformen
          * Visualisierung von Charts, Positionen, Indizes
          * Echtzeithandel in der Applikation
          * Automatisierter handel durch spezielle Algorithmen (BOTs)
          * BOTs lassen sich vom Anwender erstellen
          * BOTs lassen sich vom Ersteller käuflich vertreiben   
          * BOTs lassen sich von Anwendern bewerten

    - Alleinstellungsmerkmale:
          * Automatisierter Handel ist erweiterbar
          * Die Applikation ist für den Anwender wahlweise kostenlos   

    - Zielbenutzergruppen:
          * Gute Kenntnisse in IT-technischen Zusammenhängen
          * Interesse am Kryptowährungenhandel
          * Kenntnisse zu finanzwirtschaftlichen Kontext
          * Erfahrungen in Spekulationsgeschäften

    - Abgrenzung:
          * keine Garantie für Profit
          * Ausschließlich für Kryptowährungenhandel (kein Forex, Aktien ...)          

# 2 Anforderungen

## 2.1 Funktionale Anforderungen
    - Use-Case Diagramme

**Allgemein:**

![T-BOT](UseCase/USE_CASE-Overview.png)
![Wallet](UseCase/USE_CASE-Wallet.png)

**Trading:**

![Realtime](UseCase/USE_CASE-Realtime2.png)

**Konfiguration:**

![Config](UseCase/USE_CASE-Config2.png)
![BOTs](UseCase/USE_CASE-BOT.png)

## 2.2 Nicht-funktionale Anforderungen

### 2.2.1 Rahmenbedingungen

    Mindestens ein Handelskonto bei einen der unterstützten Handelsplattformen
    führen.

### 2.2.2 Betriebsbedingungen
    -   Betriebsbedingungen ist ein internetfähiges Endgerät, welches in der
        Lage ist die folgenden HTTPS/Webbrowser auszuführen.

        Unterstützte Webbrowser:
        ab Internet Explorer 9.0.8112.16421  
        ab Mozilla Firefox 10.0
        ab Opera 11.10
        ab Google Chrome 10.0

        Eine schnelle Internetverbindung wird empfohlen.

### 2.2.3 Qualitätsmerkmale
    - Performance
      Der Kern des Systems muss eine hohe Performanz vorweisen.
      Dies bedeutet, dass eine geringe Input/Output-Latenz Priorität besitzt.

    - Sicherheit

    - Zuverlässigkeit

    - Benutzerfreundlichkeit


## 2.3 Graphische Benutzerschnittstelle
    - GUI-Mockups passend zu User Stories

![LoginView](MockUps/LoginView.png)
![RegisterView](MockUps/RegisterView.png)
![WalletView](MockUps/WalletView.png)
![WalletView-Sidebar](MockUps/WalletViewSidebarMenu.png)
![RealtimechartView](MockUps/RealtimeChartView.png)
![HistoryView](MockUps/HistoryView.png)
![StrategyEditorView](MockUps/StrategyEditorView.png)
![StrategyChooserView-Code](MockUps/StrategyEditorView-Code.png)
![StrategyChooserView-Debug](MockUps/StrategyEditorView-Debug.png)
![StrategyChooserView-Options](MockUps/StrategyEditorView-Options.png)
![BOTSettingsView](MockUps/BOTSettingsView.png)
![UserSettingsView](MockUps/UserSettingsView.png)

    - Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
![Navigation](MockUps/Navigation.png)

## 2.4 Anforderungen im Detail
    - User Stories mit Akzeptanzkritierien
    - Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
    - Strukturierung der User Stories in funktionale Gruppen

**Allgemein:**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Benutzer| mich im System registrieren|ich mich anmelden kann|Anmeldung möglich|
|Benutzer|mich im System anmelden|ich das System nutzen kann|Abmeldung möglich|
|Benutzer|mich vom System abmelden|ich Sessions auf fremden Clients beenden kann|MessageBox: "Sie sind nun ausgeloggt"|
|Benutzer|mein Passwort zurücksetzen|ich mich wieder im System anmelden kann|Anmeldung wieder möglich|

**Konfiguration**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
|Benutzer|Premiummitglied werden|ich die Vorteile der Mitgliedschaft nutzen kann|MessageBox:"Sie sind nun Premiummitglied!"|
|Benutzer|die Premiummitgliedschaft beenden|ich die damit verbundenen Kosten nicht mehr tragen muss|MessageBox:"Sie sind nun kein Premiummitglied mehr!"
|Benutzer|24/7 Trading konfigurieren|ich ggf. den BOT auch dann weiterhandeln lasse, selbst wenn die App clientseitig geschlossen wurde|Aktivierter BOT handelt trotz Beendigung der App am Client|
|Benutzer|automatische Anmeldung konfigurieren|ich mich nicht ständig an bestimmten Clients anmelden muss|Bei Aufruf der App wird die Anmeldung übersprungen|

**Echtzeithandel**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
|Benutzer|Positionen öffnen können|ich aktiv am Handel teilnehmen kann|Position wird im Wallet gelistet|
|Benutzer|Positionen schließen können|ich Gewinne/Verluste realisieren kann|Position wird aus der Wallet entfernt|
|Benutzer|einen selektierten BOT aktivieren können| dieser die Handelsentscheidungen für mich trifft & agiert|MessageBox:"BOT Trading ist nun aktiviert!"|
|Benutzer|einen selektierten BOT deaktivieren können|ich die Handelsentscheidungen selber treffe & agiere|MessageBox:"BOT Trading ist nun deaktiviert"
|Benutzer|StopLoss/TakeProfit setzen können|an den definierten Schwellwerten eine Position geschlossen wird| Position wird bei erreichen des Wertes aus dem Wallet entfernt|
|Benutzer|eine Pending Order setzen| bei erreichen eines definierten Kurses, automatische eine Position eröffnet wird|Position erscheint bei Erfüllung der Bedingung im Wallet|

**BOTs**

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
|Benutzer|einen BOT selektieren|ich diesen auf meinen Chart anwenden kann|In der RealtimeChartView erscheint der selektierte BOT|
|Benutzer|einen BOT konfigurieren|ich diesen nach meinen eigenen Parametern arbeiten lassen kann|MessageBox:"Ihre Parameter wurden übernommen!"
|Benutzer|einen BOT erwerben|ich diesen für meine Charts anwendbar machen kann|MessageBox:"Dieser BOT gehört nun Ihnen!"|
|Benutzer|einen BOT bewerten|andere Benutzer einen Endruck, noch vor Erwerb des Bots, kriegen können|Bewertung wird nun für alle angezeigt|
|Benutzer|einen selbst erstellten BOT veröffentlichen| dieser von anderen Benutzern verwendet werden kann| BOT wird zum Erwerb gelistet|
|Benutzer|einen BOT erstellen|der Handel automatisiert werden kann|Der erstellte BOT steht nun zur Auswahl|
|Benutzer|einen erstellten BOT bearbeiten| ich diesen erweitern oder verändern kann|MessageBox:"Die Änderungen wurde gespeichert!"|
|Benutzer|Debugging-Funktionen nutzen|die Entwicklung/Fehlerbehebung eines BOTs erleichtert wird|Setzen von Breakpoints usw. möglich|

# 3 Technische Beschreibung

## 3.1 Systemübersicht
    - Systemarchitekturdiagramm ("Box-And-Arrow" Diagramm)
![](Architektur/Architekturdiagramm3.png)
    - Schnittstellenbeschreibung
    Die MYSQL Datenbank wird als Modul in NodeJS eingebunden und benötigt somit
    keine spezielle Schnitstelle.

    - Kommunikationsprotokolle
    Zur Kommunikation zwischen Serverside und Clientside kommt HTTPS zum Einsatz.
    Um zwischen Ressourcen und Serverside zu kommunizieren wird das REST Pattern
    eingesetzt.

    - Datenformate
    Zur Datenhaltung verwendet das System eine relationale MYSQL Datenbank.


## 3.2 Softwarearchitektur
    - Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

## 3.3 Datenmodell
    - Konzeptionelles Analyseklassendiagramm

## 3.4 Abläufe
    - Aktivitätsdiagramme für relevante Use Cases
    - Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases

## 3.5 Entwurf
    - Detaillierte UML-Diagramme für relevante Softwarebausteine

# 4 Projektorganisation

## 4.1 Annahmen
    - Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhängigkeiten
    - Verwendete Technologien (Programmiersprache, Frameworks, etc.)
    - Einschränkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme, Entwicklungsumgebung)
    - Interne Qualitätsanforderungen (z.B. Softwarequalitätsmerkmale wie z.B. Erweiterbarkeit)

## 4.2 Verantwortlichkeiten
    - Zuordnung von Personen zu Softwarebausteinen aus Kapitel 3.1 und 3.2
    - Rollendefinition und Zuordnung

## 4.3 Grober Projektplan
    - Meilensteine

# 5 Anhänge

## 5.1 Glossar
    - Definitionen, Abkürzungen, Begriffe

## 5.2 Referenzen
    - Handbücher, Gesetze

## 5.3 Index
