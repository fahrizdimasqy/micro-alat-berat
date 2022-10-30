## Micro alat berat
### Stack Tech
![Alur aplikasi](stack_tech.png)
### User Service
### Flow Authentication
![Alur aplikasi](flow_auth.png)
## Hubungan dengan service lain
![Alur aplikasi](komunikasi_api_user.png)
### Route and Method
SERVIS USER
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


SERVIS TRANSAKSI
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

    localhost:3000/transaksi/api/readData
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

    localhost:3000/transaksi/detailsewa
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
    localhost:3000/transaksi/api/createPengajuan
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
    localhost:3000/transaksi/buktipembayaran
    ```

5. Read Data by id
    - Method
        GET
    - Request Params
        - id_sewa
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
    localhost:3000/transaksi/readDataUser/:id_sewa
    ```

SERVIS ALAT BERAT
1. Get Alat Berat
    - Method
        GET
    - Response
    ```json
    {
        "status": "OK",
        "messages": "Get Data Success",
        "data": [
            {
                "id": 1,
                "kode_type": {
                    "id": 1,
                    "kode_type": "T01",
                    "nama": "Traktor",
                    "ket": "Alat berat traktor umumnya ditemui di industri pertanian yang berguna untuk membajak atau menggemburkan tanah. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Massey Ferguson MF 5355",
                "status": "ready",
                "harga": 2000000,
                "denda": 250000,
                "operator": "Syamsudin",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/Traktor_Massey_Fergosen_MF_5355.jpg",
                "ket": "Fuel Capacity 33 gal 125 L",
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 2,
                "kode_type": {
                    "id": 1,
                    "kode_type": "T01",
                    "nama": "Traktor",
                    "ket": "Alat berat traktor umumnya ditemui di industri pertanian yang berguna untuk membajak atau menggemburkan tanah. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Massey Ferguson MF 5355",
                "status": "ready",
                "harga": 2200000,
                "denda": 220000,
                "operator": "Syamsul",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/new-holland-ts6020.jpg",
                "ket": null,
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 3,
                "kode_type": {
                    "id": 3,
                    "kode_type": "T03",
                    "nama": "Bulldozer",
                    "ket": "Bulldozer adalah alat berat beroda rantai yang memiliki fungsi mengolah lahan seperti meratakan tanah, mendorong tanah ke berbagai arah. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Komatsu S6D125E-2",
                "status": "ready",
                "harga": 3500000,
                "denda": 400000,
                "operator": "Joko",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/S6D125E-2.jpg",
                "ket": null,
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 4,
                "kode_type": {
                    "id": 3,
                    "kode_type": "T03",
                    "nama": "Bulldozer",
                    "ket": "Bulldozer adalah alat berat beroda rantai yang memiliki fungsi mengolah lahan seperti meratakan tanah, mendorong tanah ke berbagai arah. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "CAT D3K LGP",
                "status": "ready",
                "harga": 3600000,
                "denda": 400000,
                "operator": "Bagus Udin",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/CAT%20D3K%20LGP.jpg",
                "ket": null,
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 5,
                "kode_type": {
                    "id": 2,
                    "kode_type": "T02",
                    "nama": "Excavator",
                    "ket": "Excavator disebut juga dengan nama bego atau beko. Excavator banyak digunakan dalam beragam industri karena fungsinya yang beragam. Alat berat yang satu ini digunakan untuk menggali tanah, meratakan tanah atau jalan, dan memindahkan material. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Excavator Komatsu PC200-7 ",
                "status": "ready",
                "harga": 3800000,
                "denda": 410000,
                "operator": "Asep",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/Excavator%20Komatsu%20PC200-7%20.jpg",
                "ket": null,
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 6,
                "kode_type": {
                    "id": 2,
                    "kode_type": "T02",
                    "nama": "Excavator",
                    "ket": "Excavator disebut juga dengan nama bego atau beko. Excavator banyak digunakan dalam beragam industri karena fungsinya yang beragam. Alat berat yang satu ini digunakan untuk menggali tanah, meratakan tanah atau jalan, dan memindahkan material. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Hitachi ZX210F-5G",
                "status": "ready",
                "harga": 3900000,
                "denda": 410000,
                "operator": "soleh",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/ZX210F-5G.jpg",
                "ket": null,
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 7,
                "kode_type": {
                    "id": 4,
                    "kode_type": "T04",
                    "nama": "Crane",
                    "ket": "Crane adalah alat berat yang mencolok dan sering ditemui pada pembangunan suatu gedung. Fungsinya untuk memindahkan material dari bawah ke atas dan dari atas ke bawah.    ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Crawler Crane CKL1000i",
                "status": "ready",
                "harga": 4400000,
                "denda": 450000,
                "operator": "Abdul",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/ZX210F-5G.jpg",
                "ket": null,
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 8,
                "kode_type": {
                    "id": 3,
                    "kode_type": "T03",
                    "nama": "Bulldozer",
                    "ket": "Bulldozer adalah alat berat beroda rantai yang memiliki fungsi mengolah lahan seperti meratakan tanah, mendorong tanah ke berbagai arah. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "honda",
                "status": "ready",
                "harga": 1000,
                "denda": 1000,
                "operator": "aliman",
                "bbm": "solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/1666177378562-CKL1000i.jpg",
                "ket": null,
                "createdAt": "2022-10-19T11:02:58.000Z",
                "updatedAt": "2022-10-19T11:02:58.000Z"
            },
            {
                "id": 34,
                "kode_type": {
                    "id": 2,
                    "kode_type": "T02",
                    "nama": "Excavator",
                    "ket": "Excavator disebut juga dengan nama bego atau beko. Excavator banyak digunakan dalam beragam industri karena fungsinya yang beragam. Alat berat yang satu ini digunakan untuk menggali tanah, meratakan tanah atau jalan, dan memindahkan material. ",
                    "createdAt": null,
                    "updatedAt": null
                },
                "merk": "Dummy Merk",
                "status": "Ready",
                "harga": 1000,
                "denda": 1000,
                "operator": "Udin aja",
                "bbm": "Solar",
                "gambar": "http://alat-berat-service.herokuapp.com/images/1666321581621-image:1000002667.jpg",
                "ket": null,
                "createdAt": "2022-10-21T03:06:21.000Z",
                "updatedAt": "2022-10-21T03:06:21.000Z"
            }
        ]
    } 
    ```
    - Endpoint
    ```endpoint
    localhost:3000/alatberat
    ```
