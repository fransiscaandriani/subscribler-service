# Subscribler Local Machine Set Up
There are 3 parts of our subscribler project:
- Frontend (Angular project)
- Backend (Spring project)
- Database Seeder (simple Node.js project)

# Prerequisites
- Java
- Maven
- MongoDB
- Node.js

# Steps to start
1. Make sure you have mongoDB ready. Go to any terminal and run `mongo`. If you get into the console, you're set.
   
2. Go to backend project root
   ```
   mvn install
   mvn spring-boot:run
   ```

3. Seed the database now  
   We will go to the seeder project directory and run these two commands:
   ```javascript
   yarn install 
   yarn seed
   ```
4. Navigate to front end project
   ```
   npm install
   npm run start
   ```
5. Go to your browser at https://localhost:4200 and you should see the subscribler project there!


# Troubleshooting
## Common problems
  1. Front end shows error message -- possibly data problem. Wipe off subscribler db in mongo console.
  Go to console
  ```
  mongo
  ```
  and run the following commands:
  ```mongodb
  use subscribler
  db.dropDatabase()
  ```
  the query should return an OK message.  
  
  2. UI not showing data. Probably because of wrong port. Subscribler service by default uses port 8082 in the localhost.   
   The base service url can be changed in subscribler-ui project in the file `src/environment/environment.ts`
   
  3. If subscribler service does not run with maven command in the terminal, you can use Intellij IDEA to run the project.  
  Just import and create project from existing sources. Then right click on `Application.java` and choose run.
  
  4. If there are problems setting up, feel free to contact us:  
    Clarence: hello@clarencecastillo.me  
    Eko: ekoeditaa@gmail.com  
    Sisca: sisca0501@gmail.com  
    Anqi: anqitu@outlook.com