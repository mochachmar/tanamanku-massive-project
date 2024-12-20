export default function FooterAdmin() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: '#F5F5F5' }} className="text-center py-4 text-gray-500 text-sm">
      © {currentYear} TanamanKu
    </footer>
  );
}
