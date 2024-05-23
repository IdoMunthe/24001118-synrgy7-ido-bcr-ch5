## API Endpoint
### API `GET`
- Get All Data
  - Request : `GET /cars`
  - CURL
    - Request
      
      ```bash
      curl --location 'localhost:4000/cars'
      ```
- Get Data by ID
  - Request : `GET /cars/:id`
  - CURL
    - Request
   
      ```bash
      curl --location 'localhost:4000/cars/1'
      ```

### API `POST`
- Create Data
  - Request : `/create`
  - CURL
    - Request\
      
      ```bash
      curl --location 'localhost:4000/cars/create' \
      --form 'name="Angkot Malang"' \
      --form 'price="350000000"' \
      --form 'category="medium"' \
      --form 'image=@"/path/to/your/own/file"' \
      --form 'start_date="2024/05/06"' \
      --form 'end_date="2024/08/28"' \
      --form 'availability="true"'
      ```

### API `PUT`
- Update Data
  - Request : `PUT /cars/:id`
  - CURL
    - Request\

      ```bash
      curl --location --request PUT 'localhost:4000/cars/2' \
      --form 'name="L 300 2019"' \
      --form 'price="250000000"' \
      --form 'category="small"' \
      --form 'image=@"/path/to/your/own/file"' \
      --form 'start_date="2024/06/23"' \
      --form 'end_date="2024/06/23"' \
      --form 'availability="false"'
      ```

### API `DELETE`
- Delete Data
  - Request : `DELETE /cars/:id`
  - CURL
    - Request

      ```bash
      curl --location --request DELETE 'localhost:4000/cars/1'
      ```
      
## ERD (Entity Relationship Diagram)

![Image](https://res.cloudinary.com/dkvhcraan/image/upload/v1716441837/Screenshot_2024-05-23_122056_fcpgvh.png)
