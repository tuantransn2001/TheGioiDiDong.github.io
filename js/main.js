"use-trick";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const trunc = (string,limitNum) => {
    return string.length > limitNum ? string.slice(0,limitNum) + '...' : string
}


const cateFeature = {
  data: [
    {
      id: 1,
      img: 1,
      title: "Điện thoại",
    },
    {
      id: 2,
      img: 2,
      title: "Laptop",
    },
    {
      id: 3,
      img: 3,
      title: "Tablet",
    },
    {
      id: 4,
      img: 4,
      title: "Đồng hồ thông minh",
    },
    {
      id: 5,
      img: 5,
      title: "Đồng hồ thời trang",
    },
    {
      id: 6,
      img: 6,
      title: "Thiết bị mạng",
    },
    {
      id: 7,
      img: 7,
      title: "Ốp lưng",
    },
    {
      id: 8,
      img: 8,
      title: "Trang sức",
    },
    {
      id: 9,
      img: 9,
      title: "Mắt kính",
    },
    {
      id: 10,
      img: 10,
      title: "Sim,thẻ cào",
    },
    {
      id: 11,
      img: 11,
      title: "Loa",
    },
    {
      id: 12,
      img: 12,
      title: "Tai nghe",
    },
    {
      id: 13,
      img: 13,
      title: "Sạc dự phòng",
    },
    {
      id: 14,
      img: 14,
      title: "Cáp sạc",
    },
    {
      id: 15,
      img: 15,
      title: "Máy tính bộ",
    },
    {
      id: 16,
      img: 16,
      title: "Máy in",
    },
    {
      id: 17,
      img: 17,
      title: "Màn hình máy tính",
    },
    {
      id: 18,
      img: 18,
      title: "Phụ kiện gaming",
    },
    {
      id: 19,
      img: 19,
      title: "Camera,Webcam",
    },
    {
      id: 20,
      img: 20,
      title: "Thiết bị nhà thông minh",
    },
  ],
  render() {
    const cateFeatureList = $(".cate__feature__list");
    let htmls = this.data.map((item, index) => {
      return `
        <div class="c-1-2 mt-gutter" key=${index}>
            <a href="#" class="cate__feature__iem__wrapper" key=${index} >
                <span class="cate__feature__img__wrapper flex-center">
                    <img src="./assets/img/cateFeature/${item.img}.png" alt="cate feature item" class="cate__feature__img">
                </span>
                <p class="cate__feature__content">${item.title}</p>
            </a>
        </div>    
        `;
    });
    cateFeatureList.innerHTML = htmls.join("");
  },
};

const dailyBg = {
  data: [
    {
      label: "Trả góp 0%",
      img: 1,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 2,
      name: "Realme C35 64GB",
      price: "3.990.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 3,
      name: "Realme 9 Pro 5G",
      price: "7.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 4,
      name: "iPhone 11 64GB",
      price: "16.290.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 5,
      name: "iPhone 13 Pro Max 128GB",
      price: "33.990.000",
      rate: 4.6,
      amountRate: 341,
    },
    {
      label: "Trả góp 0%",
      img: 6,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 7,
      name: "OPPO Reno7 5G",
      price: "12.990.000₫",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 8,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 9,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 10,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 11,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 12,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 13,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 14,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 15,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 16,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 17,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 18,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 19,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 20,
      name: "OPPO Reno7 Z 5G",
      price: "10.490.000",
      rate: 3.8,
      amountRate: 73,
    },
  ],
  render() {
    const dailyBgDeviceList = $(".daily__bg__device__list");
    let htmls = this.data.map((device, index) => {
      return `<div class="c-2-4 gutter" key=${device.img}>
            <a href="#" class="daily__bg__device">
                <p class="daily__bg__device__lb">${device.label}</p>
                <span class="daily__bg__device__img__wrapper">
                    <img src="./assets/img/dailyBg/device/${device.img}.jpg" alt=${device.name} class="daily__bg__device__img">
                </span>
                <span class="daily__bg__device__info">
                    <h1 class="daily__bg__device__name">${device.name}</h1>
                    <p class="daily__bg__device__price">
                        ${device.price}
                        <span class="daily__bg__device__price__strong">đ</span>
                    </p>
                    <span class="daily__bg__device__rate__wrapper">
                        <p class="daily__bg__device__rate__mark">${device.rate}</p>
                        <i class="fa-solid fa-star daily__bg__device__rate__icon"></i>
                        <p class="daily__bg__device__rate__amount">(${device.amountRate})</p> 
                    </span>
                </span>
            </a>
        </div>`;
    });
    dailyBgDeviceList.innerHTML = htmls.join("");
  },
};

const techNew = {
  blogData: [
      {
          img: 1,
          content: " AirPods 2 chưa bao giờ là hết HOT, lại còn đang được giảm tiền triệu tại Thế Giới Di Động, không mua uổng lắm"
      },
      {
          img: 2,
          content: 'Mùa mưa sắp tới rồi, tham khảo ngay 5 điện thoại chống nước đáng mua nhất với đủ phân khúc giá từ tầm trung tới cao cấp'
      },
      {
          img: 3,
          content: 'Đón lễ lớn giảm tối đa đến 3.7 triệu đồng, iPhone 12 128GB giá hời quá xá, mua ngay bây giờ bạn ơi!'
      },
  ],
  render() {
      const techNewBlogList = $('.techNew__blog__list')
      let htmls = this.blogData.map((blog,index)=>{
          return `
          <div class="c-4 gutter">
                <a href="#" class="techNew__blog__wrapper">
                    <span class="techNew__blog__img__wrapepr">
                        <img src="./assets/img/techNew/blog/${blog.img}.jpg" alt="1"
                            class="techNew__blog__img">
                    </span>
                    <p class="techNew__blog__content">
                        ${trunc(blog.content,68)}
                    </p>
                </a>
            </div>
          `
      })
      techNewBlogList.innerHTML = htmls.join('')
  },
};

const main = (() => {
  cateFeature.render();
  dailyBg.render();
  techNew.render();
})();
