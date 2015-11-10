# Angular.js - harjoitustyö eli uPay

## Idea

Yksinkertainen (mobiili/web) kirjanpito, johon voi kirjata esim. lomareissulla tai saunaillan järjestelyistä syntyneitä kustannuksia. 
Maksutapahtumat jäävät muistiin ja ohjelma:
* jakaa osuudet osallistujien kesken
* pitää kirjaa osallistujien tilanteesta: kuka velkaa kellekin (huom! tämä feature puuttuu 10.11 klo 18:11)

## Käyttöohje
* Lisätään henkilöitä (max 4, tämä nyt vain angular-testauksen vuoksi)
* Henkilö-riviä painamalla avautuu lomake, jossa oletusmaksajana rivillä oleva henkilö
* syöteään summa
* tallennus

Ohjelma jakaa maksetun tasan summan kaikille, jotka sillä hetkellä on listassa: summa / henkilöt. Maksaja näkyy vihreänä, muut punaisena. Henkilön (paitsi maksajan) checkboxia klikkaamalla maksun voi kuitata, jolloin se muuttuu vihreäksi.

Sekä henkilö- että maksurivejä voi myös poistaa X-painikkeesta.

Yhteenveto: todo...

Paljon jäi toteuttamatta ominaisuuksia:
-kirjautuminen, "lisää uusi..." (lomareissu, saunailta, parisuhde...)

## URL ym.
										
Sovellus pyörii osoitteessa: http://j0ne.github.io/index.html

Tietokantana firebase
Käyttää myös angularfire-kirjastoa.
