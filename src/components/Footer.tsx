import { FaFacebookF, FaTelegramPlane, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2B3467] text-white py-12 px-2 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="flex flex-col space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 border-2 border-white rotate-45 flex items-center justify-center flex-shrink-0">
               <div className="w-6 h-6 border border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
               </div>
            </div>
            <h2 className="text-lg font-bold leading-tight uppercase tracking-tight">
              Qurilishda texnik me'yorlash <br /> 
              va standartlashtirish <br /> 
              ilmiy-tadqiqot instituti
            </h2>
          </div>
          
          <p className="text-sm text-gray-300 max-w-sm">
            Qurilish materiallari, mashina va mexanizmlari, ish turlari elektron portali
          </p>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Bizni ijtimoiy tarmoqlarda kuzating:</h3>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-400 transition-colors"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><FaTelegramPlane size={22} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube size={22} /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><FaInstagram size={22} /></a>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 pt-4">
            All rights reserved © 2022
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold mb-2">Menu</h2>
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-[#4D96FF] font-medium hover:underline">Qurilish materiallari</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Mashina mexanizmlar</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Qurilish ishlari</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Korxonalar</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Klassifikator</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Yangiliklar</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Aloqa</a>
          </nav>
        </div>

        <div className="flex flex-col space-y-4 text-center md:text-right">
          <h2 className="text-xl font-bold">Yangiliklarga obuna bo'ling!</h2>
          <p className="text-sm text-gray-300">Tezkor yangiliklar e-mail orqali</p>
          
          <div className="flex flex-col space-y-3 mt-4 max-w-sm ml-auto mr-auto md:mr-0">
            <input 
              type="email" 
              placeholder="Email kiriting" 
              className="w-full py-3 px-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-[#4D96FF] hover:bg-blue-600 text-white font-bold py-3 rounded-md transition-all active:scale-95 shadow-lg">
              Obuna bo'lish
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;