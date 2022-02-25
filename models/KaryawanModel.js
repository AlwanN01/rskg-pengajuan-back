import { Sequelize } from "sequelize"
import db from "../config/database.js"

const Karyawan = db.define(
  "pegawai",
  {
    pegawai_id: Sequelize.INTEGER,
    nik: Sequelize.STRING,
    nip: Sequelize.STRING,
    nama_lengkap: Sequelize.STRING,
    tempat_lahir: Sequelize.STRING,
    tgl_lahir: Sequelize.STRING,
    jenis_kelamin: Sequelize.STRING,
    gol_darah: Sequelize.STRING,
    alamat: Sequelize.STRING,
    provinsi: Sequelize.STRING,
    kab_kota: Sequelize.STRING,
    kecamatan: Sequelize.STRING,
    kel_desa: Sequelize.STRING,
    rw: Sequelize.STRING,
    rt: Sequelize.STRING,
    agama: Sequelize.STRING,
    status_perkawinan: Sequelize.STRING,
    kewarganegaraan: Sequelize.STRING,
    divisi: Sequelize.STRING,
    ruangan: Sequelize.STRING,
    gelar_depan: Sequelize.STRING,
    gelar_belakang: Sequelize.STRING,
    no_bpjstku: Sequelize.STRING,
    no_bpjskes: Sequelize.STRING,
    kategori_kepegawaian: Sequelize.STRING,
    kelompok_kepegawaian: Sequelize.STRING,
    kelompok_jabatan: Sequelize.STRING,
    jabatan: Sequelize.STRING,
    shift_kerja: Sequelize.STRING,
    durasi_kerja: Sequelize.STRING,
    pendidikan: Sequelize.STRING,
    kualifikasi_pendidikan: Sequelize.STRING,
    lampiran_ijazah: Sequelize.STRING,
    no_telepon: Sequelize.STRING,
    no_hp: Sequelize.STRING,
    email: Sequelize.STRING,
    foto_pegawai: Sequelize.STRING,
    foto_ktp: Sequelize.STRING,
    status_kepegawaian: Sequelize.STRING
  },
  {
    freezeTableName: true
  }
)
export default Karyawan
