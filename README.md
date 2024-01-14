# UTRITION 1/14/2024

A nutrient tracker  for University of Massachusetts students

## Description

This project was meant to provide a method for students to easily track their calories, protein, and other macro/micro nutrients.
The nutrient information is all gathered from https://af-foodpro1.campus.ads.umass.edu/foodpro.net/location.aspx 
This project makes use of React, the MaterialUI library, a Java-SpringBoot backend, and MongoDB as a database.
Unfortunately, I could not find any API endpoints for any UMass nutrition data, so many of the food items are missing due to time constraints.

### React: 
Reacts allowance for the reuse of components was neccesary in developing this project, as the appbar is reused in every page.
MaterialUI also assisted in making the designing much easier, as well as allowed for efficent mapping of each of the item lists.

### Java-Springboot, MongoDB:
I chose a Java-Springboot, MongoDB backend due to it being common in the workplace today; Additionally, I am familiar in developing these type of applications.
Lastly, MongoDB has a supported free feature that makes using it as a database very easy; however, if I ever wanted to deploy it later I can very easily.

### Challenges:
1. Learning new Libraries just based on documentation was challenging, however with trial and error it was possible; it certainly made me be more resourceful
2. Balancing MaterialUI props with just regular CSS (sometimes one overrode each other)
3. Knowing which components MaterialUI are effective where
4. Knowing when to encapsulate components, and how to avoid oversharing (adding uneccesary props)
5. Solving problems in the most efficent way possible instead of just using a work-around

### Future Additions:
In the future, when I have aquired more experience and have more time, I hope to integrate many more things. Some examples are:
1. Login/User Support
2. Multiple User Support & friend list
3. More menu customization (names, deletion, sharing)
4. Ingredient List Support
5. Updating currently existing items
6. Adding all subdining halls and other cafes
7. Other MongoDB features (filtering)
8. Advanced MaterialUI styling
9. Cleaner navigation and Better formating on smaller screens

### Skills Aquired / Things Learned
1. MaterialUI and CSS styling in general
2. How to better make use of lists to save time
3. How to take advantage of the mapping methods of lists
4. How to encapsulate components effectively to avoid clutter
5. How to use library documentation to your advantage
6. How to construct a ReadMe
7. How to Reuse components in many places effectively
8. How to work around Async updates using useEffect()
9. How Javascript in general tends to read values (having to specifically do parseInt for a number to be treated as an Int)
10. How to More effectively use props in components

## How to Use the Project:

### Front End:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Dependencies:
1. @date-io/dayjs: ^2.17.0
2. @mui/icons-material: ^5.15.2
3. @mui/material": ^5.15.2
4. axios: ^1.6.5
5. dayjs: ^1.11.10
6. react: ^18.2.0
7. react-dom: ^18.2.0
8. react-router-dom: ^6.21.1
9. react-scripts: 5.0.1

### Backend: (nutrition folder)

Install any Java supported editor, (I used IntelliJ community edition) and run "Nutrition Application"
The database can be accessed from any IP, so it should still run
NOTE: CORs Config is necessary for backend access

#### Dependencies: pom.xml
1. SpringBoot: v17
2. spring-dotenv: 4.0.0
3. spring-boot-starter-data-mongodb: 3.1.5
4. spring-boot-starter-web
5. spring-boot-devtools
6. lombok
7. spring-webmvc : 6.0.13

### Demo Video:
You can find the demo video of this website in this project at Utrition/public/Demo Video.mp4

### License:
GNU GPLv3