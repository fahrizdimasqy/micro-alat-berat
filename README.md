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

    localhost:1000/api/readData
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

    localhost:1000/detailsewa
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
    localhost:1000/api/createPengajuan
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
    localhost:1000/buktipembayaran
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
    localhost:1000/readDataUser/id
    ```
