import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavAdmin";
import FooterAdmin from "../components/FooterAdmin";
import Breadcrumbs from "../components/Breadcrumbs";

function EditIsiPanduan() {
  const navigate = useNavigate();

  // State untuk menyimpan data form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  // Fungsi untuk menangani perubahan input gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Membuat URL untuk pratinjau gambar
      setImageName(file.name); // Menyimpan nama file untuk ditampilkan
    }
  };

  // Fungsi untuk menghapus gambar yang telah diunggah
  const handleRemoveImage = () => {
    setImage(null);
    setImageName("");
  };

  // Fungsi untuk mengirim panduan sebagai draft atau kirim (publish)
  const handleSubmit = (status) => {
    const newGuide = {
      title,
      description,
      tips,
      image,
      status, // status: 'Draft' atau 'Publik' sesuai tombol yang diklik
    };

    console.log("Panduan baru yang dikirim:", newGuide);

    // Navigasi kembali ke halaman daftar panduan setelah submit
    navigate("/admin/card-panduan");
  };

  return (
    <div className="full-width bg-gray-100 min-h-screen">
      <NavbarAdmin>
        <Breadcrumbs />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Edit Isi Panduan
            </h2>

            {/* Input Judul Panduan */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block font-semibold mb-2 text-gray-700"
              >
                Judul Panduan
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-2 border border-green-500 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul Panduan"
              />
            </div>

            {/* Konten Panduan */}
            <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
              Konten Panduan
            </h3>

            {/* Input Deskripsi Panduan */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block font-semibold mb-2 text-gray-700"
              >
                Deskripsi Panduan
              </label>
              <textarea
                id="description"
                className="w-full p-2 border border-green-500 rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Deskripsi Panduan"
              />
            </div>

            {/* Input Tips & Trick */}
            <div className="mb-4">
              <label
                htmlFor="tips"
                className="block font-semibold mb-2 text-gray-700"
              >
                Tips & Trick
              </label>
              <textarea
                id="tips"
                className="w-full p-2 border border-green-500 rounded-md"
                value={tips}
                onChange={(e) => setTips(e.target.value)}
                placeholder="Tips & Trick"
              />
            </div>

            {/* Unduh PDF */}
            <div className="mb-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Unduh PDF
              </button>
            </div>

            {/* Input Gambar */}
            <div className="mb-4">
              <label className="block font-semibold mb-2 text-gray-700">
                Gambar
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="flex items-center border border-green-500 text-green-500 px-4 py-2 rounded-md cursor-pointer"
                >
                  {imageName || "Choose File"}
                </label>
              </div>
              {image && (
                <div className="mt-4">
                  <p className="text-gray-700 mb-2">Your Image</p>
                  <div className="relative">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={handleRemoveImage}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Hapus Gambar
                      </button>
                      <label
                        htmlFor="imageUpload"
                        className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                      >
                        Ganti Gambar
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => handleSubmit("Draft")}
                className="px-6 py-2 bg-blue-200 text-blue-700 rounded-md hover:bg-blue-300"
              >
                Draft
              </button>
              <button
                onClick={() => handleSubmit("Publik")}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </NavbarAdmin>
      <FooterAdmin />
    </div>
  );
}

export default EditIsiPanduan;
