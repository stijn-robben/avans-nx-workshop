import { IEnvironment } from "./environment.interface";


export  const environment : IEnvironment = {
   production: true,
   
   apiUrl: "https://cwfr-stijn-robben.azurewebsites.net/api",

   MONGO_DB_CONNECTION_STRING: 'mongodb+srv://stijnrobben:Gf0m04CkhWvpuswJ@stijns-burgers.qxgfnqv.mongodb.net/?retryWrites=true&w=majority&appName=stijns-burgers'
}