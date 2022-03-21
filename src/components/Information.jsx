import React from "react";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();

  const product = [
    {
      "id": 0,
      "name": "ENTEGRE KULP PROFİLLERİ",
    },
    {
      "id": 1,
      "name": "CAM KAPAK PROFİLLERİ",
    },
    {
      "id": 2,

      "name": "RAY KAPAK PROFİLLERİ",
    },
    {
      "id": 3,
      "name": "MOBİLYA PROFİLLERİ",
    },
  ];

  const detail = (id) => {
    console.log(id);
  };
  return (
    <div className="max-w-[1800px] m-auto text-sm md:text-base">
      <div className="my-1 lg:my-12 xl:my-2 flex flex-wrap items-center justify-around ">
        <img
          className="w-full max-h-[500px] xl:max-h-full xl:w-[650px] 2xl:w-[800px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/images/homeleft.png"
          alt=""
        />
        <div className="xl:max-w-[500px] 2xl:max-w-[600px] space-y-4 md:space-y-7 p-2">
          <p className="md:text-6xl text-xl">HAKKIMIZDA</p>
          <hr className="w-20 border-2 border-[#978148] rounded-full" />
          <p>
            Gökmen Zeki Alüminyum Kapak Sistemleri, 1997 yılında İzmir Karşıyaka
            Şemikler’de kurulmuş; uzun süre perakende cam sektöründe hizmet
            vermiştir. 2009 yılında ise alüminyum cam kapak ve ray dolap kapağı
            imalatı ile mobilya sektörüne başlamıştır. Ufkunu hep açık tutan,
            prensiplerinden ödün vermeyen, yenilikçi işletme vizyonunu hiç
            bozmayan Gökmen Zeki; hedefi daima müşteri memnuniyeti olan ve
            kazancını müşteri memnuniyeti için harcayan bir firma olmaya devam
            edecektir. Gökmen Zeki, yeni markası Propino ile daha inovatif, daha
            aktif bir firma yolunda emin adımlarla yürümekte ve sektördeki
            yerini ön sıralara taşımaktadır.
          </p>
        </div>
      </div>
      <div className="my-12 xl:-my-1 hidden xl:flex flex-wrap items-center justify-around  ">
        <div className="xl:max-w-[500px] 2xl:max-w-[600px] space-y-4 md:space-y-7 p-2 text-center ">
          <p className="md:text-6xl text-xl">ÜRÜNLERİMİZ</p>
          <p className="tracking-wider">
            İhtiyacınız olan her şey Propino kalitesiyle burada. Ürünleri daha
            yakından incelemek için tıklayın.
          </p>
          <div className="space-y-4 text-left xl:pt-6">
            {product.map((prd, i) => (
              <p
                onClick={() => navigate(`/detail/${prd.id}`)}
                className="border-b border-[#978148] pb-2 cursor-pointer font-semibold"
                key={i}
              >
                {prd.name}
              </p>
            ))}
          </div>
        </div>
        <img
          className="max-h-[500px] xl:max-h-full w-full xl:w-[650px] 2xl:w-[800px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/images/homeright.png"
          alt=""
        />
      </div>
      <div className="my-12 xl:my-2 flex xl:hidden flex-wrap items-center justify-around  ">
        <img
          className="max-h-[500px] xl:max-h-full w-full xl:w-[650px] 2xl:w-[800px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/images/homeright.png"
          alt=""
        />
        <div className="xl:max-w-[500px] 2xl:max-w-[600px] space-y-4 md:space-y-7 p-2 text-center ">
          <p className="md:text-6xl text-xl">ÜRÜNLERİMİZ</p>
          <p className="tracking-wider">
            İhtiyacınız olan her şey Propino kalitesiyle burada. Ürünleri daha
            yakından incelemek için tıklayın.
          </p>
          <div className="space-y-4 text-left xl:pt-6">
            {product.map((prd, i) => (
              <p
                onClick={() => detail(i)}
                className="border-b pb-2 cursor-pointer font-semibold border-[#978148]"
                key={i}
              >
                {prd.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
