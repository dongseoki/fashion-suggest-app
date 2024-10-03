import React from "react";

// Don't forget to
// // download the CSS file too OR 
// // remove the following line if you're already using Tailwind 
// FIXME 나중에 쓸모 없어지면 아래 라인 지울것.
// import "../styles/frontend_ai.module.css";


const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[400px] bg-neutral-50 shadow-lg rounded-lg">
    	  {/* Top Bar */}
    	  <div className="flex items-center justify-between px-4 py-2">
    	    <span className="text-sm">10:30</span>
    	    <div className="flex items-center gap-2">
    	      <i className="material-symbols-outlined">wifi</i>
    	      <i className="material-symbols-outlined">signal_cellular_alt</i>
    	      <span className="text-xs">69%</span>
    	      <i className="material-symbols-outlined">battery_full</i>
    	    </div>
    	  </div>
    	
    	  {/* Page Title */}
    	  <div className="px-4">
    	    <h1 className="text-2xl font-title">내 옷장</h1>
    	    <p className="text-sm text-gray-400">Seoul</p>
    	  </div>
    	
    	  {/* Weather & Calendar */}
    	  <div className="flex justify-between items-center px-4 py-2">
    	    <div className="p-2 rounded-lg bg-neutral-100 flex items-center">
    	      <div>
    	        <p className="text-xs">수 9월 18일</p>
    	        <p className="text-lg font-bold">
    	          32 / 25°C <span className="text-pink-400">오늘</span>
    	        </p>
    	        <i className="material-symbols-outlined text-lg">cloud</i>
    	      </div>
    	    </div>
    	    <div className="p-2 bg-white rounded-lg flex justify-center items-center">
    	      <i className="material-symbols-outlined text-lg">calendar_today</i>
    	    </div>
    	    <div className="p-2 rounded-lg bg-neutral-100 flex items-center">
    	      <div>
    	        <p className="text-xs">목 9월 19일</p>
    	        <p className="text-lg font-bold">31 / 25°C</p>
    	      </div>
    	    </div>
    	  </div>
    	
    	  {/* Tabs */}
    	  <div className="flex px-4 py-2 border-b">
    	    <p className="px-2 font-bold border-b-2 border-black">옷장</p>
    	    <p className="px-2 text-gray-400">코디</p>
    	  </div>
    	
    	  {/* Promotion */}
    	  <div className="relative px-4 py-4">
    	    <div className="rounded-lg bg-gradient-to-r from-blue-200 via-pink-100 to-blue-300 p-4 flex gap-2 items-center">
    	      <div className="w-[50px] h-[50px] bg-neutral-100 flex items-center justify-center">
    	        <span className="text-xs font-bold">DEADSTOCK</span>
    	      </div>
    	      <div className="flex-1">
    	        <p className="text-sm font-semibold">데드스탁</p>
    	        <p className="text-xs font-bold text-pink-400">최대 90% 특가 할인</p>
    	      </div>
    	    </div>
    	    <div className="absolute right-2 bottom-2 text-sm bg-neutral-100 p-1 rounded-md">
    	      <span>2 / 2</span>
    	    </div>
    	  </div>
    	
    	  {/* Items */}
    	  <div className="grid grid-cols-2 gap-2 px-4 py-2">
    	    {/* Item 1 */}
    	    <div className="bg-white p-2 rounded-lg border border-gray-200">
    	      <div className="grid grid-cols-2 gap-1">
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/50/60/clothes/1" className="w-[50px] h-[60px] object-cover" alt="Clothing 1" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/50/60/clothes/2" className="w-[50px] h-[60px] object-cover" alt="Clothing 1" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/50/60/clothes/3" className="w-[50px] h-[60px] object-cover" alt="Clothing 3" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/50/60/clothes/4" className="w-[50px] h-[60px] object-cover" alt="Clothing 4" />
    	      </div>
    	      <p className="mt-2 text-sm">모든 옷</p>
    	      <p className="text-xs text-gray-400">6</p>
    	      <i className="material-symbols-outlined text-lg">lock</i>
    	    </div>
    	
    	    {/* Item 2 */}
    	    <div className="bg-white p-2 rounded-lg border border-gray-200">
    	      <div className="flex items-center justify-center py-6">
    	        <i className="material-symbols-outlined">tshirt</i>
    	      </div>
    	      <p className="mt-2 text-sm">에이크로젯에서 구매한 옷</p>
    	      <p className="text-xs text-gray-400">0</p>
    	      <i className="material-symbols-outlined text-lg">lock</i>
    	    </div>
    	
    	    {/* Item 3 */}
    	    <div className="bg-white p-2 rounded-lg border border-gray-200">
    	      <div className="grid grid-cols-2 gap-1">
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/50/60/clothes/5" className="w-[50px] h-[60px] object-cover" alt="Clothing 5" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/50/60/clothes/6" className="w-[50px] h-[60px] object-cover" alt="Clothing 6" />
    	      </div>
    	      <p className="mt-2 text-sm">모든 옷</p>
    	      <p className="text-xs text-gray-400">6</p>
    	    </div>
    	
    	    {/* Item 4 */}
    	    <div className="bg-white p-2 rounded-lg border border-dashed border-gray-300">
    	      <div className="flex items-center justify-center py-6">
    	        <i className="material-symbols-outlined">add_circle_outline</i>
    	      </div>
    	      <p className="text-sm text-center">옷장 만들기</p>
    	    </div>
    	  </div>
    	
    	  {/* Bottom Navigation */}
    	  <nav className="w-full flex justify-between items-center bg-white rounded-t-lg p-2 border-t">
    	    <div className="flex flex-col items-center">
    	      <i className="material-symbols-outlined">home</i>
    	      <span className="text-xs">홈</span>
    	    </div>
    	    <div className="flex flex-col items-center">
    	      <i className="material-symbols-outlined">store_mall_directory</i>
    	      <span className="text-xs">빈티지샵</span>
    	    </div>
    	    <div className="flex flex-col items-center">
    	      <i className="material-symbols-outlined">favorite</i>
    	      <span className="text-xs">찜</span>
    	    </div>
    	    <div className="flex flex-col items-center">
    	      <i className="material-symbols-outlined">wardrobe</i>
    	      <span className="text-xs">옷장</span>
    	    </div>
    	    <div className="flex flex-col items-center">
    	      <i className="material-symbols-outlined">person</i>
    	      <span className="text-xs">마이</span>
    	    </div>
    	  </nav>
    	</div> 
    </div>
  )
}

export default MyPlugin;