// import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
// import ft1 from "../assets/image/ft1.png";
// import ft2 from "../assets/image/ft2.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#fbefdf] text-gray-800 relative">
      {/* <img src={ft1} className="absolute bottom-0 left-0 w-3xs z-[1]" alt="" />
      <img src={ft2} className="absolute top-0 right-0 w-3xs  z-[1]" alt="" /> */}

      <div className="max-w-7xl mx-auto px-4 py-12 z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kompaniya haqida */}
          <div className="space-y-4">
            <h3 className="text-[#000] text-lg font-bold mb-4">Kompaniya</h3>
            <div className="space-y-2">
              <p className="text-sm">
                Bizning kompaniyamiz mijozlarga yuqori sifatli xizmatlarni
                taqdim etishga ixtisoslashgan
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <span>info@kompaniya.uz</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} />
                <span>Toshkent sh., Mirobod tumani</span>
              </div>
            </div>
          </div>

          {/* Tezkor havolalar */}
          <div className="rounded-lg">
            <h3 className="text-[#000] text-lg font-bold mb-4">
              Tezkor Havolalar
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Asosiy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Xizmatlar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Bog`lanish
                </a>
              </li>
            </ul>
          </div>

          {/* Xizmatlar */}
          <div className="rounded-lg">
            <h3 className="text-[#000] text-lg font-bold mb-4">Xizmatlar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Web Dizayn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors"
                >
                  Konsalting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#4A2B82] transition-colors  z-[1]"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="rounded-lg">
            <h3 className="text-[#000] text-lg font-bold mb-4">
              Bizni kuzating
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#4A2B82] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#4A2B82] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#4A2B82] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Mualliflik huquqi */}
        <div className="border-t border-[#000] mt-12 pt-8">
          <p className="text-sm text-center text-gray-800">
            © {new Date().getFullYear()} Kompaniya nomi. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
