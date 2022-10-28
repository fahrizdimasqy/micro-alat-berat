## Micro alat berat
### Stack Tech
![Alur aplikasi](stack_tech.png)
### User Service
### Flow Authentication
![Alur aplikasi](flow_auth.png)
## Hubungan dengan service lain
![Alur aplikasi](komunikasi_api_user.png)
### Route and Method
<<<<<<< HEAD
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
3. create refresh_tokens/  POST
```json
{
    "refresh_token":"value",
    "user_id":"value@gmail.com",
}
```
```
endpoint localhost:3000/refresh-tokens
```
4. get_token get
```
localhost:5000/refresh_tokens?refresh_token=wqerqwrqwrtqwr12
```
5. users/logout POST
```json
{
     "token":"value",
    "user_id":"value"
}
```
6. update user PUT
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

7. /getProfile GET
```endpoint
localhost:3000/users
```
```
Header : Authorization = value(token) eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo2LCJuYW1lIjoiUGFzeWhhIiwiZ2VuZGVyIjoiR2F5Iiwibm9fdGxwIjoiMDh4eHgiLCJlbWFpbCI6InBhc3loYWNvYnVsQGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjY2MzIwNTEsImV4cCI6MTY2NjYzMjM1MX0.fE0_n5nvu_Tp38PZysSo7pp_VVpUtOmmoNBkeIfDWPg
```
8. /users/logout POST
```
endpoint
localhost:3000/users/logout
```
```
Headers Authorization = token
```
=======
USER SERVICE
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

3. create refresh_tokens/  POST
    ```json
    {
        "refresh_token":"value",
        "user_id":"value@gmail.com",
    }
    ```
    ```
    endpoint localhost:3000/refresh-tokens
    ```

4. get_token get
    ```
    localhost:5000/refresh_tokens?refresh_token=wqerqwrqwrtqwr12
    ```

5. users/logout POST
    ```json
    {
         "token":"value",
        "user_id":"value"
    }
    ```

6. update user PUT
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

7. /getProfile GET
    ```endpoint
    localhost:3000/users
    ```
    ```
    Header : Authorization = value(token) eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo2LCJuYW1lIjoiUGFzeWhhIiwiZ2VuZGVyIjoiR2F5Iiwibm9fdGxwIjoiMDh4eHgiLCJlbWFpbCI6InBhc3loYWNvYnVsQGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjY2MzIwNTEsImV4cCI6MTY2NjYzMjM1MX0.fE0_n5nvu_Tp38PZysSo7pp_VVpUtOmmoNBkeIfDWPg
    ```

8. /users/logout POST
    ```
    endpoint
    ```json
    localhost:3000/users/logout
    ```
    ```
    Headers Authorization = token
    ```


TRANSAKSI SERVICE
1. Read database sewa
    - Method
        GET
    - Response
    ```json
    [
        {
            "id_sewa": 1,
            "id_customer": 2,
            "tanggal_sewa": "2022-10-29T17:00:00.000Z",
            "tanggal_pengembalian": "2022-11-10T17:00:00.000Z",
            "tanggal_pengajuan": "2022-10-27T17:00:00.000Z",
            "status_peminjaman": "Disetujui",
            "bukti_pembayaran": "http://localhost:1000/Pembayaran%20Berhasil",
            "status_pembayaran": "1666963463298--rawis2.png",
            "sub_total": 18400000
        }
    ]

    ```
    - Endpoint
    ```endpoint

    localhost:3000/api/readData
    ```

2. Upload detail sewa
    - Method
        POST
    - Request Body
        - id_alat_berat
        - id_sewa
        - jumlah_barang
    - Response
    ```json
        {
            "message": "berhasil",
            "merk": "Excavator Komatsu PC200-7 ",
            "jumlah": "3",
            "harga": 3800000,
            "total": 11400000
        }
    ```
    - Endpoint
    ```endpoint

    localhost:3000/detailsewa
    ```

3. Membuat Pengajuan
    - Method
        POST
    - Request Body
        - id_customer
        - tanggal_sewa
        - tanggal_pengembalian
        - tanggal_pengajuan
        - status_peminjaman
    - Response
    ```json
    {
        "tanggal_pengajuan": "2022-10-28",
        "tanggal_sewa": "2022-10-30",
        "tanggal_pengembalian": "2022-11-11",
        "status_peminjaman": "Disetujui"
    }

    ```
    - Endpoint
    ```endpoint
    localhost:3000/api/createPengajuan
    ```

4. Mengupdate Bukti Pembayaran
    - Method
        PUT
    - Request Body
        - pembayaran
        - id_sewa
    - Response
    ```json
    {
        "status": "sukses",
        "id": "1",
        "bayar": "1666963104709--rawis2.png",
        "buktipembayaran": "http://localhost:1000/1666963104709--rawis2.png",
        "statuspembayaran": "Pembayaran Berhasil"
    }

    ```
    - Endpoint
    ```endpoint
    localhost:3000/buktipembayaran
    ```

5. Read Data by id
    - Method
        GET
    - Response
    ```json
    {
        "data_transaksi": [
            {
                "id_sewa": 1,
                "id_customer": {
                    "id": 2,
                    "name": "Dimas",
                    "email": "dimas@gmail.com",
                    "gender": "Laki-laki",
                    "role": "customer",
                    "no_tlp": "08xxx"
                },
                "tanggal_sewa": "2022-10-29T17:00:00.000Z",
                "tanggal_pengembalian": "2022-11-10T17:00:00.000Z",
                "tanggal_pengajuan": "2022-10-27T17:00:00.000Z",
                "status_peminjaman": "Disetujui",
                "bukti_pembayaran": "Pembayaran Berhasil",
                "status_pembayaran": "1666963463298--rawis2.png",
                "sub_total": 18400000
            }
        ],
        "data_alat_disewa": [
            {
                "id_detaill_sewa": 12,
                "id_sewa": 1,
                "id_alat_berat": 3,
                "merk_barang": "Komatsu S6D125E-2",
                "harga_barang": "3500000",
                "jumlah_barang": "2",
                "total_harga": 7000000
            },
            {
                "id_detaill_sewa": 16,
                "id_sewa": 1,
                "id_alat_berat": 5,
                "merk_barang": "Excavator Komatsu PC200-7 ",
                "harga_barang": "3800000",
                "jumlah_barang": "3",
                "total_harga": 11400000
            }
        ]
    }

    ```
    - Endpoint
    ```endpoint
    localhost:3000/readDataUser/id
    ```
>>>>>>> 79f4351b8f3a735e069d0a080ac4520723ffa3f7
