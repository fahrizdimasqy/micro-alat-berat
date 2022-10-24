## Micro alat berat
### Stack Tech
![Alur aplikasi](stack_tech.png)
### User Service
### Flow Authentication
![Alur aplikasi](flow_auth.png)
## Hubungan dengan service lain
![Alur aplikasi](komunikasi_api_user.png)
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
4. users/5 GET
```
endpoint: localhost:3000/users/5
```
5. create refresh_tokens/  POST
```json
{
    "refresh_token":"value",
    "user_id":"value@gmail.com",
}
```
```
endpoint localhost:3000/refresh-tokens
```
7. get_token get
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
9. update user PUT
```endpoint
localhost:3000/users
```
```json
{
     "name":"Pasyha",
    "email":"pasyhacobul@gmail.com",
    "password":"test12345",
    "no_tlp":"08xxx",
    "gender": "Laki-laki"
}
```
```
tambahkan pada headers authorization dan isikan token
contoh Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo2LCJuYW1lIjoiUGFzeWhhIiwiZ2VuZGVyIjoiR2F5Iiwibm9fdGxwIjoiMDh4eHgiLCJlbWFpbCI6InBhc3loYWNvYnVsQGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjY2MjYxMDEsImV4cCI6MTY2NjYyNjQwMX0.DSyFY6_NbAfkgTbXwJYCGZla525ayC16kHgvZoJ4vBk
```

10. /getProfile GET
```endpoint
localhost:3000/users
```
```
Header : Authorization = value(token) eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo2LCJuYW1lIjoiUGFzeWhhIiwiZ2VuZGVyIjoiR2F5Iiwibm9fdGxwIjoiMDh4eHgiLCJlbWFpbCI6InBhc3loYWNvYnVsQGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjY2MzIwNTEsImV4cCI6MTY2NjYzMjM1MX0.fE0_n5nvu_Tp38PZysSo7pp_VVpUtOmmoNBkeIfDWPg
```
11. /users/logout POST
```
endpoint
localhost:3000/users/logout
```
```
Headers Authorization = token
```
