import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" className="text-white"><FaFacebook /></a>
          <a href="https://twitter.com" className="text-white"><FaTwitter /></a>
          <a href="https://instagram.com" className="text-white"><FaInstagram /></a>
        </div>
        <p className="text-white">© 2024 bapol.org & NVaTech Consulting LLC</p>
      </div>
    </footer>
  );
}
