## Micro alat berat
### Stack Tech
![Alur aplikasi](stack_tech.png)
### User Service
### Flow Authentication
![Alur aplikasi](flow_auth.png)
### Route and Method
1. users/register POST
```json
{
    "name":"Nurul",
    "email":"nurul@gmail.com",
    "password":"rahasiaku123",
    "no_tlp":"08xxx",
    "gender": "Perempuan"
}
```
```
endpoint: localhost:3000/users/register
```
2. users/login POTST
```json
{
    
    "email":"nurul@gmail.com",
    "password":"rahasiaku123",
}
```
```
endpoint: localhost:3000/users/login
```
3. users/ GET
```
endpoint: localhost:3000/users
```
5. users/5 GET
```
endpoint: localhost:3000/users/5
```
7. create refresh_tokens/  POST
```json
{
    "refresh_token":"value",
    "user_id":"value@gmail.com",
}
```
6. get_token get
```
localhost:5000/refresh_tokens?refresh_token=wqerqwrqwrtqwr12
```
8. users/logout POST
```json
{
     "token":"value",
    "user_id":"value"
}
```
