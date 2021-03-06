**Attendance Log**

**Attendance Log** is a web app with AI that automate attendance record.
It will detect evey face that came in the range of the camera and compare it with the all the employees
in the system. Then it will automatically update the arrival or departure time in the database.
At the end you get for every day and every employee a *record* with:
* Name
* Date
* Arrival time
* Arrival picture
* Departure time
* Departure picture
* Is he late?
* Has he left early?


## More details
* [Back-end details](API/README.md)
* [Front-end details](FRONT/late-checker/README.md)

## Features

* You can see the video feed that record people that leave or come in the room.
* You can search for an employee to check the time of his time of arrival and departure.
* You can check the keep a screenshot of every arrival or departure.
* You can add an employee in the system with a single picture.
* You can delete an employee of the system.
* You can fastly see the 5 last employee detected by the camera.


## How does it work?

We take the camera's feed. A first model will detect id there is faces on it and where.
A seconde model will make the match with all the face that are in the system.
When the model have extracted all the information from each frame, it send it to the API.
The API will send the data to the database.
The web app will send request to the API. The API will take information asked in the DB and send it to the front-end.
The front-end will display all the data and allow you to seek for individual data.


## Which technologies?

* **Front-end:** *ReactJs* !
* **Back-end API:** *Python Flask* !
* **AI model:** [Face_recognition]
* **Installation and environment setup:** *Bash* 
* **Database**: *PostgreSQL* 

