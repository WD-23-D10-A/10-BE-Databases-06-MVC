# MVC

In diesem kleinen Projekt bauen wir eine einfache Webanwendung, in der man Artikel erstellen, anzeigen und löschen kann. Dabei verwenden wir das MVC-Muster (Model-View-Controller), um die Struktur des Codes sauber und übersichtlich zu halten.

Was wir machen:
* Frontend (View): Mit React erstellen wir die Benutzeroberfläche. Hier kann der Benutzer Artikel sehen, neue Artikel erstellen und Details einzelner Artikel anzeigen. Die Navigation zwischen den Seiten erfolgt mit react-router-dom.

* Backend (Controller): Wir nutzen Express, um die Anfragen vom Frontend zu verarbeiten. Der Controller empfängt diese Anfragen, kommuniziert mit dem Model (Datenbank) und gibt die passenden Antworten zurück.

* Datenbank (Model): Die Artikel selbst werden in einer MongoDB-Datenbank gespeichert, wobei wir Mongoose als ORM verwenden. Das Model definiert, wie die Daten strukturiert sind (Titel, Inhalt, Autor, etc.).

Warum MVC?
* Model: Behandelt die Daten (Artikel) und die Interaktionen mit der Datenbank.
* View: Kümmert sich um das, was der Benutzer sieht und mit dem er interagiert.
* Controller: Verbindet das Model und die View, indem es Benutzereingaben verarbeitet und die passende Logik anwendet.

Durch diese Struktur bleibt unser Code übersichtlich, leicht erweiterbar und gut wartbar.

Am Ende haben wir eine einfache, aber funktionale Anwendung, die zeigt, wie MVC in einem modernen Webstack funktioniert.

## Das Model-View-Controller (MVC) ist ein Muster, das hilft, Programme klarer zu strukturieren:

1. Model (Modell): Das ist der Teil, der sich um die Daten kümmert. Es speichert die Informationen und bearbeitet sie. Zum Beispiel: Wenn du eine App hast, die Notizen speichert, dann speichert das Model deine Notizen.

2. View (Ansicht): Das ist der Teil, den der Benutzer sieht und mit dem er interagiert. Es zeigt die Daten an, die vom Modell kommen. In unserem Beispiel würde die View die Notizen auf dem Bildschirm anzeigen.

3. Controller (Steuerung): Das ist der Teil, der die Eingaben des Benutzers verarbeitet und entscheidet, was als nächstes passieren soll. Wenn du in der Notizen-App eine neue Notiz erstellst, sagt der Controller dem Modell, die neue Notiz zu speichern, und sagt der View, die Notiz anzuzeigen.

Zusammen arbeiten diese drei Teile, um ein Programm zu erstellen, das übersichtlich und leicht zu ändern ist.
