# Lista Zadań do Wykonania (To-Do List)

## 1. Nazwa projektu
Aplikacja typu "Lista zadań do wykonania" (To-Do List).

## 2. Krótki opis aplikacji
Prosta, responsywna i intuicyjna aplikacja webowa służąca do zarządzania codziennymi obowiązkami. Pozwala użytkownikowi na łatwą organizację czasu poprzez dodawanie, przeglądanie, edytowanie i usuwanie zaplanowanych zadań.

## 3. Zastosowane technologie
* **HTML5** - struktura aplikacji.
* **CSS3** - stylowanie, estetyczny wygląd oraz responsywność (RWD).
* **JavaScript (Vanilla JS)** - logika aplikacji, obsługa zdarzeń i manipulacja modelem DOM.
* **Local Storage (Web Storage API)** - mechanizm trwałego zapisu danych bezpośrednio w przeglądarce użytkownika (dane nie znikają po odświeżeniu strony).

## 4. Główne funkcjonalności
* Dodawanie nowych zadań z możliwością określenia: tytułu (wymagany), opisu (opcjonalny) oraz priorytetu (Niski, Średni, Wysoki - lista wyboru).
* Przeglądanie listy zapisanych zadań.
* **Edycja** już istniejących zadań.
* Usuwanie zadań z listy z wcześniejszym potwierdzeniem.
* Walidacja formularza zapobiegająca zapisaniu zadania bez podania tytułu.
* Komunikaty wizualne dla użytkownika informujące o pomyślnym dodaniu, edycji, usunięciu elementu lub o błędzie.

## 5. Instrukcja uruchomienia aplikacji
Aplikacja działa w całości po stronie klienta (frontend) i nie wymaga instalacji żadnych dodatkowych środowisk uruchomieniowych, serwerów ani baz danych:
1. Pobierz kod źródłowy z tego repozytorium.
2. Rozpakuj archiwum (jeśli pobrano plik ZIP).
3. Otwórz plik `index.html` w dowolnej nowoczesnej przeglądarce internetowej (np. Google Chrome, Mozilla Firefox, Microsoft Edge).

## 6. Link do działającej wersji aplikacji
https://yaroslavkalashnyk77319.github.io/poprawka-/

## 7. Edycja istniejących elementów
**Tak**, aplikacja w pełni pozwala na edytowanie istniejących elementów (możliwość zmiany tytułu, opisu oraz priorytetu zadania). Spełnia to opcjonalny wymóg zadania pozwalający na uzyskanie oceny wyższej niż 3,5.

## 8. Lokalizacja najważniejszych funkcji w kodzie źródłowym
Cała logika aplikacji znajduje się w pliku `script.js`. Poniżej wyszczególniono lokalizację kluczowych funkcji:
* **Zapis i odczyt z Local Storage:** Inicjalizacja zmiennej `tasks` na początku pliku (funkcja `JSON.parse`) oraz funkcja `saveToLocalStorage()`.
* **Dodawanie zadań, aktualizacja i walidacja danych:** Główny event listener podpięty pod zdarzenie formularza: `form.addEventListener('submit', function(e) { ... })`. Wewnątrz znajduje się warunek sprawdzający, czy tytuł nie jest pusty (walidacja) oraz blok `if (idValue)` rozróżniający tryb dodawania od trybu edycji.
* **Usuwanie zadań:** Funkcja `deleteTask(id)`, wywoływana przyciskiem "Usuń" na liście zadań.
* **Przygotowanie do edycji:** Funkcja `editTask(id)`, która wyszukuje zadanie i ładuje jego dane z powrotem do pól formularza.
* **Komunikaty dla użytkownika:** Funkcja `showAlert(message, type)`.
