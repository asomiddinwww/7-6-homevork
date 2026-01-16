import React, { useState } from 'react';

const CATEGORIES = [
  { id: 1, name: 'Beton va qorishmalar', icon: 'https://cdn-icons-png.flaticon.com/512/4231/4231005.png' },
  { id: 2, name: 'Kabel mahsulotlari', icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067451.png' },
  { id: 3, name: 'To\'ldiruvchilar', icon: 'https://cdn-icons-png.flaticon.com/512/2038/2038133.png' },
  { id: 4, name: 'Metall prokat buyumlar', icon: 'https://cdn-icons-png.flaticon.com/512/2830/2830022.png' },
  { id: 5, name: 'Yog\'och material va buyumlar', icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933907.png' },
  { id: 6, name: 'Plastmassalar', icon: 'https://cdn-icons-png.flaticon.com/512/1004/1004664.png' },
  { id: 7, name: 'Keramika materiallari va buyumlar', icon: 'https://cdn-icons-png.flaticon.com/512/3233/3233481.png' },
  { id: 8, name: 'Issiqlik izolyatsiyasi va akustik materiallar', icon: 'https://cdn-icons-png.flaticon.com/512/2275/2275932.png' },
  { id: 9, name: 'Tom yopish va gidroizolyatsiya materiallari', icon: 'https://cdn-icons-png.flaticon.com/512/619/619032.png' },
  { id: 10, name: 'Qoplamali va yopishtiruvchi materiallar', icon: 'https://cdn-icons-png.flaticon.com/512/4814/4814271.png' },
];

const PRODUCTS = [
  { id: 1, code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля', img: 'https://3m.scene7.com/is/image/3M/7000006155_R1?wid=400&hei=400&fmt=png-alpha' },
  { id: 2, code: '#02.02.02.01-1000', title: 'Глина бентонитовая', img: 'https://5.imimg.com/data5/SELLER/Default/2021/3/ZW/UI/ZK/10255404/bentonite-clay-500x500.jpg' },
  { id: 3, code: '#02.02.02.01-1000', title: 'Удаляемый герметизирующий компаунд для повторного сращивания кабеля', img: 'https://3m.scene7.com/is/image/3M/7000006155_R1?wid=400&hei=400&fmt=png-alpha' },
  { id: 4, code: '#01.01.01.01-0002', title: 'Изделия с армирующими материалами на основе стеклоткани', img: 'https://sc04.alicdn.com/kf/H5d8d01b6b5d045c7b3b9b4d4d4d4d4d4X.jpg' },
  { id: 5, code: '#01.01.01.01-0002', title: 'Изделия с армирующими материалами на основе стеклоткани', img: 'https://sc04.alicdn.com/kf/H5d8d01b6b5d045c7b3b9b4d4d4d4d4d4X.jpg' },
  { id: 6, code: '#01.01.01.01-0002', title: 'Изделия с армирующими материалами на основе стеклоткани', img: 'https://sc04.alicdn.com/kf/H5d8d01b6b5d045c7b3b9b4d4d4d4d4d4X.jpg' },
  { id: 7, code: '#01.01.01.01-0002', title: 'Изделия с армирующими материалами на основе стеклоткани', img: 'https://sc04.alicdn.com/kf/H5d8d01b6b5d045c7b3b9b4d4d4d4d4d4X.jpg' },
  { id: 8, code: '#01.01.01.01-0002', title: 'Изделия с армирующими материалами на основе стеклоткани', img: 'https://sc04.alicdn.com/kf/H5d8d01b6b5d045c7b3b9b4d4d4d4d4d4X.jpg' },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('grid');

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-sans pb-20">
      {/* 1. Yuqori Dropdown qismi (O'ng burchak) */}
      <div className="max-w-[1440px] mx-auto px-10 py-4 flex justify-end relative">
        <div className="bg-white shadow-lg border border-blue-50 rounded-md py-2 w-48 text-sm z-50">
          <div className="px-4 py-2 text-[#00a3ff] cursor-pointer hover:bg-blue-50">Yangiliklar</div>
          <div className="px-4 py-2 text-[#002d72] cursor-pointer hover:bg-blue-50">Aloqa</div>
          <div className="px-4 py-2 text-[#002d72] cursor-pointer hover:bg-blue-50">Biz haqimizda</div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10">
        
        {/* 2. Kategoriyalar Setkasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition cursor-pointer min-h-[80px]">
              <div className="w-12 h-12 flex-shrink-0 opacity-70">
                <img src={cat.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <span className="text-[13px] font-medium text-slate-600 leading-snug">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* 3. Sarlavha va ko'rinishni boshqarish */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#002d72] mb-6 tracking-tight">KO'P KO'RILGANLAR</h2>
          <div className="flex gap-2">
            <button onClick={() => setActiveTab('list')} className={`p-2 rounded border ${activeTab === 'list' ? 'bg-white shadow-sm' : ''}`}>
              <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z"/></svg>
            </button>
            <button onClick={() => setActiveTab('grid')} className={`p-2 rounded border ${activeTab === 'grid' ? 'bg-[#00a3ff] text-white shadow-sm border-[#00a3ff]' : ''}`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z"/></svg>
            </button>
            <button className="p-2 rounded border">
              <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3h10v2H5V3zm0 5h10v2H5V8zm0 5h10v2H5v-2z"/></svg>
            </button>
          </div>
        </div>

        {/* 4. Mahsulotlar Kartochkalari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
              {/* Mahsulot rasmi */}
              <div className="relative p-6 aspect-square flex items-center justify-center bg-[#fcfcfc]">
                <img src={product.img} alt={product.title} className="max-h-full object-contain" />
                <button className="absolute top-4 right-4 text-slate-300 hover:text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                </button>
              </div>

              {/* Mahsulot Ma'lumoti */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="bg-[#eef7ff] text-[#00a3ff] text-[11px] font-bold px-2 py-1 rounded w-fit mb-3">
                  {product.code}
                </span>
                <h3 className="text-[13px] font-bold text-slate-800 leading-[1.4] mb-8 min-h-[40px] line-clamp-3">
                  {product.title}
                </h3>

                {/* Tugmalar */}
                <div className="mt-auto flex gap-2">
                  <button className="flex-grow py-2.5 px-4 rounded-lg border border-[#00a3ff] text-[#00a3ff] text-sm font-bold hover:bg-[#00a3ff] hover:text-white transition-colors">
                    Ko'rish
                  </button>
                  <button className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;