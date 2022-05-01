"use-trick";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const trunc = (string, limitNum) => {
  return string.length > limitNum ? string.slice(0, limitNum) + "..." : string;
};

// ? === Banner Carousel ===
const bannerNextBtn = $(".banner__slider__direction__btn.next");
const bannerPrevBtn = $(".banner__slider__direction__btn.prev");
const bannerSlides = $(".banner__slides");
const bannerSlideWidth = $$(".banner__slide__img__wrapper")[0].offsetWidth + 20;
const carouselHandler = (nextBtn, prevBtn, slides, slideWidth) => {
  let movePer = 0;
  let index = 0;
  const clickSlideHanlder = (direction) => {
    if (direction === 1) {
      if (index === 3) {
        return;
      }
      movePer -= slideWidth;
      slides.style = `transform: translateX(${movePer}px);`;
      index++;
    }
    if (direction === -1) {
      if (index === 0) {
        return;
      }
      movePer += slideWidth;
      slides.style = `transform: translateX(${movePer}px);`;
      index--;
    }
  };
  nextBtn.onclick = () => {
    clickSlideHanlder(1);
  };
  prevBtn.onclick = () => {
    clickSlideHanlder(-1);
  };
};

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
      name: "Chú Thuật Hồi Chiến - Tập 2",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 2,
      name: "Dạy Con Làm Giàu - Tập 1 (Tái Bản 2018)",
      price: "3.990",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 3,
      name: "Dạy Con Làm Giàu 02 - Sử Dụng Đồng Vốn (Tái Bản 2020)",
      price: "7.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 4,
      name: "Người Bán Hàng Vĩ Đại Nhất Thế Giới",
      price: "16.290",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 5,
      name: "Netflix: Phá Bỏ Nguyên Tắc Để Bứt Phá - No Rules Rules",
      price: "33.990",
      rate: 4.6,
      amountRate: 341,
    },
    {
      label: "Trả góp 0%",
      img: 6,
      name: "Chiến Tranh Tiền Tệ - Phần 1",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 7,
      name: "Báo Cáo Tài Chính Dưới Góc Nhìn Của Warren Buffett (Tái Bản)",
      price: "12.990.000₫",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 8,
      name: "Bước Đi Ngẫu Nhiên Trên Phố Wall (Tái Bản 2021)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 9,
      name: "Nhà Đầu Tư Thông Minh (Tái Bản 2020)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 10,
      name: "Báo Cáo Tài Chính ",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 11,
      name: "Tiếp Thị 4.0 - Dịch Chuyển Từ Truyền Thống Sang Công Nghệ",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 12,
      name: "Phân Tích Chứng Khoán (Security Analysis)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 13,
      name: "Từ Tốt Đến Vĩ Đại - Jim Collins (Tái Bản 2021)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 14,
      name: "Một Đời Quản Trị (Tái Bản 2019)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 15,
      name: "Kinh Doanh - Khái Lược Những Tư Tưởng Lớn",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 16,
      name: "Trên Đỉnh Phố Wall (Tái Bản 2021)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 17,
      name: "Đầu Tư Tài Chính (Tái Bản)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 18,
      name: "Bán Hàng Shopee Thực Chiến Từ A-Z",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 19,
      name: "Digital Marketing - Từ Chiến Lược Đến Thực Thi (Tái Bản)",
      price: "10.490",
      rate: 3.8,
      amountRate: 73,
    },
    {
      label: "Trả góp 0%",
      img: 20,
      name: "Bán Hàng Cho Người Giàu",
      price: "10.490",
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
      content:
        " AirPods 2 chưa bao giờ là hết HOT, lại còn đang được giảm tiền triệu tại Thế Giới Di Động, không mua uổng lắm",
    },
    {
      img: 2,
      content:
        "Mùa mưa sắp tới rồi, tham khảo ngay 5 điện thoại chống nước đáng mua nhất với đủ phân khúc giá từ tầm trung tới cao cấp",
    },
    {
      img: 3,
      content:
        "Đón lễ lớn giảm tối đa đến 3.7 triệu đồng, iPhone 12 128GB giá hời quá xá, mua ngay bây giờ bạn ơi!",
    },
  ],
  render() {
    const techNewBlogList = $(".techNew__blog__list");
    let htmls = this.blogData.map((blog, index) => {
      return `
          <div class="c-4 gutter">
                <a href="#" class="techNew__blog__wrapper">
                    <span class="techNew__blog__img__wrapepr">
                        <img src="./assets/img/techNew/blog/${
                          blog.img
                        }.jpg" alt="1"
                            class="techNew__blog__img">
                    </span>
                    <p class="techNew__blog__content">
                        ${trunc(blog.content, 68)}
                    </p>
                </a>
            </div>
          `;
    });
    techNewBlogList.innerHTML = htmls.join("");
  },
};
const accountHandler = {
  userData: {},
  // getUserValue (){
  //   const inputs = $$(".login__field__input");
  //   inputs.forEach((input, index) => {
  //     input.addEventListener("change", (e) => {
  //       this.userData[e.target.attributes.data.value] = e.target.value
  //       console.log(this.userData)
  //     });
  //   });

  // },
  eventHanlder: () => {
    const openBtn = $(".header__top__account__btn");
    const closeBtn = $(".login__btn.back");
    const signUpBg = $(".login__wrapper__modal__background");
    // * Dòng này để bật login modal
    openBtn.addEventListener("click", () => {
      signUpBg.style = `display: block;`;
    });
    // * Dòng này để tắt login modal
    closeBtn.addEventListener("click", () => {
      signUpBg.style = `display: none;`;
    });
  },
  renderField() {
    const data = {
      signIn: [
        {
          field: "taiKhoan",
          type: "text",
          content: "Nhập tài khoản",
        },
        {
          field: "matKhau",
          type: "password",
          content: "Nhập mật khẩu",
        },
      ],
      signUp: [
        {
          field: "hoTen",
          type: "text",
          content: "Họ và tên",
        },
        {
          field: "taiKhoan",
          type: "text",
          content: "Tài khoản",
        },
        {
          field: "email",
          type: "text",
          content: "Email",
        },
        {
          field: "diaChi",
          type: "text",
          content: "Địa chỉ",
        },
        {
          field: "dienThoai",
          type: "text",
          content: "Điện thoại",
        },
        {
          field: "gioiTinh",
          type: "text",
          content: "Giới tính",
        },
        {
          field: "ngaySinh",
          type: "text",
          content: "Ngày sinh",
        },
      ],
    };
    const switchBtns = $$(".login__title");
    const loginContent = $(".login__content");
    const confirmBtn = $(".login__btn.confirm");
    let dataKey = "";
    switchBtns.forEach((btn, index) => {
      if (index === 0) {
        dataKey = "signIn";
        let fieldHtmls = data[dataKey].map((field, index) => {
          return `<div class="login__field__wrapper" key=${index} >
                      <label for=${field.field} class="login__field__label">${field.content}</label>
                      <input data=${field.field} type=${field.type} class="login__field__input"
                      >
                  </div>`;
        });
        loginContent.innerHTML = fieldHtmls.join("");
        confirmBtn.innerHTML = dataKey === "signIn" ? "Đăng nhập" : "Đăng kí";
      }
      // * Lặp qua 2 nút đăng nhập và đăng kí để bắt sự kiên user click => người dùng click zo đăng nhập thì chuyển sang các input field đăng nhập và đăng kí thì chuyển sang input field đăng kí
      btn.addEventListener("click", (e) => {
        // * Khi người dùng click vào 1 trong 2 nút đăng nhập đăng hoặc đăng kí thì bước 1 là xóa cái class active mặc định ban đầu
        // * class active để => style chữ đỏ và có gạch chân màu đỏ
        $(".login__title.active").classList.remove("active");
        // * bước 2 là thêm class active vào nút người dùng vừa click
        btn.classList.add("active");
        // * biến dataKey để render đăng nhập hay đăng kí tùy vào user click => Khi user click vào nút sẽ lấy attribute key [file html dòng 833 và 836] => lấy key bên thẻ h1 gán cho biến dataKey
        dataKey = e.target.getAttribute("key");
        let fieldHtmls = data[dataKey].map((field, index) => {
          return `<div class="login__field__wrapper" key=${index} >
                      <label for=${field.field} class="login__field__label">${field.content}</label>
                      <input type=${field.type} class="login__field__input"
                      >
                  </div>`;
        });
        loginContent.innerHTML = fieldHtmls.join("");
        confirmBtn.innerHTML = dataKey === "signIn" ? "Đăng nhập" : "Đăng kí";
      });
    });
  },
  start() {
    this.eventHanlder();
    this.renderField();
  },
};
const main = (() => {
  dailyBg.render();
  carouselHandler(bannerNextBtn, bannerPrevBtn, bannerSlides, bannerSlideWidth);
  accountHandler.start();
})();