2. Get Alat Berat by id
    - Method
        GET
    - Request Params
        - id
    - Response
     ```json
     {
        "status": "OK",
        "messages": "Alat Berat ditemukan",
        "data": {
            "id": 1,
            "kode_type": {
                "kode_type": "T01",
                "nama_type": "Traktor",
                "ket_type": "Alat berat traktor umumnya ditemui di industri pertanian yang berguna untuk membajak atau menggemburkan tanah. "
            },
            "merk": "Massey Ferguson MF 5355",
            "status": "ready",
            "harga": 2000000,
            "denda": 250000,
            "operator": "Syamsudin",
            "bbm": "Solar",
            "gambar": "http://alat-berat-service.herokuapp.com/images/Traktor_Massey_Fergosen_MF_5355.jpg",
            "ket": "Fuel Capacity 33 gal 125 L",
            "createdAt": null,
            "updatedAt": null
        }
    }
    ```
    - Endpoint
    ```endpoint
    localhost:3000/alatberat/id/:id
    ```
3. Post Alat Berat
    - Method
        POST
    - Request Body
        - kode_type
        - merk
        - status
        - harga
        - denda
        - operator
        - bbm
        - foto_alat
    - Response (masi error)
     ```json

    ```
    - Endpoint
    ```endpoint
    localhost:3000/alatberat
    ```
4. Put Alat Berat 
    - Method
    - Request Params
        - id
    - Request Body
        - kode_type
        - merk
        - status
        - harga
        - denda
        - operator
        - bbm
        - foto_alat
    - Response (masi error)
     ```json

    ```
    - Endpoint
    ```endpoint
    localhost:3000/alatberat/id/:id
    ```
5. Delete Alat Berat
    - Method
        - DELETE
    - Request Params
        - id
    - Response
     ```json
     {
        "status": "OK",
        "messages": "Alat Berat Behasil di hapus",
        "data": {
            "id": 34,
            "kode_type": {
                "kode_type": "T02",
                "nama_type": "Excavator",
                "ket_type": "Excavator disebut juga dengan nama bego atau beko. Excavator banyak digunakan dalam beragam industri karena fungsinya yang beragam. Alat berat yang satu ini digunakan untuk menggali tanah, meratakan tanah atau jalan, dan memindahkan material. "
            },
            "merk": "Dummy Merk",
            "status": "Ready",
            "harga": 1000,
            "denda": 1000,
            "operator": "Udin aja",
            "bbm": "Solar",
            "gambar": "1666321581621-image:1000002667.jpg",
            "ket": null,
            "createdAt": "2022-10-21T03:06:21.000Z",
            "updatedAt": "2022-10-21T03:06:21.000Z"
        }
    }
    ```
    - Endpoint
    ```endpoint
    localhost:3000/alatberat/id/:id
    ```

SERVIS TIPE ALAT BERAT
1. Get Type Alat Berat
    - Method
        GET
    - Response
    ```json
    {
        "status": "OK",
        "messages": "",
        "data": [
            {
                "id": 1,
                "kode_type": "T01",
                "nama": "Traktor",
                "ket": "Alat berat traktor umumnya ditemui di industri pertanian yang berguna untuk membajak atau menggemburkan tanah. ",
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 2,
                "kode_type": "T02",
                "nama": "Excavator",
                "ket": "Excavator disebut juga dengan nama bego atau beko. Excavator banyak digunakan dalam beragam industri karena fungsinya yang beragam. Alat berat yang satu ini digunakan untuk menggali tanah, meratakan tanah atau jalan, dan memindahkan material. ",
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 3,
                "kode_type": "T03",
                "nama": "Bulldozer",
                "ket": "Bulldozer adalah alat berat beroda rantai yang memiliki fungsi mengolah lahan seperti meratakan tanah, mendorong tanah ke berbagai arah. ",
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 4,
                "kode_type": "T04",
                "nama": "Crane",
                "ket": "Crane adalah alat berat yang mencolok dan sering ditemui pada pembangunan suatu gedung. Fungsinya untuk memindahkan material dari bawah ke atas dan dari atas ke bawah.    ",
                "createdAt": null,
                "updatedAt": null
            },
            {
                "id": 14,
                "kode_type": "",
                "nama": "",
                "ket": null,
                "createdAt": "2022-10-21T02:01:00.000Z",
                "updatedAt": "2022-10-21T02:01:00.000Z"
            }
        ]
    }
    ```
    - Endpoint
    ```endpoint
    localhost:3000/type
    ```
2. Get Type Alat Berat by id
    - Method
        GET
    - Request Params
        - kode_type
    - Response
     ```json
     {
        "status": "OK",
        "messages": "type Berat ditemukan",
        "data": {
            "id": 1,
            "kode_type": "T01",
            "nama": "Traktor",
            "ket": "Alat berat traktor umumnya ditemui di industri pertanian yang berguna untuk membajak atau menggemburkan tanah. ",
            "createdAt": null,
            "updatedAt": null
        }
    }
    ```
    - Endpoint
    ```endpoint
    localhost:3000/type/id/:kode_type
    ```
3. Post Type Alat Berat
    - Method
        POST
    - Request Body
        - kode_type
        - nama
        - ket
    - Response
     ```json
     {
        "status": "OK",
        "messages": "type Berat berhasil ditambah",
        "data": {
            "id": 44,
            "kode_type": "T08",
            "nama": "Dummy nama",
            "ket": "ini keterangan LOHHHH",
            "updatedAt": "2022-10-29T17:06:57.064Z",
            "createdAt": "2022-10-29T17:06:57.064Z"
        }
    }

    ```
    - Endpoint
    ```endpoint
    localhost:3000/type
    ```
4. Put Type Alat Berat
    - Method
        PUT
    - Request Params
        - kode_type
    - Request Body
        - nama
        - ket
    - Response
     ```json
     {
        "status": "OK",
        "messages": "type Berat Behasil di update",
        "data": [
            1
        ]
    }
    ```
    - Endpoint
    ```endpoint
    localhost:3000/type/id/:kode_type
    ```
5. Delete Type Alat Berat
    - Method
        DELETE
    - Request Params
        - kode_type
    - Response
     ```json
     {
        "status": "OK",
        "messages": "type Berat Behasil di hapus",
        "data": {
            "id": 44,
            "kode_type": "T08",
            "nama": "Dummy nama diubah",
            "ket": "ini keterangan LOHHHH",
            "createdAt": "2022-10-29T17:06:57.000Z",
            "updatedAt": "2022-10-29T17:17:47.000Z"
        }
    }
    ```
    - Endpoint
    ```endpoint
    localhost:3000/type/id/:kode_type
    ```
DETAIL SEWA ALAT BERAT
1. Get Type Alat Berat
    -Type 
        GET
    -Response
    ```{
    "status": "OK",
    "messages": "",
    "data": {
        "detail_sewa": [
            {
                "id_detail_sewa": 1,
                "id_sewa": 1,
                "id_alat_berat": 1,
                "merk_barang": "Massey Ferguson MF 5355",
                "harga_barang": 2000000,
                "denda_barang": 250000,
                "jumlah_barang": "2",
                "total_harga": 4000000,
                "total_denda": 500000,
                "status_sewa": "LUNAS"
            },
            {
                "id_detail_sewa": 2,
                "id_sewa": 2,
                "id_alat_berat": 2,
                "merk_barang": "Dummy Merk Dirubah",
                "harga_barang": 2000,
                "denda_barang": 2000,
                "jumlah_barang": "3",
                "total_harga": 6000,
                "total_denda": 6000,
                "status_sewa": "BELUM"
            },
            {
                "id_detail_sewa": 3,
                "id_sewa": 3,
                "id_alat_berat": 3,
                "merk_barang": "Komatsu S6D125E-2",
                "harga_barang": 3500000,
                "denda_barang": 400000,
                "jumlah_barang": "1",
                "total_harga": 3500000,
                "total_denda": 400000,
                "status_sewa": "LUNAS"
            }
        ]
    }
}``

 - Endpoint
    ```endpoint
    http://localhost:7000/detailsewa/detail
    ```
